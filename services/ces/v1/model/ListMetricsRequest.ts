

export class ListMetricsRequest {
    private 'dim.0'?: string;
    private 'dim.1'?: string;
    private 'dim.2'?: string;
    public limit?: number;
    private 'metric_name'?: string;
    public namespace?: string;
    public order?: ListMetricsRequestOrderEnum | string;
    public start?: string;
    public constructor() { 
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
    public withLimit(limit: number): ListMetricsRequest {
        this['limit'] = limit;
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
    public withNamespace(namespace: string): ListMetricsRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withOrder(order: ListMetricsRequestOrderEnum | string): ListMetricsRequest {
        this['order'] = order;
        return this;
    }
    public withStart(start: string): ListMetricsRequest {
        this['start'] = start;
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
