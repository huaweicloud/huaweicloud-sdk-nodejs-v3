import { Dimension2 } from './Dimension2';


export class Resource {
    public namespace?: string;
    public dimensions?: Array<Dimension2>;
    public constructor(namespace?: string, dimensions?: Array<Dimension2>) { 
        this['namespace'] = namespace;
        this['dimensions'] = dimensions;
    }
    public withNamespace(namespace: string): Resource {
        this['namespace'] = namespace;
        return this;
    }
    public withDimensions(dimensions: Array<Dimension2>): Resource {
        this['dimensions'] = dimensions;
        return this;
    }
}