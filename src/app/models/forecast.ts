export interface Forecast {
    forecast:{
        forecastday:[
            {
                date: string,
                day: {
                    maxtemp_c: string,
                    maxtemp_f: string,
                    mintemp_c: string,
                    mintemp_f: string,
                    avgtemp_c: string,
                    avgtemp_f: string,
                    condition:{
                        text: string,
                        icon: string,
                    },
                },
                astro: {
                    sunrise: string,
                    sunset: string,
                    moon_phase: string
                }
            }
        ]
    }
    
    
    }
