

export class ListSlowlogRequest {
    private 'instance_id': string | undefined;
    public offset?: number;
    public limit?: number;
    private 'sort_key'?: ListSlowlogRequestSortKeyEnum | undefined;
    private 'sort_dir'?: ListSlowlogRequestSortDirEnum | undefined;
    private 'start_time': string | undefined;
    private 'end_time': string | undefined;
    public constructor(instanceId?: any, startTime?: any, endTime?: any) { 
        this['instance_id'] = instanceId;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withInstanceId(instanceId: string): ListSlowlogRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListSlowlogRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSlowlogRequest {
        this['limit'] = limit;
        return this;
    }
    public withSortKey(sortKey: ListSlowlogRequestSortKeyEnum): ListSlowlogRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: ListSlowlogRequestSortKeyEnum | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey() {
        return this['sort_key'];
    }
    public withSortDir(sortDir: ListSlowlogRequestSortDirEnum): ListSlowlogRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: ListSlowlogRequestSortDirEnum | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir() {
        return this['sort_dir'];
    }
    public withStartTime(startTime: string): ListSlowlogRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListSlowlogRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSlowlogRequestSortKeyEnum {
    START_TIME = 'start_time',
    DURATION = 'duration'
}
/**
    * @export
    * @enum {string}
    */
export enum ListSlowlogRequestSortDirEnum {
    DESC = 'desc',
    ASC = 'asc'
}
