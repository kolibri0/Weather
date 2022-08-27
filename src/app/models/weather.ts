export interface Weather {
    location: {
        name: string,
        localtime: string,
        
    }
    current: {
        temp_c: string,
        temp_f: string,
        condition:{
            text: string,
            icon: string,
        }
        wind_kph: string,
        pressure_mb: string, 
        feelslike_c?: string,
        feelslike_f?: string,
        gust_kph?: string,
        humidity?: string,
        precip_mm?: string,
        wind_degree?: string,
        wind_dir?: string,
    } 
    
    
}

