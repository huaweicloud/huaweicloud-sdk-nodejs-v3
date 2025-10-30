

export class EventForensicInfoAbnormalLoginForensic {
    public ip?: string;
    public user?: string;
    public country?: string;
    private 'sub_division'?: string;
    public city?: string;
    private 'city_id'?: number;
    public constructor() { 
    }
    public withIp(ip: string): EventForensicInfoAbnormalLoginForensic {
        this['ip'] = ip;
        return this;
    }
    public withUser(user: string): EventForensicInfoAbnormalLoginForensic {
        this['user'] = user;
        return this;
    }
    public withCountry(country: string): EventForensicInfoAbnormalLoginForensic {
        this['country'] = country;
        return this;
    }
    public withSubDivision(subDivision: string): EventForensicInfoAbnormalLoginForensic {
        this['sub_division'] = subDivision;
        return this;
    }
    public set subDivision(subDivision: string  | undefined) {
        this['sub_division'] = subDivision;
    }
    public get subDivision(): string | undefined {
        return this['sub_division'];
    }
    public withCity(city: string): EventForensicInfoAbnormalLoginForensic {
        this['city'] = city;
        return this;
    }
    public withCityId(cityId: number): EventForensicInfoAbnormalLoginForensic {
        this['city_id'] = cityId;
        return this;
    }
    public set cityId(cityId: number  | undefined) {
        this['city_id'] = cityId;
    }
    public get cityId(): number | undefined {
        return this['city_id'];
    }
}