import { RawTableView } from './RawTableView';


export class RawTableParam {
    private 'last_row_id'?: string;
    private 'view_config'?: RawTableView;
    public page?: number;
    private 'page_size'?: number;
    private 'order_by'?: string;
    private 'search_word'?: string;
    private 'instance_id'?: number;
    private 'monitor_item_id'?: number;
    private 'env_id'?: number;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor(viewConfig?: RawTableView, page?: number, pageSize?: number, envId?: number, startTime?: string, endTime?: string) { 
        this['view_config'] = viewConfig;
        this['page'] = page;
        this['page_size'] = pageSize;
        this['env_id'] = envId;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withLastRowId(lastRowId: string): RawTableParam {
        this['last_row_id'] = lastRowId;
        return this;
    }
    public set lastRowId(lastRowId: string  | undefined) {
        this['last_row_id'] = lastRowId;
    }
    public get lastRowId(): string | undefined {
        return this['last_row_id'];
    }
    public withViewConfig(viewConfig: RawTableView): RawTableParam {
        this['view_config'] = viewConfig;
        return this;
    }
    public set viewConfig(viewConfig: RawTableView  | undefined) {
        this['view_config'] = viewConfig;
    }
    public get viewConfig(): RawTableView | undefined {
        return this['view_config'];
    }
    public withPage(page: number): RawTableParam {
        this['page'] = page;
        return this;
    }
    public withPageSize(pageSize: number): RawTableParam {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withOrderBy(orderBy: string): RawTableParam {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): string | undefined {
        return this['order_by'];
    }
    public withSearchWord(searchWord: string): RawTableParam {
        this['search_word'] = searchWord;
        return this;
    }
    public set searchWord(searchWord: string  | undefined) {
        this['search_word'] = searchWord;
    }
    public get searchWord(): string | undefined {
        return this['search_word'];
    }
    public withInstanceId(instanceId: number): RawTableParam {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: number  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): number | undefined {
        return this['instance_id'];
    }
    public withMonitorItemId(monitorItemId: number): RawTableParam {
        this['monitor_item_id'] = monitorItemId;
        return this;
    }
    public set monitorItemId(monitorItemId: number  | undefined) {
        this['monitor_item_id'] = monitorItemId;
    }
    public get monitorItemId(): number | undefined {
        return this['monitor_item_id'];
    }
    public withEnvId(envId: number): RawTableParam {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: number  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): number | undefined {
        return this['env_id'];
    }
    public withStartTime(startTime: string): RawTableParam {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): RawTableParam {
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