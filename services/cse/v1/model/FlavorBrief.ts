import { EngineSpec } from './EngineSpec';


export class FlavorBrief {
    public flavor?: string;
    public description?: string;
    public spec?: EngineSpec;
    public constructor() { 
    }
    public withFlavor(flavor: string): FlavorBrief {
        this['flavor'] = flavor;
        return this;
    }
    public withDescription(description: string): FlavorBrief {
        this['description'] = description;
        return this;
    }
    public withSpec(spec: EngineSpec): FlavorBrief {
        this['spec'] = spec;
        return this;
    }
}