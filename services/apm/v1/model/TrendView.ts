import { FieldItem } from './FieldItem';


export class TrendView {
    private 'view_type'?: TrendViewViewTypeEnum | string;
    private 'collector_name'?: string;
    private 'metric_set'?: string;
    public title?: string;
    private 'table_direction'?: TrendViewTableDirectionEnum | string;
    private 'group_by'?: string;
    public filter?: string;
    private 'field_item_list'?: Array<FieldItem>;
    public span?: boolean;
    private 'span_field'?: string;
    private 'order_by'?: string;
    public latest?: string;
    public constructor(collectorName?: string, metricSet?: string, fieldItemList?: Array<FieldItem>) { 
        this['collector_name'] = collectorName;
        this['metric_set'] = metricSet;
        this['field_item_list'] = fieldItemList;
    }
    public withViewType(viewType: TrendViewViewTypeEnum | string): TrendView {
        this['view_type'] = viewType;
        return this;
    }
    public set viewType(viewType: TrendViewViewTypeEnum | string  | undefined) {
        this['view_type'] = viewType;
    }
    public get viewType(): TrendViewViewTypeEnum | string | undefined {
        return this['view_type'];
    }
    public withCollectorName(collectorName: string): TrendView {
        this['collector_name'] = collectorName;
        return this;
    }
    public set collectorName(collectorName: string  | undefined) {
        this['collector_name'] = collectorName;
    }
    public get collectorName(): string | undefined {
        return this['collector_name'];
    }
    public withMetricSet(metricSet: string): TrendView {
        this['metric_set'] = metricSet;
        return this;
    }
    public set metricSet(metricSet: string  | undefined) {
        this['metric_set'] = metricSet;
    }
    public get metricSet(): string | undefined {
        return this['metric_set'];
    }
    public withTitle(title: string): TrendView {
        this['title'] = title;
        return this;
    }
    public withTableDirection(tableDirection: TrendViewTableDirectionEnum | string): TrendView {
        this['table_direction'] = tableDirection;
        return this;
    }
    public set tableDirection(tableDirection: TrendViewTableDirectionEnum | string  | undefined) {
        this['table_direction'] = tableDirection;
    }
    public get tableDirection(): TrendViewTableDirectionEnum | string | undefined {
        return this['table_direction'];
    }
    public withGroupBy(groupBy: string): TrendView {
        this['group_by'] = groupBy;
        return this;
    }
    public set groupBy(groupBy: string  | undefined) {
        this['group_by'] = groupBy;
    }
    public get groupBy(): string | undefined {
        return this['group_by'];
    }
    public withFilter(filter: string): TrendView {
        this['filter'] = filter;
        return this;
    }
    public withFieldItemList(fieldItemList: Array<FieldItem>): TrendView {
        this['field_item_list'] = fieldItemList;
        return this;
    }
    public set fieldItemList(fieldItemList: Array<FieldItem>  | undefined) {
        this['field_item_list'] = fieldItemList;
    }
    public get fieldItemList(): Array<FieldItem> | undefined {
        return this['field_item_list'];
    }
    public withSpan(span: boolean): TrendView {
        this['span'] = span;
        return this;
    }
    public withSpanField(spanField: string): TrendView {
        this['span_field'] = spanField;
        return this;
    }
    public set spanField(spanField: string  | undefined) {
        this['span_field'] = spanField;
    }
    public get spanField(): string | undefined {
        return this['span_field'];
    }
    public withOrderBy(orderBy: string): TrendView {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): string | undefined {
        return this['order_by'];
    }
    public withLatest(latest: string): TrendView {
        this['latest'] = latest;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TrendViewViewTypeEnum {
    TREND = 'trend',
    SUMTABLE = 'sumtable',
    RAWTABLE = 'rawtable'
}
/**
    * @export
    * @enum {string}
    */
export enum TrendViewTableDirectionEnum {
    H = 'H',
    V = 'V'
}
