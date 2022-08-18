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
    } 
    
    
}

