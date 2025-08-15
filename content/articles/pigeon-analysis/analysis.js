// Pigeon Environmental Analysis - Data visualization and analysis
// Uses shared constants for consistency with game

import { PIGEON_DATA, THEME } from '../../../shared/constants.js';

export class PigeonAnalysis {
    constructor(chartCanvasId) {
        this.chartCanvas = document.getElementById(chartCanvasId);
        this.chartCtx = this.chartCanvas.getContext('2d');
        
        this.init();
    }
    
    init() {
        this.drawChart();
        this.updateArticleContent();
    }
    
    drawChart() {
        const data = [
            { 
                label: PIGEON_DATA.LABELS.POWER, 
                value: PIGEON_DATA.POWER_OUTAGES, 
                color: PIGEON_DATA.COLORS.POWER 
            },
            { 
                label: PIGEON_DATA.LABELS.COOLING, 
                value: PIGEON_DATA.COOLING_BLOCKAGE, 
                color: PIGEON_DATA.COLORS.COOLING 
            },
            { 
                label: PIGEON_DATA.LABELS.SOLAR, 
                value: PIGEON_DATA.SOLAR_EFFICIENCY_LOSS, 
                color: PIGEON_DATA.COLORS.SOLAR 
            }
        ];
        
        // Chart dimensions
        const barWidth = 120;
        const barSpacing = 40;
        const maxHeight = 200;
        const startX = 50;
        const startY = this.chartCanvas.height - 50;
        
        // Clear canvas
        this.chartCtx.fillStyle = '#000';
        this.chartCtx.fillRect(0, 0, this.chartCanvas.width, this.chartCanvas.height);
        
        // Draw bars
        data.forEach((item, index) => {
            const barHeight = (item.value / 25) * maxHeight; // Scale to max 25%
            const x = startX + index * (barWidth + barSpacing);
            const y = startY - barHeight;
            
            // Draw bar
            this.chartCtx.fillStyle = item.color;
            this.chartCtx.fillRect(x, y, barWidth, barHeight);
            
            // Draw label
            this.chartCtx.fillStyle = THEME.COLORS.TEXT;
            this.chartCtx.font = '12px Arial';
            this.chartCtx.textAlign = 'center';
            this.chartCtx.fillText(item.label, x + barWidth/2, startY + 20);
            
            // Draw value
            this.chartCtx.fillStyle = THEME.COLORS.PRIMARY;
            this.chartCtx.font = 'bold 14px Arial';
            this.chartCtx.fillText(`${item.value}%`, x + barWidth/2, y - 10);
        });
        
        // Draw title
        this.chartCtx.fillStyle = THEME.COLORS.TEXT;
        this.chartCtx.font = 'bold 16px Arial';
        this.chartCtx.textAlign = 'center';
        this.chartCtx.fillText('Pigeon Environmental Impact (%)', this.chartCanvas.width/2, 30);
        
        // Draw Y axis
        this.chartCtx.strokeStyle = '#666';
        this.chartCtx.lineWidth = 2;
        this.chartCtx.beginPath();
        this.chartCtx.moveTo(30, 50);
        this.chartCtx.lineTo(30, startY);
        this.chartCtx.stroke();
        
        // Draw Y axis labels
        this.chartCtx.fillStyle = '#888';
        this.chartCtx.font = '10px Arial';
        this.chartCtx.textAlign = 'right';
        for (let i = 0; i <= 25; i += 5) {
            const y = startY - (i / 25) * maxHeight;
            this.chartCtx.fillText(`${i}%`, 25, y + 3);
        }
    }
    
    updateArticleContent() {
        // Update article text with shared constants
        const titleElement = document.getElementById('article-title');
        const summaryElement = document.getElementById('executive-summary');
        const methodologyElement = document.getElementById('methodology');
        
        if (titleElement) titleElement.textContent = PIGEON_DATA.ARTICLE.TITLE;
        if (summaryElement) summaryElement.textContent = PIGEON_DATA.ARTICLE.EXECUTIVE_SUMMARY;
        if (methodologyElement) methodologyElement.textContent = PIGEON_DATA.ARTICLE.METHODOLOGY;
        
        // Update key findings with actual data
        this.updateKeyFindings();
    }
    
    updateKeyFindings() {
        const findingsElement = document.getElementById('key-findings');
        if (!findingsElement) return;
        
        findingsElement.innerHTML = `
            <li><strong>${PIGEON_DATA.LABELS.POWER}:</strong> Pigeons cause ${PIGEON_DATA.POWER_OUTAGES}% of urban power outages</li>
            <li><strong>${PIGEON_DATA.LABELS.COOLING}:</strong> Pigeon nests block ${PIGEON_DATA.COOLING_BLOCKAGE}% of cooling vents</li>
            <li><strong>${PIGEON_DATA.LABELS.SOLAR}:</strong> Pigeon droppings reduce solar efficiency by ${PIGEON_DATA.SOLAR_EFFICIENCY_LOSS}%</li>
        `;
    }
    
    // Method for data analysts to extend
    addNewData(label, value, color) {
        // This is where a data analyst could add new findings
        console.log(`New pigeon impact data: ${label} - ${value}% (${color})`);
        // Implementation would update PIGEON_DATA and redraw chart
    }
    
    // Export data for other tools
    exportData() {
        return {
            powerOutages: PIGEON_DATA.POWER_OUTAGES,
            coolingBlockage: PIGEON_DATA.COOLING_BLOCKAGE,
            solarLoss: PIGEON_DATA.SOLAR_EFFICIENCY_LOSS,
            timestamp: new Date().toISOString()
        };
    }
}