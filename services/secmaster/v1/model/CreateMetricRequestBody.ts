import { LayoutMetricFormat } from './LayoutMetricFormat';
import { MetricDimensionExpandParam } from './MetricDimensionExpandParam';
import { MetricMetaData } from './MetricMetaData';
import { MetricMetaDataDerivedMetrics } from './MetricMetaDataDerivedMetrics';


export class CreateMetricRequestBody {
    public name?: string;
    public id?: string;
    private 'metric_type'?: string;
    private 'data_type'?: string;
    private 'metric_dimension'?: number;
    private 'cache_ttl'?: number;
    private 'report_period'?: number;
    private 'is_built_in'?: boolean;
    private 'effective_column'?: string;
    private 'max_query_range'?: number;
    private 'derived_metrics'?: Array<MetricMetaDataDerivedMetrics>;
    private 'compound_expression'?: string;
    private 'metric_format'?: Array<LayoutMetricFormat>;
    private 'metric_expand_dim'?: MetricDimensionExpandParam;
    public version?: string;
    public constructor(name?: string, metricType?: string, dataType?: string, cacheTtl?: number) { 
        this['name'] = name;
        this['metric_type'] = metricType;
        this['data_type'] = dataType;
        this['cache_ttl'] = cacheTtl;
    }
    public withName(name: string): CreateMetricRequestBody {
        this['name'] = name;
        return this;
    }
    public withId(id: string): CreateMetricRequestBody {
        this['id'] = id;
        return this;
    }
    public withMetricType(metricType: string): CreateMetricRequestBody {
        this['metric_type'] = metricType;
        return this;
    }
    public set metricType(metricType: string  | undefined) {
        this['metric_type'] = metricType;
    }
    public get metricType(): string | undefined {
        return this['metric_type'];
    }
    public withDataType(dataType: string): CreateMetricRequestBody {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: string  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): string | undefined {
        return this['data_type'];
    }
    public withMetricDimension(metricDimension: number): CreateMetricRequestBody {
        this['metric_dimension'] = metricDimension;
        return this;
    }
    public set metricDimension(metricDimension: number  | undefined) {
        this['metric_dimension'] = metricDimension;
    }
    public get metricDimension(): number | undefined {
        return this['metric_dimension'];
    }
    public withCacheTtl(cacheTtl: number): CreateMetricRequestBody {
        this['cache_ttl'] = cacheTtl;
        return this;
    }
    public set cacheTtl(cacheTtl: number  | undefined) {
        this['cache_ttl'] = cacheTtl;
    }
    public get cacheTtl(): number | undefined {
        return this['cache_ttl'];
    }
    public withReportPeriod(reportPeriod: number): CreateMetricRequestBody {
        this['report_period'] = reportPeriod;
        return this;
    }
    public set reportPeriod(reportPeriod: number  | undefined) {
        this['report_period'] = reportPeriod;
    }
    public get reportPeriod(): number | undefined {
        return this['report_period'];
    }
    public withIsBuiltIn(isBuiltIn: boolean): CreateMetricRequestBody {
        this['is_built_in'] = isBuiltIn;
        return this;
    }
    public set isBuiltIn(isBuiltIn: boolean  | undefined) {
        this['is_built_in'] = isBuiltIn;
    }
    public get isBuiltIn(): boolean | undefined {
        return this['is_built_in'];
    }
    public withEffectiveColumn(effectiveColumn: string): CreateMetricRequestBody {
        this['effective_column'] = effectiveColumn;
        return this;
    }
    public set effectiveColumn(effectiveColumn: string  | undefined) {
        this['effective_column'] = effectiveColumn;
    }
    public get effectiveColumn(): string | undefined {
        return this['effective_column'];
    }
    public withMaxQueryRange(maxQueryRange: number): CreateMetricRequestBody {
        this['max_query_range'] = maxQueryRange;
        return this;
    }
    public set maxQueryRange(maxQueryRange: number  | undefined) {
        this['max_query_range'] = maxQueryRange;
    }
    public get maxQueryRange(): number | undefined {
        return this['max_query_range'];
    }
    public withDerivedMetrics(derivedMetrics: Array<MetricMetaDataDerivedMetrics>): CreateMetricRequestBody {
        this['derived_metrics'] = derivedMetrics;
        return this;
    }
    public set derivedMetrics(derivedMetrics: Array<MetricMetaDataDerivedMetrics>  | undefined) {
        this['derived_metrics'] = derivedMetrics;
    }
    public get derivedMetrics(): Array<MetricMetaDataDerivedMetrics> | undefined {
        return this['derived_metrics'];
    }
    public withCompoundExpression(compoundExpression: string): CreateMetricRequestBody {
        this['compound_expression'] = compoundExpression;
        return this;
    }
    public set compoundExpression(compoundExpression: string  | undefined) {
        this['compound_expression'] = compoundExpression;
    }
    public get compoundExpression(): string | undefined {
        return this['compound_expression'];
    }
    public withMetricFormat(metricFormat: Array<LayoutMetricFormat>): CreateMetricRequestBody {
        this['metric_format'] = metricFormat;
        return this;
    }
    public set metricFormat(metricFormat: Array<LayoutMetricFormat>  | undefined) {
        this['metric_format'] = metricFormat;
    }
    public get metricFormat(): Array<LayoutMetricFormat> | undefined {
        return this['metric_format'];
    }
    public withMetricExpandDim(metricExpandDim: MetricDimensionExpandParam): CreateMetricRequestBody {
        this['metric_expand_dim'] = metricExpandDim;
        return this;
    }
    public set metricExpandDim(metricExpandDim: MetricDimensionExpandParam  | undefined) {
        this['metric_expand_dim'] = metricExpandDim;
    }
    public get metricExpandDim(): MetricDimensionExpandParam | undefined {
        return this['metric_expand_dim'];
    }
    public withVersion(version: string): CreateMetricRequestBody {
        this['version'] = version;
        return this;
    }
}