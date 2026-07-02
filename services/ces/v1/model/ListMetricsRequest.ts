

export class ListMetricsRequest {
    public namespace?: string;
    private 'metric_name'?: string;
    private 'dim.0'?: string;
    private 'dim.1'?: string;
    private 'dim.2'?: string;
    private 'dim.3'?: string;
    public start?: string;
    public limit?: number;
    public order?: ListMetricsRequestOrderEnum | string;
    public constructor() { 
    }
    public withNamespace(namespace: string): ListMetricsRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withMetricName(metricName: string): ListMetricsRequest {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withDim0(dim0: string): ListMetricsRequest {
        this['dim.0'] = dim0;
        return this;
    }
    public set dim0(dim0: string  | undefined) {
        this['dim.0'] = dim0;
    }
    public get dim0(): string | undefined {
        return this['dim.0'];
    }
    public withDim1(dim1: string): ListMetricsRequest {
        this['dim.1'] = dim1;
        return this;
    }
    public set dim1(dim1: string  | undefined) {
        this['dim.1'] = dim1;
    }
    public get dim1(): string | undefined {
        return this['dim.1'];
    }
    public withDim2(dim2: string): ListMetricsRequest {
        this['dim.2'] = dim2;
        return this;
    }
    public set dim2(dim2: string  | undefined) {
        this['dim.2'] = dim2;
    }
    public get dim2(): string | undefined {
        return this['dim.2'];
    }
    public withDim3(dim3: string): ListMetricsRequest {
        this['dim.3'] = dim3;
        return this;
    }
    public set dim3(dim3: string  | undefined) {
        this['dim.3'] = dim3;
    }
    public get dim3(): string | undefined {
        return this['dim.3'];
    }
    public withStart(start: string): ListMetricsRequest {
        this['start'] = start;
        return this;
    }
    public withLimit(limit: number): ListMetricsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOrder(order: ListMetricsRequestOrderEnum | string): ListMetricsRequest {
        this['order'] = order;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListMetricsRequestOrderEnum {
    ASC = 'asc',
    DESC = 'desc'
}
