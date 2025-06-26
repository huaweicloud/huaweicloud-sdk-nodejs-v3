

export class ListSlowlogRequest {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'sort_key'?: ListSlowlogRequestSortKeyEnum | string;
    private 'sort_dir'?: ListSlowlogRequestSortDirEnum | string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public role?: string;
    public constructor(instanceId?: string, startTime?: string, endTime?: string) { 
        this['instance_id'] = instanceId;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withInstanceId(instanceId: string): ListSlowlogRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
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
    public withSortKey(sortKey: ListSlowlogRequestSortKeyEnum | string): ListSlowlogRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: ListSlowlogRequestSortKeyEnum | string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): ListSlowlogRequestSortKeyEnum | string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: ListSlowlogRequestSortDirEnum | string): ListSlowlogRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: ListSlowlogRequestSortDirEnum | string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): ListSlowlogRequestSortDirEnum | string | undefined {
        return this['sort_dir'];
    }
    public withStartTime(startTime: string): ListSlowlogRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListSlowlogRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withRole(role: string): ListSlowlogRequest {
        this['role'] = role;
        return this;
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
