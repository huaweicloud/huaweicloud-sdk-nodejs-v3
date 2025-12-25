

export class AlertDestGeo {
    public latitude?: number;
    public longitude?: number;
    private 'city_code'?: string;
    private 'country_code'?: string;
    public constructor() { 
    }
    public withLatitude(latitude: number): AlertDestGeo {
        this['latitude'] = latitude;
        return this;
    }
    public withLongitude(longitude: number): AlertDestGeo {
        this['longitude'] = longitude;
        return this;
    }
    public withCityCode(cityCode: string): AlertDestGeo {
        this['city_code'] = cityCode;
        return this;
    }
    public set cityCode(cityCode: string  | undefined) {
        this['city_code'] = cityCode;
    }
    public get cityCode(): string | undefined {
        return this['city_code'];
    }
    public withCountryCode(countryCode: string): AlertDestGeo {
        this['country_code'] = countryCode;
        return this;
    }
    public set countryCode(countryCode: string  | undefined) {
        this['country_code'] = countryCode;
    }
    public get countryCode(): string | undefined {
        return this['country_code'];
    }
}