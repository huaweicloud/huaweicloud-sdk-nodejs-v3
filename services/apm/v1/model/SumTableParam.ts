import { SumTableView } from './SumTableView';


export class SumTableParam {
    private 'request_id'?: string;
    private 'view_config'?: SumTableView;
    public strategy?: string;
    public page?: number;
    private 'page_size'?: number;
    private 'order_by'?: string;
    private 'search_word'?: string;
    private 'instance_id'?: number;
    private 'monitor_item_id'?: number;
    private 'env_id'?: number;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor(viewConfig?: SumTableView, page?: number, pageSize?: number, envId?: number, startTime?: string, endTime?: string) { 
        this['view_config'] = viewConfig;
        this['page'] = page;
        this['page_size'] = pageSize;
        this['env_id'] = envId;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withRequestId(requestId: string): SumTableParam {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withViewConfig(viewConfig: SumTableView): SumTableParam {
        this['view_config'] = viewConfig;
        return this;
    }
    public set viewConfig(viewConfig: SumTableView  | undefined) {
        this['view_config'] = viewConfig;
    }
    public get viewConfig(): SumTableView | undefined {
        return this['view_config'];
    }
    public withStrategy(strategy: string): SumTableParam {
        this['strategy'] = strategy;
        return this;
    }
    public withPage(page: number): SumTableParam {
        this['page'] = page;
        return this;
    }
    public withPageSize(pageSize: number): SumTableParam {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withOrderBy(orderBy: string): SumTableParam {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): string | undefined {
        return this['order_by'];
    }
    public withSearchWord(searchWord: string): SumTableParam {
        this['search_word'] = searchWord;
        return this;
    }
    public set searchWord(searchWord: string  | undefined) {
        this['search_word'] = searchWord;
    }
    public get searchWord(): string | undefined {
        return this['search_word'];
    }
    public withInstanceId(instanceId: number): SumTableParam {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: number  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): number | undefined {
        return this['instance_id'];
    }
    public withMonitorItemId(monitorItemId: number): SumTableParam {
        this['monitor_item_id'] = monitorItemId;
        return this;
    }
    public set monitorItemId(monitorItemId: number  | undefined) {
        this['monitor_item_id'] = monitorItemId;
    }
    public get monitorItemId(): number | undefined {
        return this['monitor_item_id'];
    }
    public withEnvId(envId: number): SumTableParam {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: number  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): number | undefined {
        return this['env_id'];
    }
    public withStartTime(startTime: string): SumTableParam {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): SumTableParam {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}