import { NextResponse } from 'next/server';

export async function GET() {
  const weatherData = {
    location: {
      city: 'San Francisco',
      country: 'USA',
      latitude: 37.7749,
      longitude: -122.4194,
    },
    current: {
      temperature: 22,
      condition: 'Partly Cloudy',
      humidity: 65,
      windSpeed: 15,
      description: 'A pleasant day with some clouds',
    },
    units: {
      temperature: '°C',
      humidity: '%',
      windSpeed: 'km/h',
    },
    timestamp: new Date().toISOString(),
  };

  return NextResponse.json(weatherData, { status: 200 });
}

