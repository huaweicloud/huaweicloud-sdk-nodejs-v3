

export class ListFlowLogsRequest {
    private 'er_id'?: string;
    private 'resource_type'?: ListFlowLogsRequestResourceTypeEnum | string;
    private 'resource_id'?: Array<string>;
    public limit?: number;
    public marker?: string;
    private 'sort_key'?: Array<string>;
    private 'sort_dir'?: Array<ListFlowLogsRequestSortDirEnum> | Array<string>;
    public constructor(erId?: string) { 
        this['er_id'] = erId;
    }
    public withErId(erId: string): ListFlowLogsRequest {
        this['er_id'] = erId;
        return this;
    }
    public set erId(erId: string  | undefined) {
        this['er_id'] = erId;
    }
    public get erId(): string | undefined {
        return this['er_id'];
    }
    public withResourceType(resourceType: ListFlowLogsRequestResourceTypeEnum | string): ListFlowLogsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ListFlowLogsRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ListFlowLogsRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: Array<string>): ListFlowLogsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: Array<string>  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): Array<string> | undefined {
        return this['resource_id'];
    }
    public withLimit(limit: number): ListFlowLogsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListFlowLogsRequest {
        this['marker'] = marker;
        return this;
    }
    public withSortKey(sortKey: Array<string>): ListFlowLogsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: Array<string>  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): Array<string> | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: Array<ListFlowLogsRequestSortDirEnum> | Array<string>): ListFlowLogsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<ListFlowLogsRequestSortDirEnum> | Array<string>  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): Array<ListFlowLogsRequestSortDirEnum> | Array<string> | undefined {
        return this['sort_dir'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListFlowLogsRequestResourceTypeEnum {
    ATTACHMENT = 'attachment'
}
/**
    * @export
    * @enum {string}
    */
export enum ListFlowLogsRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
