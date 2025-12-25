

export class MetricMetaDataDerivedMetrics {
    private 'metric_dimension'?: number;
    private 'max_query_range'?: number;
    private 'date_start'?: string;
    private 'date_end'?: string;
    private 'date_format'?: string;
    private 'query_type'?: MetricMetaDataDerivedMetricsQueryTypeEnum | string;
    private 'query_function'?: string;
    public constructor(metricDimension?: number, queryType?: string, queryFunction?: string) { 
        this['metric_dimension'] = metricDimension;
        this['query_type'] = queryType;
        this['query_function'] = queryFunction;
    }
    public withMetricDimension(metricDimension: number): MetricMetaDataDerivedMetrics {
        this['metric_dimension'] = metricDimension;
        return this;
    }
    public set metricDimension(metricDimension: number  | undefined) {
        this['metric_dimension'] = metricDimension;
    }
    public get metricDimension(): number | undefined {
        return this['metric_dimension'];
    }
    public withMaxQueryRange(maxQueryRange: number): MetricMetaDataDerivedMetrics {
        this['max_query_range'] = maxQueryRange;
        return this;
    }
    public set maxQueryRange(maxQueryRange: number  | undefined) {
        this['max_query_range'] = maxQueryRange;
    }
    public get maxQueryRange(): number | undefined {
        return this['max_query_range'];
    }
    public withDateStart(dateStart: string): MetricMetaDataDerivedMetrics {
        this['date_start'] = dateStart;
        return this;
    }
    public set dateStart(dateStart: string  | undefined) {
        this['date_start'] = dateStart;
    }
    public get dateStart(): string | undefined {
        return this['date_start'];
    }
    public withDateEnd(dateEnd: string): MetricMetaDataDerivedMetrics {
        this['date_end'] = dateEnd;
        return this;
    }
    public set dateEnd(dateEnd: string  | undefined) {
        this['date_end'] = dateEnd;
    }
    public get dateEnd(): string | undefined {
        return this['date_end'];
    }
    public withDateFormat(dateFormat: string): MetricMetaDataDerivedMetrics {
        this['date_format'] = dateFormat;
        return this;
    }
    public set dateFormat(dateFormat: string  | undefined) {
        this['date_format'] = dateFormat;
    }
    public get dateFormat(): string | undefined {
        return this['date_format'];
    }
    public withQueryType(queryType: MetricMetaDataDerivedMetricsQueryTypeEnum | string): MetricMetaDataDerivedMetrics {
        this['query_type'] = queryType;
        return this;
    }
    public set queryType(queryType: MetricMetaDataDerivedMetricsQueryTypeEnum | string  | undefined) {
        this['query_type'] = queryType;
    }
    public get queryType(): MetricMetaDataDerivedMetricsQueryTypeEnum | string | undefined {
        return this['query_type'];
    }
    public withQueryFunction(queryFunction: string): MetricMetaDataDerivedMetrics {
        this['query_function'] = queryFunction;
        return this;
    }
    public set queryFunction(queryFunction: string  | undefined) {
        this['query_function'] = queryFunction;
    }
    public get queryFunction(): string | undefined {
        return this['query_function'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MetricMetaDataDerivedMetricsQueryTypeEnum {
    CBSL = 'cbsl',
    API = ' api',
    DSL = ' dsl',
    SQL = ' sql'
}
