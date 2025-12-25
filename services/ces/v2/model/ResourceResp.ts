import { ResourceDimensionResp } from './ResourceDimensionResp';


export class ResourceResp {
    public namespace?: string;
    public dimensions?: Array<ResourceDimensionResp>;
    public constructor(namespace?: string, dimensions?: Array<ResourceDimensionResp>) { 
        this['namespace'] = namespace;
        this['dimensions'] = dimensions;
    }
    public withNamespace(namespace: string): ResourceResp {
        this['namespace'] = namespace;
        return this;
    }
    public withDimensions(dimensions: Array<ResourceDimensionResp>): ResourceResp {
        this['dimensions'] = dimensions;
        return this;
    }
}