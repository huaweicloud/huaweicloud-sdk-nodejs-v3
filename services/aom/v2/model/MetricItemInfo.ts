import { Dimension2 } from './Dimension2';


export class MetricItemInfo {
    public dimensions?: Array<Dimension2>;
    public namespace?: string;
    public constructor(dimensions?: Array<Dimension2>, namespace?: string) { 
        this['dimensions'] = dimensions;
        this['namespace'] = namespace;
    }
    public withDimensions(dimensions: Array<Dimension2>): MetricItemInfo {
        this['dimensions'] = dimensions;
        return this;
    }
    public withNamespace(namespace: string): MetricItemInfo {
        this['namespace'] = namespace;
        return this;
    }
}