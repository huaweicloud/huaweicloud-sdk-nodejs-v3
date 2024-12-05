import { UnscopedTokenInfoEndpoints } from './UnscopedTokenInfoEndpoints';


export class UnscopedTokenInfoCatalog {
    public id?: string;
    public name?: string;
    public type?: string;
    public endpoints?: Array<UnscopedTokenInfoEndpoints>;
    public constructor() { 
    }
    public withId(id: string): UnscopedTokenInfoCatalog {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UnscopedTokenInfoCatalog {
        this['name'] = name;
        return this;
    }
    public withType(type: string): UnscopedTokenInfoCatalog {
        this['type'] = type;
        return this;
    }
    public withEndpoints(endpoints: Array<UnscopedTokenInfoEndpoints>): UnscopedTokenInfoCatalog {
        this['endpoints'] = endpoints;
        return this;
    }
}