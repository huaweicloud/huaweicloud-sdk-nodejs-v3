import { MetricsDimension } from './MetricsDimension';


export class ResourceGroup {
    public namespace?: string;
    public dimensions?: Array<MetricsDimension>;
    public status?: string;
    public constructor() { 
    }
    public withNamespace(namespace: string): ResourceGroup {
        this['namespace'] = namespace;
        return this;
    }
    public withDimensions(dimensions: Array<MetricsDimension>): ResourceGroup {
        this['dimensions'] = dimensions;
        return this;
    }
    public withStatus(status: string): ResourceGroup {
        this['status'] = status;
        return this;
    }
}