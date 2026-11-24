/**
 * COFUME CAFE — LUXURY AMBIENT SOUNDSCAPE (WEB AUDIO API)
 * Generates an ultra-subtle warm cafe room tone & gentle vinyl crackle
 */

class AudioAmbiance {
  constructor() {
    this.btn = document.getElementById('ambiance-toggle');
    this.isPlaying = false;
    this.audioCtx = null;
    this.noiseNode = null;
    this.gainNode = null;

    this.init();
  }

  init() {
    if (!this.btn) return;
    this.btn.addEventListener('click', () => this.toggle());
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
    } else {
      this.play();
    }
  }

  play() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;

      if (!this.audioCtx) {
        this.audioCtx = new AudioContext();
      }

      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      // Generate warm vinyl / room tone pink noise
      const bufferSize = this.audioCtx.sampleRate * 2;
      const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
      const data = buffer.getChannelData(0);

      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.012; // very gentle level
        b6 = white * 0.115926;
      }

      this.noiseNode = this.audioCtx.createBufferSource();
      this.noiseNode.buffer = buffer;
      this.noiseNode.loop = true;

      // Warm analog lowpass filter (softens highs, creates cozy warmth)
      const filter = this.audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(380, this.audioCtx.currentTime);

      this.gainNode = this.audioCtx.createGain();
      this.gainNode.gain.setValueAtTime(0.01, this.audioCtx.currentTime);
      this.gainNode.gain.exponentialRampToValueAtTime(0.35, this.audioCtx.currentTime + 1.5);

      this.noiseNode.connect(filter);
      filter.connect(this.gainNode);
      this.gainNode.connect(this.audioCtx.destination);

      this.noiseNode.start();
      this.isPlaying = true;
      this.btn.classList.add('is-active');
      this.btn.setAttribute('aria-label', 'Mute Ambient Soundscape');
      this.btn.setAttribute('title', 'Mute Ambient Soundscape');
    } catch (e) {
      console.warn('Audio ambiance could not be started:', e);
    }
  }

  stop() {
    if (this.gainNode && this.audioCtx) {
      this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, this.audioCtx.currentTime);
      this.gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.8);
      setTimeout(() => {
        if (this.noiseNode) {
          try { this.noiseNode.stop(); } catch (err) {}
          this.noiseNode.disconnect();
          this.noiseNode = null;
        }
      }, 850);
    }
    this.isPlaying = false;
    if (this.btn) {
      this.btn.classList.remove('is-active');
      this.btn.setAttribute('aria-label', 'Play Ambient Soundscape');
      this.btn.setAttribute('title', 'Play Ambient Soundscape');
    }
  }
}

export default AudioAmbiance;

