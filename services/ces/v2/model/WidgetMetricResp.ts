import { DimensionInfoResp } from './DimensionInfoResp';
import { ExtraInfoResp } from './ExtraInfoResp';
import { RollupFilterResp } from './RollupFilterResp';


export class WidgetMetricResp {
    public namespace?: string;
    public dimensions?: DimensionInfoResp;
    private 'metric_name'?: string;
    public alias?: Array<string>;
    private 'extra_info'?: ExtraInfoResp;
    private 'rollup_enable'?: boolean;
    private 'rollup_filter'?: RollupFilterResp;
    private 'rollup_dimension'?: string;
    private 'last_week_compare_enable'?: boolean;
    private 'yesterday_compare_enable'?: boolean;
    private 'metric_dimension'?: string;
    private 'top_num'?: number;
    public unit?: string;
    public order?: WidgetMetricRespOrderEnum | string;
    private 'topn_metric_name'?: string;
    public constructor() { 
    }
    public withNamespace(namespace: string): WidgetMetricResp {
        this['namespace'] = namespace;
        return this;
    }
    public withDimensions(dimensions: DimensionInfoResp): WidgetMetricResp {
        this['dimensions'] = dimensions;
        return this;
    }
    public withMetricName(metricName: string): WidgetMetricResp {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withAlias(alias: Array<string>): WidgetMetricResp {
        this['alias'] = alias;
        return this;
    }
    public withExtraInfo(extraInfo: ExtraInfoResp): WidgetMetricResp {
        this['extra_info'] = extraInfo;
        return this;
    }
    public set extraInfo(extraInfo: ExtraInfoResp  | undefined) {
        this['extra_info'] = extraInfo;
    }
    public get extraInfo(): ExtraInfoResp | undefined {
        return this['extra_info'];
    }
    public withRollupEnable(rollupEnable: boolean): WidgetMetricResp {
        this['rollup_enable'] = rollupEnable;
        return this;
    }
    public set rollupEnable(rollupEnable: boolean  | undefined) {
        this['rollup_enable'] = rollupEnable;
    }
    public get rollupEnable(): boolean | undefined {
        return this['rollup_enable'];
    }
    public withRollupFilter(rollupFilter: RollupFilterResp): WidgetMetricResp {
        this['rollup_filter'] = rollupFilter;
        return this;
    }
    public set rollupFilter(rollupFilter: RollupFilterResp  | undefined) {
        this['rollup_filter'] = rollupFilter;
    }
    public get rollupFilter(): RollupFilterResp | undefined {
        return this['rollup_filter'];
    }
    public withRollupDimension(rollupDimension: string): WidgetMetricResp {
        this['rollup_dimension'] = rollupDimension;
        return this;
    }
    public set rollupDimension(rollupDimension: string  | undefined) {
        this['rollup_dimension'] = rollupDimension;
    }
    public get rollupDimension(): string | undefined {
        return this['rollup_dimension'];
    }
    public withLastWeekCompareEnable(lastWeekCompareEnable: boolean): WidgetMetricResp {
        this['last_week_compare_enable'] = lastWeekCompareEnable;
        return this;
    }
    public set lastWeekCompareEnable(lastWeekCompareEnable: boolean  | undefined) {
        this['last_week_compare_enable'] = lastWeekCompareEnable;
    }
    public get lastWeekCompareEnable(): boolean | undefined {
        return this['last_week_compare_enable'];
    }
    public withYesterdayCompareEnable(yesterdayCompareEnable: boolean): WidgetMetricResp {
        this['yesterday_compare_enable'] = yesterdayCompareEnable;
        return this;
    }
    public set yesterdayCompareEnable(yesterdayCompareEnable: boolean  | undefined) {
        this['yesterday_compare_enable'] = yesterdayCompareEnable;
    }
    public get yesterdayCompareEnable(): boolean | undefined {
        return this['yesterday_compare_enable'];
    }
    public withMetricDimension(metricDimension: string): WidgetMetricResp {
        this['metric_dimension'] = metricDimension;
        return this;
    }
    public set metricDimension(metricDimension: string  | undefined) {
        this['metric_dimension'] = metricDimension;
    }
    public get metricDimension(): string | undefined {
        return this['metric_dimension'];
    }
    public withTopNum(topNum: number): WidgetMetricResp {
        this['top_num'] = topNum;
        return this;
    }
    public set topNum(topNum: number  | undefined) {
        this['top_num'] = topNum;
    }
    public get topNum(): number | undefined {
        return this['top_num'];
    }
    public withUnit(unit: string): WidgetMetricResp {
        this['unit'] = unit;
        return this;
    }
    public withOrder(order: WidgetMetricRespOrderEnum | string): WidgetMetricResp {
        this['order'] = order;
        return this;
    }
    public withTopnMetricName(topnMetricName: string): WidgetMetricResp {
        this['topn_metric_name'] = topnMetricName;
        return this;
    }
    public set topnMetricName(topnMetricName: string  | undefined) {
        this['topn_metric_name'] = topnMetricName;
    }
    public get topnMetricName(): string | undefined {
        return this['topn_metric_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum WidgetMetricRespOrderEnum {
    ASC = 'asc',
    DESC = 'desc'
}
