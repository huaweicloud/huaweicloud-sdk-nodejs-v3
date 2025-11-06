import { Flavor } from './Flavor';


export class FlavorRespVersionBody {
    public id?: string;
    public name?: string;
    public flavors?: Array<Flavor>;
    public constructor() { 
    }
    public withId(id: string): FlavorRespVersionBody {
        this['id'] = id;
        return this;
    }
    public withName(name: string): FlavorRespVersionBody {
        this['name'] = name;
        return this;
    }
    public withFlavors(flavors: Array<Flavor>): FlavorRespVersionBody {
        this['flavors'] = flavors;
        return this;
    }
}