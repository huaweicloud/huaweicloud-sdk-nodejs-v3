

export class ListVpcAttachmentsRequest {
    private 'er_id'?: string;
    public limit?: number;
    public marker?: string;
    public state?: Array<ListVpcAttachmentsRequestStateEnum> | Array<string>;
    public id?: Array<string>;
    private 'sort_key'?: Array<string>;
    private 'sort_dir'?: Array<ListVpcAttachmentsRequestSortDirEnum> | Array<string>;
    private 'vpc_id'?: Array<string>;
    public constructor(erId?: string) { 
        this['er_id'] = erId;
    }
    public withErId(erId: string): ListVpcAttachmentsRequest {
        this['er_id'] = erId;
        return this;
    }
    public set erId(erId: string  | undefined) {
        this['er_id'] = erId;
    }
    public get erId(): string | undefined {
        return this['er_id'];
    }
    public withLimit(limit: number): ListVpcAttachmentsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListVpcAttachmentsRequest {
        this['marker'] = marker;
        return this;
    }
    public withState(state: Array<ListVpcAttachmentsRequestStateEnum> | Array<string>): ListVpcAttachmentsRequest {
        this['state'] = state;
        return this;
    }
    public withId(id: Array<string>): ListVpcAttachmentsRequest {
        this['id'] = id;
        return this;
    }
    public withSortKey(sortKey: Array<string>): ListVpcAttachmentsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: Array<string>  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): Array<string> | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: Array<ListVpcAttachmentsRequestSortDirEnum> | Array<string>): ListVpcAttachmentsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<ListVpcAttachmentsRequestSortDirEnum> | Array<string>  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): Array<ListVpcAttachmentsRequestSortDirEnum> | Array<string> | undefined {
        return this['sort_dir'];
    }
    public withVpcId(vpcId: Array<string>): ListVpcAttachmentsRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: Array<string>  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): Array<string> | undefined {
        return this['vpc_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListVpcAttachmentsRequestStateEnum {
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
export enum ListVpcAttachmentsRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
