import { TokenCatalogEndpoint } from './TokenCatalogEndpoint';


export class TokenCatalog {
    public type: string;
    public id: string;
    public name: string;
    public endpoints: Array<TokenCatalogEndpoint>;
    public constructor(type: any, id: any, name: any, endpoints: any) { 
        this['type'] = type;
        this['id'] = id;
        this['name'] = name;
        this['endpoints'] = endpoints;
    }
    public withType(type: string): TokenCatalog {
        this['type'] = type;
        return this;
    }
    public withId(id: string): TokenCatalog {
        this['id'] = id;
        return this;
    }
    public withName(name: string): TokenCatalog {
        this['name'] = name;
        return this;
    }
    public withEndpoints(endpoints: Array<TokenCatalogEndpoint>): TokenCatalog {
        this['endpoints'] = endpoints;
        return this;
    }
}