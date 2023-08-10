import { MetricsDimension } from './MetricsDimension';


export class CreateResourceGroup {
    public namespace?: string;
    public dimensions?: Array<MetricsDimension>;
    public constructor(namespace?: string, dimensions?: Array<MetricsDimension>) { 
        this['namespace'] = namespace;
        this['dimensions'] = dimensions;
    }
    public withNamespace(namespace: string): CreateResourceGroup {
        this['namespace'] = namespace;
        return this;
    }
    public withDimensions(dimensions: Array<MetricsDimension>): CreateResourceGroup {
        this['dimensions'] = dimensions;
        return this;
    }
}