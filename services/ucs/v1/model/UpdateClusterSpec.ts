

export class UpdateClusterSpec {
    public country?: string;
    public city?: string;
    public constructor() { 
    }
    public withCountry(country: string): UpdateClusterSpec {
        this['country'] = country;
        return this;
    }
    public withCity(city: string): UpdateClusterSpec {
        this['city'] = city;
        return this;
    }
}