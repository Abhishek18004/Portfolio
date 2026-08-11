import React, { useEffect, useRef } from 'react';
import './Hero.css';

function Hero() {
  const canvasRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = heroRef.current.offsetWidth);
    let height = (canvas.height = heroRef.current.offsetHeight);

    const handleResize = () => {
      if (!heroRef.current || !canvas) return;
      width = canvas.width = heroRef.current.offsetWidth;
      height = canvas.height = heroRef.current.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    const mouse = { x: null, y: null, radius: 150 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const heroElem = heroRef.current;
    heroElem.addEventListener('mousemove', handleMouseMove);
    heroElem.addEventListener('mouseleave', handleMouseLeave);

    const particles = [];
    const particleCount = Math.floor((width * height) / 10000);

    class Particle {
      constructor() {
        this.originX = Math.random() * width;
        this.originY = Math.random() * height;
        this.x = this.originX;
        this.y = this.originY;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.radius = Math.random() * 2 + 1.5;
        this.color = Math.random() > 0.3 ? '#38bdf8' : '#ffc857';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            this.x += Math.cos(angle) * force * 6;
            this.y += Math.sin(angle) * force * 6;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.25 * (1 - dist / 110)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (heroElem) {
        heroElem.removeEventListener('mousemove', handleMouseMove);
        heroElem.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleResumeClick = () => {
    window.open('https://drive.google.com/file/d/1DqL-MeJPQ7kn6KGfUqGFu3UMnNAWUMFh/view?usp=sharing', '_blank');
  };

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <canvas ref={canvasRef} className="constellation-canvas" />

      <div className="hero-left">
        <div className="cyber-frame-wrapper">
          <div className="cyber-ring"></div>
          <div className="cyber-glow"></div>
          <div className="hero-image-frame">
            <img src={`${process.env.PUBLIC_URL}/main_photo.jpg`} alt="Abhishek Karthik" />
          </div>
        </div>
      </div>

      <div className="hero-right">
        <p className="greeting">Hey there, this is</p>
        <h1 className="name">Abhishek Karthik</h1>
        <p className="subtitle">AI/ML Engineer | Computer Vision & GenAI Specialist | Gold Medalist        </p>
        <div className="hero-buttons">
          <button className="pushable btn-filled" onClick={handleResumeClick}>
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front">Resume</span>
          </button>

          <a
            href="https://www.linkedin.com/in/abhishek-karthik-567981291/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline button"
          >
            <span className="text">LinkedIn</span>
          </a>

          <a
            href="https://github.com/Abhishek18004"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline button"
          >
            <span className="text">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;