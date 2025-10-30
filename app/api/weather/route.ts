import { NextResponse } from 'next/server';

export async function GET() {
  // Hardcoded weather data
  const weatherData = {
    location: {
      city: 'San Francisco',
      country: 'USA',
      coordinates: {
        latitude: 37.7749,
        longitude: -122.4194,
      },
    },
    current: {
      temperature: 18,
      temperatureUnit: 'celsius',
      condition: 'Partly Cloudy',
      humidity: 65,
      windSpeed: 12,
      windSpeedUnit: 'km/h',
      pressure: 1013,
      pressureUnit: 'hPa',
      visibility: 10,
      visibilityUnit: 'km',
    },
    forecast: [
      {
        day: 'Monday',
        high: 20,
        low: 15,
        condition: 'Sunny',
      },
      {
        day: 'Tuesday',
        high: 19,
        low: 14,
        condition: 'Partly Cloudy',
      },
      {
        day: 'Wednesday',
        high: 17,
        low: 13,
        condition: 'Rainy',
      },
    ],
    timestamp: new Date().toISOString(),
  };

  return NextResponse.json(weatherData, { status: 200 });
}

