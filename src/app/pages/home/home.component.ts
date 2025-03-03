import { Component, type OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
@Component({
  selector: 'app-home',
  imports: [CommonModule, ChartModule, ButtonModule, CardModule, TableModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  activeButton = 'Total';
  lineChartData: any;
  lineChartOptions: any;
  gaugeChartData: any;
  gaugeChartOptions: any;

  totalMessages = 34029;
  totalMessagesPercentage = '30%';
  messageAverage = 12763;
  dailyAverage = 782;
  currentDate = new Date().toISOString().split('T')[0];

  devices = [
    { name: 'Samsung Galaxy A52', count: 120 },
    { name: 'Samsung Galaxy A52', count: 98 },
    { name: 'Samsung Galaxy A52', count: 87 },
  ];

  messages = [
    {
      date: 'FEB 03/07/2024, 4:05PM',
      targetType: 'whatsapp',
      target: '+4795555555',
      messageType: 'Airload',
      status: 'whatsapp',
      sent: 'Sent',
      message: 'Dummy text for message content...',
    },
    {
      date: 'FEB 03/07/2024, 4:05PM',
      targetType: 'whatsapp',
      target: '+4795555555',
      messageType: 'Airload',
      status: 'whatsapp',
      sent: 'Not Sent',
      message: 'Dummy text for message content...',
    },
  ];

  ngOnInit() {
    this.initLineChart();
    this.initGaugeChart();
  }

  setActiveButton(button: string) {
    this.activeButton = button;
  }

  initLineChart() {
    const documentStyle = getComputedStyle(document.documentElement);

    this.lineChartData = {
      labels: ['Feb 8', 'Feb 9', 'Feb 10', 'Feb 11', 'Feb 12', 'Feb 13'],
      datasets: [
        {
          label: 'Total Messages',
          data: [3200, 3800, 4335, 3900, 4100, 4300],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--yellow-500'),
          tension: 0.4,
        },
        {
          label: 'WhatsApp',
          data: [1800, 2200, 2500, 2800, 2600, 2900],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--green-500'),
          tension: 0.4,
        },
        {
          label: 'SMS',
          data: [1000, 1200, 1400, 1600, 1800, 1700],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          tension: 0.4,
        },
        {
          label: 'Not Sent',
          data: [400, 500, 600, 700, 800, 750],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--red-500'),
          tension: 0.4,
        },
      ],
    };

    this.lineChartOptions = {
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            title: (context: any) => 'Tuesday, Feb 10, 2023',
          },
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            display: true,
            color: documentStyle.getPropertyValue('--surface-200'),
          },
        },
      },
    };
  }

  initGaugeChart() {
    this.gaugeChartData = {
      datasets: [
        {
          data: [30, 70],
          backgroundColor: ['rgba(200, 200, 200, 0.2)', '#4CAF50'],
          borderWidth: 0,
          circumference: 180,
          rotation: 270,
        },
      ],
    };

    this.gaugeChartOptions = {
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
      cutout: '70%',
      responsive: true,
      maintainAspectRatio: false,
    };
  }
}
