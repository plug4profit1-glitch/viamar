import React from 'react';

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  url: string;
  description: string;
  imageSeed: number;
}

export interface PackageItem {
  name: string;
  price: number;
  period?: string; // 'eenmalig' or 'per maand'
  description: string;
  features: string[];
  isPopular?: boolean;
  isNew?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ServiceItem {
  title: string;
  icon: React.ElementType;
  description: string;
  features: string[];
}