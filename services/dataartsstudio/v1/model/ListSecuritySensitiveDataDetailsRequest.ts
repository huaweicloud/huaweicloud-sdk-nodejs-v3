

export class ListSecuritySensitiveDataDetailsRequest {
    public limit?: number;
    public offset?: number;
    public marker?: string;
    private 'database_name'?: string;
    private 'find_start_time'?: number;
    private 'find_end_time'?: number;
    private 'order_by'?: ListSecuritySensitiveDataDetailsRequestOrderByEnum | string;
    private 'order_by_asc'?: boolean;
    public workspace?: string;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withLimit(limit: number): ListSecuritySensitiveDataDetailsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListSecuritySensitiveDataDetailsRequest {
        this['offset'] = offset;
        return this;
    }
    public withMarker(marker: string): ListSecuritySensitiveDataDetailsRequest {
        this['marker'] = marker;
        return this;
    }
    public withDatabaseName(databaseName: string): ListSecuritySensitiveDataDetailsRequest {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withFindStartTime(findStartTime: number): ListSecuritySensitiveDataDetailsRequest {
        this['find_start_time'] = findStartTime;
        return this;
    }
    public set findStartTime(findStartTime: number  | undefined) {
        this['find_start_time'] = findStartTime;
    }
    public get findStartTime(): number | undefined {
        return this['find_start_time'];
    }
    public withFindEndTime(findEndTime: number): ListSecuritySensitiveDataDetailsRequest {
        this['find_end_time'] = findEndTime;
        return this;
    }
    public set findEndTime(findEndTime: number  | undefined) {
        this['find_end_time'] = findEndTime;
    }
    public get findEndTime(): number | undefined {
        return this['find_end_time'];
    }
    public withOrderBy(orderBy: ListSecuritySensitiveDataDetailsRequestOrderByEnum | string): ListSecuritySensitiveDataDetailsRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: ListSecuritySensitiveDataDetailsRequestOrderByEnum | string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): ListSecuritySensitiveDataDetailsRequestOrderByEnum | string | undefined {
        return this['order_by'];
    }
    public withOrderByAsc(orderByAsc: boolean): ListSecuritySensitiveDataDetailsRequest {
        this['order_by_asc'] = orderByAsc;
        return this;
    }
    public set orderByAsc(orderByAsc: boolean  | undefined) {
        this['order_by_asc'] = orderByAsc;
    }
    public get orderByAsc(): boolean | undefined {
        return this['order_by_asc'];
    }
    public withWorkspace(workspace: string): ListSecuritySensitiveDataDetailsRequest {
        this['workspace'] = workspace;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSecuritySensitiveDataDetailsRequestOrderByEnum {
    FIND_TIME = 'FIND_TIME'
}
