export interface People {
    birth_year?: string;
    eye_color?: string;
    films?: Film[];          
    gender?: string;
    hair_color?: string;
    height?: string;
    homeworld?: string;        
    mass?: string;
    name?: string;
    skin_color?: string;
    created?: string;          
    edited?: string;           
    species?: Species[];        
    starships?: Starship[];      
    url?: string;              
    vehicles?: string[];       
  }
  export interface Film {
    characters: People[];     
    created: string;          
    director: string;
    edited: string;           
    episode_id: number;
    opening_crawl: string;    
    planets: Planet[];        
    producer: string;
    release_date: string;     
    species: Species[];        
    starships: Starship[];      
    title: string;
    url: string;              
    vehicles: Vehicle[];       
  }
  export interface Starship {
    MGLT: string;             
    cargo_capacity: string;
    consumables: string;
    cost_in_credits: string;
    created: string;          
    crew: string;
    edited: string;           
    hyperdrive_rating: string;
    length: string;
    manufacturer: string;
    max_atmosphering_speed: string;
    model: string;
    name: string;
    passengers: string;
    films: Film[];          
    pilots: string[];         
    starship_class: string;
    url: string;              
  }
  export interface Vehicle {
    cargo_capacity: string;
    consumables: string;
    cost_in_credits: string;
    created: string;          
    crew: string;
    edited: string;           
    length: string;
    manufacturer: string;
    max_atmosphering_speed: string;
    model: string;
    name: string;
    passengers: string;
    films: Film[];          
    pilots: string[];         
    url: string;              
    vehicle_class: string;
  }
  export interface Species {
    average_height: string;
    average_lifespan: string;
    classification: string;
    created: string;          
    designation: string;
    edited: string;           
    eye_colors: string;       
    hair_colors: string;      
    homeworld: Planet[];      
    language: string;
    name: string;
    people: People[];         
    films: Film[];          
    skin_colors: string;    
    url: string;            
  }
  export interface Planet {
    climate: string;
    created: string;        
    diameter: string;
    edited: string;         
    films: Film[];          
    gravity: string;
    name: string;
    orbital_period: string;
    population: string;
    residents: People[];     
    rotation_period: string;
    surface_water: string;
    terrain: string;
    url: string;             
  }