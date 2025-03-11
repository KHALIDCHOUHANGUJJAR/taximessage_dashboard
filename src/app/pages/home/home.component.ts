import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ChartModule, ButtonModule, CardModule, TableModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  activeButton = 'Total';
  lineChartData: any;
  lineChartOptions: any;
  gaugeChartData: any;
  gaugeChartOptions: any;
  totalMessagesPercentage = '30%';
  totalMessages = 34029;
  messageAverage = 23820;
  dailyAverage = 7209;

  currentDate = new Date().toISOString().split('T')[0];
  isHide = true;

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
      message: 'Dummy text is...',
    },
    {
      date: 'FEB 03/07/2024, 4:05PM',
      targetType: 'whatsapp',
      target: '+4795555555',
      messageType: 'Airload',
      status: 'whatsapp',
      sent: 'Not Sent',
      message: 'Dummy text is...',
    },
    {
      date: 'FEB 03/07/2024, 4:05PM',
      targetType: 'whatsapp',
      target: '+4795555555',
      messageType: 'Airload',
      status: 'whatsapp',
      sent: 'Not Sent',
      message: 'Dummy text is...',
    },
    {
      date: 'FEB 03/07/2024, 4:05PM',
      targetType: 'whatsapp',
      target: '+4795555555',
      messageType: 'Airload',
      status: 'whatsapp',
      sent: 'Not Sent',
      message: 'Dummy text is...',
    },
  ];

  originalDatasets: any[] = [];

  ngOnInit() {
    this.initLineChart();
    this.initGaugeChart();
  }

  setActiveButton(button: string) {
    this.activeButton = button;

    if (button === 'Total') {
      this.lineChartData.datasets = [...this.originalDatasets];
    } else {
      this.lineChartData.datasets = this.originalDatasets.filter(
        (dataset) => dataset.label === button
      );
    }

    this.lineChartData = { ...this.lineChartData };
  }

  initLineChart() {
    const documentStyle = getComputedStyle(document.documentElement);

    this.originalDatasets = [
      {
        label: 'Total Messages',
        data: [100, 100, 100, 5000, 100, 100],
        fill: true,
        borderColor: documentStyle.getPropertyValue('--blue-100'),
        tension: 0.1,
      },
      {
        label: 'WhatsApp',
        data: [1800, 5000, 2500, 2800, 2600, 2900],
        fill: true,
        borderColor: documentStyle.getPropertyValue('--green-500'),
        tension: 0.1,
      },
      {
        label: 'SMS',
        data: [500, 2000, 5000, 1600, 1800, 1700],
        fill: true,
        borderColor: documentStyle.getPropertyValue('--red-500'),
        tension: 0.1,
      },
      {
        label: 'Not Sent',
        data: [400, 500, 600, 700, 5000, 750],
        fill: true,
        borderColor: documentStyle.getPropertyValue('#EAB054'),
        tension: 0.1,
      },
    ];

    this.lineChartData = {
      labels: ['Feb 8', 'Feb 9', 'Feb 10', 'Feb 11', 'Feb 12', 'Feb 13'],
      datasets: [...this.originalDatasets], // Initially show all datasets
    };

    this.lineChartOptions = {
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            title: () => 'Tuesday, Feb 10, 2023',
          },
        },
      },
      scales: {
        x: { grid: { display: false } },
        y: {
          grid: {
            display: true,
            color: documentStyle.getPropertyValue('--surface-500'),
          },
        },
      },
    };
  }

  initGaugeChart() {
    const percentage = (this.dailyAverage / this.messageAverage) * 100;
    const remaning = 100 - percentage;

    this.gaugeChartData = {
      datasets: [
        {
          data: [percentage, remaning],
          backgroundColor: ['#3981F7', '#4CAF50'],
          borderWidth: 0,
          circumference: 180,
          rotation: 270,
        },
      ],
    };

    this.gaugeChartOptions = {
      plugins: { legend: { display: false }, tooltip: { enabled: false } },
      cutout: '70%',
      responsive: true,
      maintainAspectRatio: false,
    };
  }

  handleFilter = () => {
    this.isHide = !this.isHide;
  };
}
