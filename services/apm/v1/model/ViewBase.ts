import { FieldItem } from './FieldItem';


export class ViewBase {
    private 'collector_name'?: string;
    private 'metric_set'?: string;
    public title?: string;
    private 'table_direction'?: ViewBaseTableDirectionEnum | string;
    private 'group_by'?: string;
    public filter?: string;
    private 'field_item_list'?: Array<FieldItem>;
    public span?: boolean;
    private 'span_field'?: string;
    private 'order_by'?: string;
    public latest?: boolean;
    private 'view_type'?: ViewBaseViewTypeEnum | string;
    public constructor() { 
    }
    public withCollectorName(collectorName: string): ViewBase {
        this['collector_name'] = collectorName;
        return this;
    }
    public set collectorName(collectorName: string  | undefined) {
        this['collector_name'] = collectorName;
    }
    public get collectorName(): string | undefined {
        return this['collector_name'];
    }
    public withMetricSet(metricSet: string): ViewBase {
        this['metric_set'] = metricSet;
        return this;
    }
    public set metricSet(metricSet: string  | undefined) {
        this['metric_set'] = metricSet;
    }
    public get metricSet(): string | undefined {
        return this['metric_set'];
    }
    public withTitle(title: string): ViewBase {
        this['title'] = title;
        return this;
    }
    public withTableDirection(tableDirection: ViewBaseTableDirectionEnum | string): ViewBase {
        this['table_direction'] = tableDirection;
        return this;
    }
    public set tableDirection(tableDirection: ViewBaseTableDirectionEnum | string  | undefined) {
        this['table_direction'] = tableDirection;
    }
    public get tableDirection(): ViewBaseTableDirectionEnum | string | undefined {
        return this['table_direction'];
    }
    public withGroupBy(groupBy: string): ViewBase {
        this['group_by'] = groupBy;
        return this;
    }
    public set groupBy(groupBy: string  | undefined) {
        this['group_by'] = groupBy;
    }
    public get groupBy(): string | undefined {
        return this['group_by'];
    }
    public withFilter(filter: string): ViewBase {
        this['filter'] = filter;
        return this;
    }
    public withFieldItemList(fieldItemList: Array<FieldItem>): ViewBase {
        this['field_item_list'] = fieldItemList;
        return this;
    }
    public set fieldItemList(fieldItemList: Array<FieldItem>  | undefined) {
        this['field_item_list'] = fieldItemList;
    }
    public get fieldItemList(): Array<FieldItem> | undefined {
        return this['field_item_list'];
    }
    public withSpan(span: boolean): ViewBase {
        this['span'] = span;
        return this;
    }
    public withSpanField(spanField: string): ViewBase {
        this['span_field'] = spanField;
        return this;
    }
    public set spanField(spanField: string  | undefined) {
        this['span_field'] = spanField;
    }
    public get spanField(): string | undefined {
        return this['span_field'];
    }
    public withOrderBy(orderBy: string): ViewBase {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): string | undefined {
        return this['order_by'];
    }
    public withLatest(latest: boolean): ViewBase {
        this['latest'] = latest;
        return this;
    }
    public withViewType(viewType: ViewBaseViewTypeEnum | string): ViewBase {
        this['view_type'] = viewType;
        return this;
    }
    public set viewType(viewType: ViewBaseViewTypeEnum | string  | undefined) {
        this['view_type'] = viewType;
    }
    public get viewType(): ViewBaseViewTypeEnum | string | undefined {
        return this['view_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ViewBaseTableDirectionEnum {
    H = 'H',
    V = 'V'
}
/**
    * @export
    * @enum {string}
    */
export enum ViewBaseViewTypeEnum {
    TREND = 'trend',
    SUMTABLE = 'sumtable',
    RAWTABLE = 'rawtable'
}
