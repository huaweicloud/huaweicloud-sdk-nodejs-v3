import { CatalogEndpoints } from './CatalogEndpoints';


export class Catalog {
    public endpoints: Array<CatalogEndpoints>;
    public id: string;
    public name: string;
    public type: string;
    public constructor(endpoints: any, id: any, name: any, type: any) { 
        this['endpoints'] = endpoints;
        this['id'] = id;
        this['name'] = name;
        this['type'] = type;
    }
    public withEndpoints(endpoints: Array<CatalogEndpoints>): Catalog {
        this['endpoints'] = endpoints;
        return this;
    }
    public withId(id: string): Catalog {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Catalog {
        this['name'] = name;
        return this;
    }
    public withType(type: string): Catalog {
        this['type'] = type;
        return this;
    }
}