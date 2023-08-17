

export class ListVirtualGatewaysRequest {
    public limit?: number;
    public marker?: string;
    public fields?: Array<string>;
    private 'sort_dir'?: Array<ListVirtualGatewaysRequestSortDirEnum> | Array<string>;
    private 'sort_key'?: string;
    public id?: Array<string>;
    private 'vpc_id'?: Array<string>;
    public constructor() { 
    }
    public withLimit(limit: number): ListVirtualGatewaysRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListVirtualGatewaysRequest {
        this['marker'] = marker;
        return this;
    }
    public withFields(fields: Array<string>): ListVirtualGatewaysRequest {
        this['fields'] = fields;
        return this;
    }
    public withSortDir(sortDir: Array<ListVirtualGatewaysRequestSortDirEnum> | Array<string>): ListVirtualGatewaysRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<ListVirtualGatewaysRequestSortDirEnum> | Array<string>  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): Array<ListVirtualGatewaysRequestSortDirEnum> | Array<string> | undefined {
        return this['sort_dir'];
    }
    public withSortKey(sortKey: string): ListVirtualGatewaysRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withId(id: Array<string>): ListVirtualGatewaysRequest {
        this['id'] = id;
        return this;
    }
    public withVpcId(vpcId: Array<string>): ListVirtualGatewaysRequest {
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
export enum ListVirtualGatewaysRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
