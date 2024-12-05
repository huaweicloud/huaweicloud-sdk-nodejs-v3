

export class ListConnectGatewaysRequest {
    public limit?: number;
    public offset?: number;
    public marker?: string;
    private 'page_reverse'?: boolean;
    public fields?: Array<string>;
    private 'ext_fields'?: Array<string>;
    private 'sort_key'?: string;
    private 'sort_dir'?: Array<ListConnectGatewaysRequestSortDirEnum> | Array<string>;
    public id?: Array<string>;
    public name?: Array<string>;
    public status?: Array<string>;
    public constructor() { 
    }
    public withLimit(limit: number): ListConnectGatewaysRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListConnectGatewaysRequest {
        this['offset'] = offset;
        return this;
    }
    public withMarker(marker: string): ListConnectGatewaysRequest {
        this['marker'] = marker;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListConnectGatewaysRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean  | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse(): boolean | undefined {
        return this['page_reverse'];
    }
    public withFields(fields: Array<string>): ListConnectGatewaysRequest {
        this['fields'] = fields;
        return this;
    }
    public withExtFields(extFields: Array<string>): ListConnectGatewaysRequest {
        this['ext_fields'] = extFields;
        return this;
    }
    public set extFields(extFields: Array<string>  | undefined) {
        this['ext_fields'] = extFields;
    }
    public get extFields(): Array<string> | undefined {
        return this['ext_fields'];
    }
    public withSortKey(sortKey: string): ListConnectGatewaysRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: Array<ListConnectGatewaysRequestSortDirEnum> | Array<string>): ListConnectGatewaysRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<ListConnectGatewaysRequestSortDirEnum> | Array<string>  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): Array<ListConnectGatewaysRequestSortDirEnum> | Array<string> | undefined {
        return this['sort_dir'];
    }
    public withId(id: Array<string>): ListConnectGatewaysRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: Array<string>): ListConnectGatewaysRequest {
        this['name'] = name;
        return this;
    }
    public withStatus(status: Array<string>): ListConnectGatewaysRequest {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListConnectGatewaysRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
