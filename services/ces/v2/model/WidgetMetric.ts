import { DimensionInfo } from './DimensionInfo';
import { ExtraInfo } from './ExtraInfo';
import { RollupFilter } from './RollupFilter';


export class WidgetMetric {
    public namespace?: string;
    public dimensions?: DimensionInfo;
    private 'metric_name'?: string;
    public alias?: Array<string>;
    private 'extra_info'?: ExtraInfo;
    private 'rollup_enable'?: boolean;
    private 'rollup_filter'?: RollupFilter;
    private 'rollup_dimension'?: string;
    private 'last_week_compare_enable'?: boolean;
    private 'yesterday_compare_enable'?: boolean;
    private 'metric_dimension'?: string;
    private 'top_num'?: number;
    public unit?: string;
    public order?: WidgetMetricOrderEnum | string;
    private 'topn_metric_name'?: string;
    public constructor(namespace?: string, dimensions?: DimensionInfo, metricName?: string) { 
        this['namespace'] = namespace;
        this['dimensions'] = dimensions;
        this['metric_name'] = metricName;
    }
    public withNamespace(namespace: string): WidgetMetric {
        this['namespace'] = namespace;
        return this;
    }
    public withDimensions(dimensions: DimensionInfo): WidgetMetric {
        this['dimensions'] = dimensions;
        return this;
    }
    public withMetricName(metricName: string): WidgetMetric {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withAlias(alias: Array<string>): WidgetMetric {
        this['alias'] = alias;
        return this;
    }
    public withExtraInfo(extraInfo: ExtraInfo): WidgetMetric {
        this['extra_info'] = extraInfo;
        return this;
    }
    public set extraInfo(extraInfo: ExtraInfo  | undefined) {
        this['extra_info'] = extraInfo;
    }
    public get extraInfo(): ExtraInfo | undefined {
        return this['extra_info'];
    }
    public withRollupEnable(rollupEnable: boolean): WidgetMetric {
        this['rollup_enable'] = rollupEnable;
        return this;
    }
    public set rollupEnable(rollupEnable: boolean  | undefined) {
        this['rollup_enable'] = rollupEnable;
    }
    public get rollupEnable(): boolean | undefined {
        return this['rollup_enable'];
    }
    public withRollupFilter(rollupFilter: RollupFilter): WidgetMetric {
        this['rollup_filter'] = rollupFilter;
        return this;
    }
    public set rollupFilter(rollupFilter: RollupFilter  | undefined) {
        this['rollup_filter'] = rollupFilter;
    }
    public get rollupFilter(): RollupFilter | undefined {
        return this['rollup_filter'];
    }
    public withRollupDimension(rollupDimension: string): WidgetMetric {
        this['rollup_dimension'] = rollupDimension;
        return this;
    }
    public set rollupDimension(rollupDimension: string  | undefined) {
        this['rollup_dimension'] = rollupDimension;
    }
    public get rollupDimension(): string | undefined {
        return this['rollup_dimension'];
    }
    public withLastWeekCompareEnable(lastWeekCompareEnable: boolean): WidgetMetric {
        this['last_week_compare_enable'] = lastWeekCompareEnable;
        return this;
    }
    public set lastWeekCompareEnable(lastWeekCompareEnable: boolean  | undefined) {
        this['last_week_compare_enable'] = lastWeekCompareEnable;
    }
    public get lastWeekCompareEnable(): boolean | undefined {
        return this['last_week_compare_enable'];
    }
    public withYesterdayCompareEnable(yesterdayCompareEnable: boolean): WidgetMetric {
        this['yesterday_compare_enable'] = yesterdayCompareEnable;
        return this;
    }
    public set yesterdayCompareEnable(yesterdayCompareEnable: boolean  | undefined) {
        this['yesterday_compare_enable'] = yesterdayCompareEnable;
    }
    public get yesterdayCompareEnable(): boolean | undefined {
        return this['yesterday_compare_enable'];
    }
    public withMetricDimension(metricDimension: string): WidgetMetric {
        this['metric_dimension'] = metricDimension;
        return this;
    }
    public set metricDimension(metricDimension: string  | undefined) {
        this['metric_dimension'] = metricDimension;
    }
    public get metricDimension(): string | undefined {
        return this['metric_dimension'];
    }
    public withTopNum(topNum: number): WidgetMetric {
        this['top_num'] = topNum;
        return this;
    }
    public set topNum(topNum: number  | undefined) {
        this['top_num'] = topNum;
    }
    public get topNum(): number | undefined {
        return this['top_num'];
    }
    public withUnit(unit: string): WidgetMetric {
        this['unit'] = unit;
        return this;
    }
    public withOrder(order: WidgetMetricOrderEnum | string): WidgetMetric {
        this['order'] = order;
        return this;
    }
    public withTopnMetricName(topnMetricName: string): WidgetMetric {
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
export enum WidgetMetricOrderEnum {
    ASC = 'asc',
    DESC = 'desc'
}
