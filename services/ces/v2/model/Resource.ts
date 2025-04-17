import { ResourceDimension } from './ResourceDimension';


export class Resource {
    public namespace?: string;
    public dimensions?: Array<ResourceDimension>;
    public constructor(namespace?: string, dimensions?: Array<ResourceDimension>) { 
        this['namespace'] = namespace;
        this['dimensions'] = dimensions;
    }
    public withNamespace(namespace: string): Resource {
        this['namespace'] = namespace;
        return this;
    }
    public withDimensions(dimensions: Array<ResourceDimension>): Resource {
        this['dimensions'] = dimensions;
        return this;
    }
}