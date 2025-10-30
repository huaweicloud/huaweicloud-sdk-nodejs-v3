import { UpdateCondition } from './UpdateCondition';


export class UpdateLocation {
    public name?: string;
    public country?: UpdateLocationCountryEnum | string;
    public province?: string;
    public city?: string;
    public district?: string;
    public condition?: UpdateCondition;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateLocation {
        this['name'] = name;
        return this;
    }
    public withCountry(country: UpdateLocationCountryEnum | string): UpdateLocation {
        this['country'] = country;
        return this;
    }
    public withProvince(province: string): UpdateLocation {
        this['province'] = province;
        return this;
    }
    public withCity(city: string): UpdateLocation {
        this['city'] = city;
        return this;
    }
    public withDistrict(district: string): UpdateLocation {
        this['district'] = district;
        return this;
    }
    public withCondition(condition: UpdateCondition): UpdateLocation {
        this['condition'] = condition;
        return this;
    }
    public withDescription(description: string): UpdateLocation {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateLocationCountryEnum {
    CN = 'CN'
}
