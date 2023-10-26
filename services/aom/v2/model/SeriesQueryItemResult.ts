import { DimensionSeries } from './DimensionSeries';


export class SeriesQueryItemResult {
    public namespace?: string;
    public dimensions?: Array<DimensionSeries>;
    private 'metric_name'?: string;
    public unit?: string;
    private 'dimension_value_hash'?: string;
    public constructor() { 
    }
    public withNamespace(namespace: string): SeriesQueryItemResult {
        this['namespace'] = namespace;
        return this;
    }
    public withDimensions(dimensions: Array<DimensionSeries>): SeriesQueryItemResult {
        this['dimensions'] = dimensions;
        return this;
    }
    public withMetricName(metricName: string): SeriesQueryItemResult {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withUnit(unit: string): SeriesQueryItemResult {
        this['unit'] = unit;
        return this;
    }
    public withDimensionValueHash(dimensionValueHash: string): SeriesQueryItemResult {
        this['dimension_value_hash'] = dimensionValueHash;
        return this;
    }
    public set dimensionValueHash(dimensionValueHash: string  | undefined) {
        this['dimension_value_hash'] = dimensionValueHash;
    }
    public get dimensionValueHash(): string | undefined {
        return this['dimension_value_hash'];
    }
}