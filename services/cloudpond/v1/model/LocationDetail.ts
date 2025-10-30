import { Condition } from './Condition';


export class LocationDetail {
    public name?: string;
    private 'zone_code'?: string;
    public address?: string;
    public description?: string;
    public country?: string;
    public province?: string;
    public city?: string;
    public district?: string;
    public condition?: Condition;
    public constructor() { 
    }
    public withName(name: string): LocationDetail {
        this['name'] = name;
        return this;
    }
    public withZoneCode(zoneCode: string): LocationDetail {
        this['zone_code'] = zoneCode;
        return this;
    }
    public set zoneCode(zoneCode: string  | undefined) {
        this['zone_code'] = zoneCode;
    }
    public get zoneCode(): string | undefined {
        return this['zone_code'];
    }
    public withAddress(address: string): LocationDetail {
        this['address'] = address;
        return this;
    }
    public withDescription(description: string): LocationDetail {
        this['description'] = description;
        return this;
    }
    public withCountry(country: string): LocationDetail {
        this['country'] = country;
        return this;
    }
    public withProvince(province: string): LocationDetail {
        this['province'] = province;
        return this;
    }
    public withCity(city: string): LocationDetail {
        this['city'] = city;
        return this;
    }
    public withDistrict(district: string): LocationDetail {
        this['district'] = district;
        return this;
    }
    public withCondition(condition: Condition): LocationDetail {
        this['condition'] = condition;
        return this;
    }
}