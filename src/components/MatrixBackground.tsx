import { useEffect, useRef, memo } from 'react';

// Optimized: Memoized for performance
export const MatrixBackground = memo(function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Matrix characters - usando 0, 1 e letras do nome "EDUARDO PIRES MARTINS"
    const chars = '01EDUARDOPIRESMTN';
    const charArray = chars.split('');

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    // Draw function
    const draw = () => {
      // Semi-transparent black for trail effect
      ctx.fillStyle = 'rgba(10, 10, 15, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text style
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = charArray[Math.floor(Math.random() * charArray.length)];

        // Create gradient for each character
        const gradient = ctx.createLinearGradient(
          i * fontSize,
          drops[i] * fontSize,
          i * fontSize,
          drops[i] * fontSize + fontSize
        );
        
        // Purple to magenta gradient matching the theme
        gradient.addColorStop(0, '#8620e0');
        gradient.addColorStop(1, '#f900f1');
        
        ctx.fillStyle = gradient;
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        // Reset drop to top randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    // Animation loop
    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
     className="absolute inset-0 w-full h-full opacity-30"
      style={{ pointerEvents: 'none' }}
    />
  );
});