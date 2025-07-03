import { DetailViewItem } from './DetailViewItem';


export class DetailViewConfigModel {
    private 'metric_set'?: string;
    private 'filter_prefix'?: string;
    private 'detail_view_item_list'?: Array<DetailViewItem>;
    public constructor() { 
    }
    public withMetricSet(metricSet: string): DetailViewConfigModel {
        this['metric_set'] = metricSet;
        return this;
    }
    public set metricSet(metricSet: string  | undefined) {
        this['metric_set'] = metricSet;
    }
    public get metricSet(): string | undefined {
        return this['metric_set'];
    }
    public withFilterPrefix(filterPrefix: string): DetailViewConfigModel {
        this['filter_prefix'] = filterPrefix;
        return this;
    }
    public set filterPrefix(filterPrefix: string  | undefined) {
        this['filter_prefix'] = filterPrefix;
    }
    public get filterPrefix(): string | undefined {
        return this['filter_prefix'];
    }
    public withDetailViewItemList(detailViewItemList: Array<DetailViewItem>): DetailViewConfigModel {
        this['detail_view_item_list'] = detailViewItemList;
        return this;
    }
    public set detailViewItemList(detailViewItemList: Array<DetailViewItem>  | undefined) {
        this['detail_view_item_list'] = detailViewItemList;
    }
    public get detailViewItemList(): Array<DetailViewItem> | undefined {
        return this['detail_view_item_list'];
    }
}