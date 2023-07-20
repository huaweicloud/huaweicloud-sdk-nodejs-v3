

export class ListAttachmentsRequest {
    private 'er_id'?: string;
    public limit?: number;
    public marker?: string;
    public state?: Array<ListAttachmentsRequestStateEnum> | Array<string>;
    private 'resource_type'?: Array<ListAttachmentsRequestResourceTypeEnum> | Array<string>;
    private 'resource_id'?: Array<string>;
    private 'sort_key'?: Array<string>;
    private 'sort_dir'?: Array<ListAttachmentsRequestSortDirEnum> | Array<string>;
    public constructor(erId?: string) { 
        this['er_id'] = erId;
    }
    public withErId(erId: string): ListAttachmentsRequest {
        this['er_id'] = erId;
        return this;
    }
    public set erId(erId: string  | undefined) {
        this['er_id'] = erId;
    }
    public get erId(): string | undefined {
        return this['er_id'];
    }
    public withLimit(limit: number): ListAttachmentsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListAttachmentsRequest {
        this['marker'] = marker;
        return this;
    }
    public withState(state: Array<ListAttachmentsRequestStateEnum> | Array<string>): ListAttachmentsRequest {
        this['state'] = state;
        return this;
    }
    public withResourceType(resourceType: Array<ListAttachmentsRequestResourceTypeEnum> | Array<string>): ListAttachmentsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: Array<ListAttachmentsRequestResourceTypeEnum> | Array<string>  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): Array<ListAttachmentsRequestResourceTypeEnum> | Array<string> | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: Array<string>): ListAttachmentsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: Array<string>  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): Array<string> | undefined {
        return this['resource_id'];
    }
    public withSortKey(sortKey: Array<string>): ListAttachmentsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: Array<string>  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): Array<string> | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: Array<ListAttachmentsRequestSortDirEnum> | Array<string>): ListAttachmentsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<ListAttachmentsRequestSortDirEnum> | Array<string>  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): Array<ListAttachmentsRequestSortDirEnum> | Array<string> | undefined {
        return this['sort_dir'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAttachmentsRequestStateEnum {
    PENDING = 'pending',
    AVAILABLE = 'available',
    MODIFYING = 'modifying',
    DELETING = 'deleting',
    DELETED = 'deleted',
    FAILED = 'failed',
    INITIATING_REQUEST = 'initiating_request',
    REJECTED = 'rejected',
    PENDING_ACCEPTANCE = 'pending_acceptance'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAttachmentsRequestResourceTypeEnum {
    VPC = 'vpc',
    VPN = 'vpn',
    DGW = 'dgw',
    VGW = 'vgw',
    PEERING = 'peering',
    CAN = 'can',
    ECN = 'ecn',
    GDGW = 'gdgw',
    CONNECT = 'connect',
    CFW = 'cfw'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAttachmentsRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
