import { FieldItem } from './FieldItem';


export class RawTableView {
    private 'view_type'?: RawTableViewViewTypeEnum | string;
    private 'collector_name'?: string;
    private 'metric_set'?: string;
    public title?: string;
    private 'table_direction'?: RawTableViewTableDirectionEnum | string;
    private 'group_by'?: string;
    public filter?: string;
    private 'field_item_list'?: Array<FieldItem>;
    public span?: boolean;
    private 'span_field'?: string;
    private 'order_by'?: string;
    public latest?: boolean;
    public constructor(collectorName?: string, metricSet?: string, title?: string, tableDirection?: string, groupBy?: string, filter?: string, fieldItemList?: Array<FieldItem>, span?: boolean, spanField?: string) { 
        this['collector_name'] = collectorName;
        this['metric_set'] = metricSet;
        this['title'] = title;
        this['table_direction'] = tableDirection;
        this['group_by'] = groupBy;
        this['filter'] = filter;
        this['field_item_list'] = fieldItemList;
        this['span'] = span;
        this['span_field'] = spanField;
    }
    public withViewType(viewType: RawTableViewViewTypeEnum | string): RawTableView {
        this['view_type'] = viewType;
        return this;
    }
    public set viewType(viewType: RawTableViewViewTypeEnum | string  | undefined) {
        this['view_type'] = viewType;
    }
    public get viewType(): RawTableViewViewTypeEnum | string | undefined {
        return this['view_type'];
    }
    public withCollectorName(collectorName: string): RawTableView {
        this['collector_name'] = collectorName;
        return this;
    }
    public set collectorName(collectorName: string  | undefined) {
        this['collector_name'] = collectorName;
    }
    public get collectorName(): string | undefined {
        return this['collector_name'];
    }
    public withMetricSet(metricSet: string): RawTableView {
        this['metric_set'] = metricSet;
        return this;
    }
    public set metricSet(metricSet: string  | undefined) {
        this['metric_set'] = metricSet;
    }
    public get metricSet(): string | undefined {
        return this['metric_set'];
    }
    public withTitle(title: string): RawTableView {
        this['title'] = title;
        return this;
    }
    public withTableDirection(tableDirection: RawTableViewTableDirectionEnum | string): RawTableView {
        this['table_direction'] = tableDirection;
        return this;
    }
    public set tableDirection(tableDirection: RawTableViewTableDirectionEnum | string  | undefined) {
        this['table_direction'] = tableDirection;
    }
    public get tableDirection(): RawTableViewTableDirectionEnum | string | undefined {
        return this['table_direction'];
    }
    public withGroupBy(groupBy: string): RawTableView {
        this['group_by'] = groupBy;
        return this;
    }
    public set groupBy(groupBy: string  | undefined) {
        this['group_by'] = groupBy;
    }
    public get groupBy(): string | undefined {
        return this['group_by'];
    }
    public withFilter(filter: string): RawTableView {
        this['filter'] = filter;
        return this;
    }
    public withFieldItemList(fieldItemList: Array<FieldItem>): RawTableView {
        this['field_item_list'] = fieldItemList;
        return this;
    }
    public set fieldItemList(fieldItemList: Array<FieldItem>  | undefined) {
        this['field_item_list'] = fieldItemList;
    }
    public get fieldItemList(): Array<FieldItem> | undefined {
        return this['field_item_list'];
    }
    public withSpan(span: boolean): RawTableView {
        this['span'] = span;
        return this;
    }
    public withSpanField(spanField: string): RawTableView {
        this['span_field'] = spanField;
        return this;
    }
    public set spanField(spanField: string  | undefined) {
        this['span_field'] = spanField;
    }
    public get spanField(): string | undefined {
        return this['span_field'];
    }
    public withOrderBy(orderBy: string): RawTableView {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): string | undefined {
        return this['order_by'];
    }
    public withLatest(latest: boolean): RawTableView {
        this['latest'] = latest;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RawTableViewViewTypeEnum {
    TREND = 'trend',
    SUMTABLE = 'sumtable',
    RAWTABLE = 'rawtable'
}
/**
    * @export
    * @enum {string}
    */
export enum RawTableViewTableDirectionEnum {
    H = 'H',
    V = 'V'
}
