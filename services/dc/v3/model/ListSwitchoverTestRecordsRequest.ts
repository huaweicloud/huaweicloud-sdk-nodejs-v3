

export class ListSwitchoverTestRecordsRequest {
    public limit?: number;
    public marker?: string;
    public fields?: Array<string>;
    private 'sort_dir'?: Array<ListSwitchoverTestRecordsRequestSortDirEnum> | Array<string>;
    private 'sort_key'?: string;
    private 'resource_id'?: Array<string>;
    public constructor() { 
    }
    public withLimit(limit: number): ListSwitchoverTestRecordsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListSwitchoverTestRecordsRequest {
        this['marker'] = marker;
        return this;
    }
    public withFields(fields: Array<string>): ListSwitchoverTestRecordsRequest {
        this['fields'] = fields;
        return this;
    }
    public withSortDir(sortDir: Array<ListSwitchoverTestRecordsRequestSortDirEnum> | Array<string>): ListSwitchoverTestRecordsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<ListSwitchoverTestRecordsRequestSortDirEnum> | Array<string>  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): Array<ListSwitchoverTestRecordsRequestSortDirEnum> | Array<string> | undefined {
        return this['sort_dir'];
    }
    public withSortKey(sortKey: string): ListSwitchoverTestRecordsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withResourceId(resourceId: Array<string>): ListSwitchoverTestRecordsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: Array<string>  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): Array<string> | undefined {
        return this['resource_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSwitchoverTestRecordsRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
