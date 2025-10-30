import { Condition } from './Condition';


export class CreateLocation {
    public name?: string;
    public address?: string;
    private 'zone_code'?: string;
    public province?: string;
    public city?: string;
    public district?: string;
    public country?: CreateLocationCountryEnum | string;
    public condition?: Condition;
    public description?: string;
    public constructor(condition?: Condition) { 
        this['condition'] = condition;
    }
    public withName(name: string): CreateLocation {
        this['name'] = name;
        return this;
    }
    public withAddress(address: string): CreateLocation {
        this['address'] = address;
        return this;
    }
    public withZoneCode(zoneCode: string): CreateLocation {
        this['zone_code'] = zoneCode;
        return this;
    }
    public set zoneCode(zoneCode: string  | undefined) {
        this['zone_code'] = zoneCode;
    }
    public get zoneCode(): string | undefined {
        return this['zone_code'];
    }
    public withProvince(province: string): CreateLocation {
        this['province'] = province;
        return this;
    }
    public withCity(city: string): CreateLocation {
        this['city'] = city;
        return this;
    }
    public withDistrict(district: string): CreateLocation {
        this['district'] = district;
        return this;
    }
    public withCountry(country: CreateLocationCountryEnum | string): CreateLocation {
        this['country'] = country;
        return this;
    }
    public withCondition(condition: Condition): CreateLocation {
        this['condition'] = condition;
        return this;
    }
    public withDescription(description: string): CreateLocation {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateLocationCountryEnum {
    CN = 'CN'
}
