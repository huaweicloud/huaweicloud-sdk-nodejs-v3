

export class ShowMetricDataRequest {
    public namespace?: string;
    private 'metric_name'?: string;
    private 'dim.0'?: string;
    private 'dim.1'?: string;
    private 'dim.2'?: string;
    private 'dim.3'?: string;
    public filter?: ShowMetricDataRequestFilterEnum | string;
    public period?: number;
    public from?: number;
    public to?: number;
    public constructor(namespace?: string, metricName?: string, dim0?: string, filter?: string, period?: number, from?: number, to?: number) { 
        this['namespace'] = namespace;
        this['metric_name'] = metricName;
        this['dim.0'] = dim0;
        this['filter'] = filter;
        this['period'] = period;
        this['from'] = from;
        this['to'] = to;
    }
    public withNamespace(namespace: string): ShowMetricDataRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withMetricName(metricName: string): ShowMetricDataRequest {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withDim0(dim0: string): ShowMetricDataRequest {
        this['dim.0'] = dim0;
        return this;
    }
    public set dim0(dim0: string  | undefined) {
        this['dim.0'] = dim0;
    }
    public get dim0(): string | undefined {
        return this['dim.0'];
    }
    public withDim1(dim1: string): ShowMetricDataRequest {
        this['dim.1'] = dim1;
        return this;
    }
    public set dim1(dim1: string  | undefined) {
        this['dim.1'] = dim1;
    }
    public get dim1(): string | undefined {
        return this['dim.1'];
    }
    public withDim2(dim2: string): ShowMetricDataRequest {
        this['dim.2'] = dim2;
        return this;
    }
    public set dim2(dim2: string  | undefined) {
        this['dim.2'] = dim2;
    }
    public get dim2(): string | undefined {
        return this['dim.2'];
    }
    public withDim3(dim3: string): ShowMetricDataRequest {
        this['dim.3'] = dim3;
        return this;
    }
    public set dim3(dim3: string  | undefined) {
        this['dim.3'] = dim3;
    }
    public get dim3(): string | undefined {
        return this['dim.3'];
    }
    public withFilter(filter: ShowMetricDataRequestFilterEnum | string): ShowMetricDataRequest {
        this['filter'] = filter;
        return this;
    }
    public withPeriod(period: number): ShowMetricDataRequest {
        this['period'] = period;
        return this;
    }
    public withFrom(from: number): ShowMetricDataRequest {
        this['from'] = from;
        return this;
    }
    public withTo(to: number): ShowMetricDataRequest {
        this['to'] = to;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowMetricDataRequestFilterEnum {
    MAX = 'max',
    MIN = 'min',
    AVERAGE = 'average',
    SUM = 'sum',
    VARIANCE = 'variance'
}
