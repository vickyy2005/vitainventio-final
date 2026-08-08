'use client'

import { useEffect } from 'react'

let globalAudioCtx: AudioContext | null = null;

export function SoundProvider() {
  useEffect(() => {
    const playClickSound = () => {
      try {
        if (!globalAudioCtx) {
          globalAudioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        }
        
        if (globalAudioCtx.state === 'suspended') {
          globalAudioCtx.resume();
        }

        const now = globalAudioCtx.currentTime;

        // Rich, audible modern tech pop sound using dual oscillators
        const osc1 = globalAudioCtx.createOscillator();
        const osc2 = globalAudioCtx.createOscillator();
        const gainNode = globalAudioCtx.createGain();

        osc1.connect(gainNode);
        osc2.connect(gainNode);
        gainNode.connect(globalAudioCtx.destination);

        // Sine wave (clean tone)
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(1000, now);
        osc1.frequency.exponentialRampToValueAtTime(300, now + 0.05);

        // Triangle wave (rich body)
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(800, now);
        osc2.frequency.exponentialRampToValueAtTime(200, now + 0.05);

        // Elevated volume level (fully audible)
        gainNode.gain.setValueAtTime(0.08, now);
        gainNode.gain.exponentialRampToValueAtTime(0.00001, now + 0.05);

        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 0.05);
        osc2.stop(now + 0.05);
      } catch (e) {
        // Handled silently
      }
    };

    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.workflow-step') ||
        target.closest('.np-card') ||
        target.closest('.portfolio-card') ||
        target.closest('.value-card-new') ||
        target.closest('.stat-item') ||
        target.closest('.faq-item') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('select') ||
        target.style.cursor === 'pointer'
      ) {
        playClickSound();
      }
    };

    window.addEventListener('mousedown', handleGlobalClick);
    return () => {
      window.removeEventListener('mousedown', handleGlobalClick);
    };
  }, []);

  return null;
}
