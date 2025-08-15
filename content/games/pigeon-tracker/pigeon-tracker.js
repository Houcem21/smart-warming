// Pigeon Tracker Game - Demonstrates environmental monitoring
// Uses shared constants for consistency with article

import { PIGEON_DATA, THEME } from '../../../shared/constants.js';

export class PigeonTracker {
    constructor(canvasId, positionElementId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.positionElement = document.getElementById(positionElementId);
        
        this.mouseX = 0;
        this.mouseY = 0;
        this.trail = [];
        this.pigeons = []; // Add some pigeon objects
        
        this.init();
    }
    
    init() {
        // Create some pigeon objects that move around
        for (let i = 0; i < 5; i++) {
            this.pigeons.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                size: 8,
                impactType: i % 3, // Rotate through impact types
                detected: false
            });
        }
        
        this.setupEventListeners();
        this.animate();
    }
    
    setupEventListeners() {
        this.canvas.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            this.mouseX = e.clientX - rect.left;
            this.mouseY = e.clientY - rect.top;
            
            // Add to trail
            this.trail.push({ x: this.mouseX, y: this.mouseY, life: 30 });
            if (this.trail.length > 50) this.trail.shift();
            
            // Check pigeon detection
            this.checkPigeonDetection();
            
            // Update position display
            this.positionElement.textContent = `Tracker: X: ${Math.round(this.mouseX)}, Y: ${Math.round(this.mouseY)} | Pigeons Detected: ${this.getDetectedCount()}`;
        });
    }
    
    checkPigeonDetection() {
        this.pigeons.forEach(pigeon => {
            const distance = Math.sqrt(
                (this.mouseX - pigeon.x) ** 2 + 
                (this.mouseY - pigeon.y) ** 2
            );
            pigeon.detected = distance < 50; // Detection radius
        });
    }
    
    getDetectedCount() {
        return this.pigeons.filter(p => p.detected).length;
    }
    
    animate() {
        // Clear canvas
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw grid
        this.drawGrid();
        
        // Draw trail
        this.drawTrail();
        
        // Update and draw pigeons
        this.updatePigeons();
        this.drawPigeons();
        
        // Draw tracker (mouse position)
        this.drawTracker();
        
        requestAnimationFrame(() => this.animate());
    }
    
    drawGrid() {
        this.ctx.strokeStyle = THEME.COLORS.BORDER;
        this.ctx.lineWidth = 1;
        
        for (let x = 0; x < this.canvas.width; x += 50) {
            this.ctx.beginPath();
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, this.canvas.height);
            this.ctx.stroke();
        }
        
        for (let y = 0; y < this.canvas.height; y += 50) {
            this.ctx.beginPath();
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(this.canvas.width, y);
            this.ctx.stroke();
        }
    }
    
    drawTrail() {
        this.trail.forEach((point, index) => {
            const alpha = point.life / 30;
            this.ctx.fillStyle = `rgba(0, 255, 136, ${alpha})`;
            this.ctx.beginPath();
            this.ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
            this.ctx.fill();
            
            point.life--;
        });
        
        this.trail = this.trail.filter(point => point.life > 0);
    }
    
    updatePigeons() {
        this.pigeons.forEach(pigeon => {
            pigeon.x += pigeon.vx;
            pigeon.y += pigeon.vy;
            
            // Bounce off walls
            if (pigeon.x <= 0 || pigeon.x >= this.canvas.width) pigeon.vx *= -1;
            if (pigeon.y <= 0 || pigeon.y >= this.canvas.height) pigeon.vy *= -1;
            
            // Keep in bounds
            pigeon.x = Math.max(0, Math.min(this.canvas.width, pigeon.x));
            pigeon.y = Math.max(0, Math.min(this.canvas.height, pigeon.y));
        });
    }
    
    drawPigeons() {
        this.pigeons.forEach(pigeon => {
            // Get color based on impact type
            const colors = [PIGEON_DATA.COLORS.POWER, PIGEON_DATA.COLORS.COOLING, PIGEON_DATA.COLORS.SOLAR];
            const color = colors[pigeon.impactType];
            
            this.ctx.fillStyle = pigeon.detected ? THEME.COLORS.PRIMARY : color;
            this.ctx.beginPath();
            this.ctx.arc(pigeon.x, pigeon.y, pigeon.size, 0, Math.PI * 2);
            this.ctx.fill();
            
            // Draw detection radius when detected
            if (pigeon.detected) {
                this.ctx.strokeStyle = THEME.COLORS.PRIMARY;
                this.ctx.lineWidth = 2;
                this.ctx.beginPath();
                this.ctx.arc(pigeon.x, pigeon.y, 50, 0, Math.PI * 2);
                this.ctx.stroke();
            }
        });
    }
    
    drawTracker() {
        this.ctx.fillStyle = THEME.COLORS.PRIMARY;
        this.ctx.beginPath();
        this.ctx.arc(this.mouseX, this.mouseY, 5, 0, Math.PI * 2);
        this.ctx.fill();
    }
    
    // Get current game state for article integration
    getGameData() {
        return {
            detectedPigeons: this.getDetectedCount(),
            totalPigeons: this.pigeons.length,
            impactData: PIGEON_DATA
        };
    }
}