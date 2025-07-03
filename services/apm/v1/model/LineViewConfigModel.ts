import { LineViewItem } from './LineViewItem';


export class LineViewConfigModel {
    private 'metric_set'?: string;
    private 'filter_prefix'?: string;
    private 'line_view_item_list'?: Array<LineViewItem>;
    public constructor() { 
    }
    public withMetricSet(metricSet: string): LineViewConfigModel {
        this['metric_set'] = metricSet;
        return this;
    }
    public set metricSet(metricSet: string  | undefined) {
        this['metric_set'] = metricSet;
    }
    public get metricSet(): string | undefined {
        return this['metric_set'];
    }
    public withFilterPrefix(filterPrefix: string): LineViewConfigModel {
        this['filter_prefix'] = filterPrefix;
        return this;
    }
    public set filterPrefix(filterPrefix: string  | undefined) {
        this['filter_prefix'] = filterPrefix;
    }
    public get filterPrefix(): string | undefined {
        return this['filter_prefix'];
    }
    public withLineViewItemList(lineViewItemList: Array<LineViewItem>): LineViewConfigModel {
        this['line_view_item_list'] = lineViewItemList;
        return this;
    }
    public set lineViewItemList(lineViewItemList: Array<LineViewItem>  | undefined) {
        this['line_view_item_list'] = lineViewItemList;
    }
    public get lineViewItemList(): Array<LineViewItem> | undefined {
        return this['line_view_item_list'];
    }
}