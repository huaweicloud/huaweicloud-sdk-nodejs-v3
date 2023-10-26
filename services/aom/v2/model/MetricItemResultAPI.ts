import { Dimension } from './Dimension';


export class MetricItemResultAPI {
    public dimensions?: Array<Dimension>;
    public dimensionvaluehash?: string;
    public metricName?: string;
    public namespace?: string;
    public unit?: string;
    public constructor() { 
    }
    public withDimensions(dimensions: Array<Dimension>): MetricItemResultAPI {
        this['dimensions'] = dimensions;
        return this;
    }
    public withDimensionvaluehash(dimensionvaluehash: string): MetricItemResultAPI {
        this['dimensionvaluehash'] = dimensionvaluehash;
        return this;
    }
    public withMetricName(metricName: string): MetricItemResultAPI {
        this['metricName'] = metricName;
        return this;
    }
    public withNamespace(namespace: string): MetricItemResultAPI {
        this['namespace'] = namespace;
        return this;
    }
    public withUnit(unit: string): MetricItemResultAPI {
        this['unit'] = unit;
        return this;
    }
}