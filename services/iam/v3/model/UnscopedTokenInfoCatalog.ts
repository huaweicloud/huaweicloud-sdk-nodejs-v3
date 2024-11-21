import { UnscopedTokenInfoCatalogEndpoints } from './UnscopedTokenInfoCatalogEndpoints';


export class UnscopedTokenInfoCatalog {
    public id?: string;
    public name?: string;
    public type?: string;
    public endpoints?: Array<UnscopedTokenInfoCatalogEndpoints>;
    public description?: object;
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
    public withEndpoints(endpoints: Array<UnscopedTokenInfoCatalogEndpoints>): UnscopedTokenInfoCatalog {
        this['endpoints'] = endpoints;
        return this;
    }
    public withDescription(description: object): UnscopedTokenInfoCatalog {
        this['description'] = description;
        return this;
    }
}