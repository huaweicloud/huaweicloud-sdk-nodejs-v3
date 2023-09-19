import { EsflavorsVersionsFlavorsResp } from './EsflavorsVersionsFlavorsResp';


export class EsflavorsVersionsResp {
    public version?: string;
    public flavors?: Array<EsflavorsVersionsFlavorsResp>;
    public type?: string;
    public constructor() { 
    }
    public withVersion(version: string): EsflavorsVersionsResp {
        this['version'] = version;
        return this;
    }
    public withFlavors(flavors: Array<EsflavorsVersionsFlavorsResp>): EsflavorsVersionsResp {
        this['flavors'] = flavors;
        return this;
    }
    public withType(type: string): EsflavorsVersionsResp {
        this['type'] = type;
        return this;
    }
}