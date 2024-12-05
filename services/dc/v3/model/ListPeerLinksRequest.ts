

export class ListPeerLinksRequest {
    public limit?: number;
    public offset?: number;
    public marker?: string;
    private 'page_reverse'?: boolean;
    public fields?: Array<string>;
    private 'ext_fields'?: Array<string>;
    private 'sort_key'?: string;
    private 'sort_dir'?: Array<ListPeerLinksRequestSortDirEnum> | Array<string>;
    private 'global_dc_gateway_id'?: string;
    public id?: Array<string>;
    public name?: Array<string>;
    public constructor(globalDcGatewayId?: string) { 
        this['global_dc_gateway_id'] = globalDcGatewayId;
    }
    public withLimit(limit: number): ListPeerLinksRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListPeerLinksRequest {
        this['offset'] = offset;
        return this;
    }
    public withMarker(marker: string): ListPeerLinksRequest {
        this['marker'] = marker;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListPeerLinksRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean  | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse(): boolean | undefined {
        return this['page_reverse'];
    }
    public withFields(fields: Array<string>): ListPeerLinksRequest {
        this['fields'] = fields;
        return this;
    }
    public withExtFields(extFields: Array<string>): ListPeerLinksRequest {
        this['ext_fields'] = extFields;
        return this;
    }
    public set extFields(extFields: Array<string>  | undefined) {
        this['ext_fields'] = extFields;
    }
    public get extFields(): Array<string> | undefined {
        return this['ext_fields'];
    }
    public withSortKey(sortKey: string): ListPeerLinksRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: Array<ListPeerLinksRequestSortDirEnum> | Array<string>): ListPeerLinksRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<ListPeerLinksRequestSortDirEnum> | Array<string>  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): Array<ListPeerLinksRequestSortDirEnum> | Array<string> | undefined {
        return this['sort_dir'];
    }
    public withGlobalDcGatewayId(globalDcGatewayId: string): ListPeerLinksRequest {
        this['global_dc_gateway_id'] = globalDcGatewayId;
        return this;
    }
    public set globalDcGatewayId(globalDcGatewayId: string  | undefined) {
        this['global_dc_gateway_id'] = globalDcGatewayId;
    }
    public get globalDcGatewayId(): string | undefined {
        return this['global_dc_gateway_id'];
    }
    public withId(id: Array<string>): ListPeerLinksRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: Array<string>): ListPeerLinksRequest {
        this['name'] = name;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListPeerLinksRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
