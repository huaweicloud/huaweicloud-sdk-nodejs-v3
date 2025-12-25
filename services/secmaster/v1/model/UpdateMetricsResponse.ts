import { LayoutMetricFormat } from './LayoutMetricFormat';
import { MetricDimensionExpandParam } from './MetricDimensionExpandParam';
import { MetricMetaDataDerivedMetrics } from './MetricMetaDataDerivedMetrics';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateMetricsResponse extends SdkResponse {
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
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withName(name: string): UpdateMetricsResponse {
        this['name'] = name;
        return this;
    }
    public withId(id: string): UpdateMetricsResponse {
        this['id'] = id;
        return this;
    }
    public withMetricType(metricType: string): UpdateMetricsResponse {
        this['metric_type'] = metricType;
        return this;
    }
    public set metricType(metricType: string  | undefined) {
        this['metric_type'] = metricType;
    }
    public get metricType(): string | undefined {
        return this['metric_type'];
    }
    public withDataType(dataType: string): UpdateMetricsResponse {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: string  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): string | undefined {
        return this['data_type'];
    }
    public withMetricDimension(metricDimension: number): UpdateMetricsResponse {
        this['metric_dimension'] = metricDimension;
        return this;
    }
    public set metricDimension(metricDimension: number  | undefined) {
        this['metric_dimension'] = metricDimension;
    }
    public get metricDimension(): number | undefined {
        return this['metric_dimension'];
    }
    public withCacheTtl(cacheTtl: number): UpdateMetricsResponse {
        this['cache_ttl'] = cacheTtl;
        return this;
    }
    public set cacheTtl(cacheTtl: number  | undefined) {
        this['cache_ttl'] = cacheTtl;
    }
    public get cacheTtl(): number | undefined {
        return this['cache_ttl'];
    }
    public withReportPeriod(reportPeriod: number): UpdateMetricsResponse {
        this['report_period'] = reportPeriod;
        return this;
    }
    public set reportPeriod(reportPeriod: number  | undefined) {
        this['report_period'] = reportPeriod;
    }
    public get reportPeriod(): number | undefined {
        return this['report_period'];
    }
    public withIsBuiltIn(isBuiltIn: boolean): UpdateMetricsResponse {
        this['is_built_in'] = isBuiltIn;
        return this;
    }
    public set isBuiltIn(isBuiltIn: boolean  | undefined) {
        this['is_built_in'] = isBuiltIn;
    }
    public get isBuiltIn(): boolean | undefined {
        return this['is_built_in'];
    }
    public withEffectiveColumn(effectiveColumn: string): UpdateMetricsResponse {
        this['effective_column'] = effectiveColumn;
        return this;
    }
    public set effectiveColumn(effectiveColumn: string  | undefined) {
        this['effective_column'] = effectiveColumn;
    }
    public get effectiveColumn(): string | undefined {
        return this['effective_column'];
    }
    public withMaxQueryRange(maxQueryRange: number): UpdateMetricsResponse {
        this['max_query_range'] = maxQueryRange;
        return this;
    }
    public set maxQueryRange(maxQueryRange: number  | undefined) {
        this['max_query_range'] = maxQueryRange;
    }
    public get maxQueryRange(): number | undefined {
        return this['max_query_range'];
    }
    public withDerivedMetrics(derivedMetrics: Array<MetricMetaDataDerivedMetrics>): UpdateMetricsResponse {
        this['derived_metrics'] = derivedMetrics;
        return this;
    }
    public set derivedMetrics(derivedMetrics: Array<MetricMetaDataDerivedMetrics>  | undefined) {
        this['derived_metrics'] = derivedMetrics;
    }
    public get derivedMetrics(): Array<MetricMetaDataDerivedMetrics> | undefined {
        return this['derived_metrics'];
    }
    public withCompoundExpression(compoundExpression: string): UpdateMetricsResponse {
        this['compound_expression'] = compoundExpression;
        return this;
    }
    public set compoundExpression(compoundExpression: string  | undefined) {
        this['compound_expression'] = compoundExpression;
    }
    public get compoundExpression(): string | undefined {
        return this['compound_expression'];
    }
    public withMetricFormat(metricFormat: Array<LayoutMetricFormat>): UpdateMetricsResponse {
        this['metric_format'] = metricFormat;
        return this;
    }
    public set metricFormat(metricFormat: Array<LayoutMetricFormat>  | undefined) {
        this['metric_format'] = metricFormat;
    }
    public get metricFormat(): Array<LayoutMetricFormat> | undefined {
        return this['metric_format'];
    }
    public withMetricExpandDim(metricExpandDim: MetricDimensionExpandParam): UpdateMetricsResponse {
        this['metric_expand_dim'] = metricExpandDim;
        return this;
    }
    public set metricExpandDim(metricExpandDim: MetricDimensionExpandParam  | undefined) {
        this['metric_expand_dim'] = metricExpandDim;
    }
    public get metricExpandDim(): MetricDimensionExpandParam | undefined {
        return this['metric_expand_dim'];
    }
    public withVersion(version: string): UpdateMetricsResponse {
        this['version'] = version;
        return this;
    }
    public withXRequestId(xRequestId: string): UpdateMetricsResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}