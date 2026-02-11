
import React from 'react';
import { 
  Globe, 
  Smartphone, 
  Cpu, 
  BarChart3, 
  Code2, 
  Layers, 
  Zap, 
  ShieldCheck, 
  Rocket, 
  Users, 
  Database, 
  BrainCircuit 
} from 'lucide-react';
import { ServiceCategory } from './types';

export const SERVICES: ServiceCategory[] = [
  {
    id: 'web',
    name: 'Websites',
    icon: 'Globe',
    items: [
      {
        title: 'Custom Website Redesign',
        description: 'Enhance your existing website with a modern, user-friendly redesign that aligns with your brand\'s vision and goals. Our redesign services improve aesthetics, functionality, and performance.'
      },
      {
        title: 'Landing Page Design',
        description: 'High-converting landing pages tailored to specific campaigns, promotions, or products, ensuring an effective first impression and driving conversions.'
      },
      {
        title: 'Web Portal Development',
        description: 'Custom web portals for businesses, customers, or partners, providing a centralized platform to manage operations and streamline processes.'
      },
      {
        title: 'Corporate Website Development',
        description: 'Build a professional corporate website that effectively communicates your brand’s message and strengthens your reputation.'
      },
      {
        title: 'Blog & News Platforms',
        description: 'Sleek, easy-to-manage blog or news websites with intuitive CMS, enabling you to publish articles and engage your audience regularly.'
      },
      {
        title: 'Custom CMS Solutions',
        description: 'Empower your team to easily manage website content with our custom CMS development built to meet your specific requirements.'
      },
      {
        title: 'Custom Web Applications',
        description: 'Tailored web applications addressing specific business needs, offering customized functionalities to improve workflow and productivity.'
      },
      {
        title: 'Membership & Subscriptions',
        description: 'Develop membership-based websites with gated content, exclusive access, or services with secure user management.'
      },
      {
        title: 'Web Maintenance & Support',
        description: 'Ongoing technical support and maintenance to ensure your website runs smoothly and stays up to date.'
      }
    ]
  },
  {
    id: 'mobile',
    name: 'Mobile Apps',
    icon: 'Smartphone',
    items: [
      {
        title: 'iOS & Android Development',
        description: 'Native application development providing the best performance and user experience for Apple and Android ecosystems.'
      },
      {
        title: 'Cross-Platform Solutions',
        description: 'Cost-effective mobile apps built with Flutter or React Native that run seamlessly on both platforms from a single codebase.'
      },
      {
        title: 'Mobile UI/UX Design',
        description: 'User-centric interface design focused on intuitive navigation and stunning visuals tailored for touch interaction.'
      },
      {
        title: 'App Store Optimization',
        description: 'Strategies to improve your app\'s visibility in the App Store and Google Play Store to drive organic downloads.'
      },
      {
        title: 'Enterprise Mobile Apps',
        description: 'Secure, scalable mobile tools designed to boost employee productivity and internal business operations.'
      }
    ]
  },
  {
    id: 'ai',
    name: 'AI & Automation',
    icon: 'Cpu',
    items: [
      {
        title: 'Custom AI Solutions',
        description: 'Integrating state-of-the-art LLMs and machine learning models to solve specific business challenges and innovate.'
      },
      {
        title: 'Intelligent Chatbots',
        description: 'AI-driven conversational agents that provide 24/7 support and lead generation with natural language understanding.'
      },
      {
        title: 'Workflow Automation',
        description: 'Eliminate repetitive tasks by automating business processes, saving time and reducing human error.'
      },
      {
        title: 'Predictive Modeling',
        description: 'Using historical data to build models that forecast future trends, behaviors, and business outcomes.'
      }
    ]
  },
  {
    id: 'data',
    name: 'Data Analysis',
    icon: 'BarChart3',
    items: [
      {
        title: 'Interactive Dashboards',
        description: 'Visualizing complex data through clean, real-time dashboards that make decision-making easier for stakeholders.'
      },
      {
        title: 'Business Intelligence',
        description: 'Turning raw data into actionable insights to improve operational efficiency and market positioning.'
      },
      {
        title: 'Data Cleaning & Prep',
        description: 'Systematic approach to cleaning, organizing, and preparing messy datasets for accurate analysis.'
      },
      {
        title: 'Statistical Reporting',
        description: 'Deep-dive statistical analysis and comprehensive reports that uncover the "why" behind your metrics.'
      }
    ]
  }
];

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' }
];

export const LOGO_URL = "https://images.lucidchart.com/lucidchart/products/lucidchart/marketing/lp/templates/technical/network-diagram-basic-aws.png";
