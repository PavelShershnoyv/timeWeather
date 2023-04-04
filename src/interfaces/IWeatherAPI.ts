export interface IWeatherAPI {
  current: {
    condition:{
      icon: string,
      text: string
    },
    temp_c: number,
    feelslike_c: number,
    wind_kph: number,
    pressure_mb: number,
    humidity: number,
    uv: number
  },
  location: Object
}

//0,750063755419211