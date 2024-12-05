

export class ListGlobalEipsRequest {
    public limit?: number;
    public offset?: number;
    public marker?: string;
    private 'page_reverse'?: boolean;
    public fields?: Array<string>;
    private 'ext_fields'?: Array<string>;
    private 'sort_key'?: string;
    private 'sort_dir'?: Array<ListGlobalEipsRequestSortDirEnum> | Array<string>;
    private 'connect_gateway_id'?: string;
    public status?: Array<string>;
    private 'global_eip_id'?: Array<string>;
    private 'global_eip_segment_id'?: Array<string>;
    public constructor(connectGatewayId?: string) { 
        this['connect_gateway_id'] = connectGatewayId;
    }
    public withLimit(limit: number): ListGlobalEipsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListGlobalEipsRequest {
        this['offset'] = offset;
        return this;
    }
    public withMarker(marker: string): ListGlobalEipsRequest {
        this['marker'] = marker;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListGlobalEipsRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean  | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse(): boolean | undefined {
        return this['page_reverse'];
    }
    public withFields(fields: Array<string>): ListGlobalEipsRequest {
        this['fields'] = fields;
        return this;
    }
    public withExtFields(extFields: Array<string>): ListGlobalEipsRequest {
        this['ext_fields'] = extFields;
        return this;
    }
    public set extFields(extFields: Array<string>  | undefined) {
        this['ext_fields'] = extFields;
    }
    public get extFields(): Array<string> | undefined {
        return this['ext_fields'];
    }
    public withSortKey(sortKey: string): ListGlobalEipsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: Array<ListGlobalEipsRequestSortDirEnum> | Array<string>): ListGlobalEipsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<ListGlobalEipsRequestSortDirEnum> | Array<string>  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): Array<ListGlobalEipsRequestSortDirEnum> | Array<string> | undefined {
        return this['sort_dir'];
    }
    public withConnectGatewayId(connectGatewayId: string): ListGlobalEipsRequest {
        this['connect_gateway_id'] = connectGatewayId;
        return this;
    }
    public set connectGatewayId(connectGatewayId: string  | undefined) {
        this['connect_gateway_id'] = connectGatewayId;
    }
    public get connectGatewayId(): string | undefined {
        return this['connect_gateway_id'];
    }
    public withStatus(status: Array<string>): ListGlobalEipsRequest {
        this['status'] = status;
        return this;
    }
    public withGlobalEipId(globalEipId: Array<string>): ListGlobalEipsRequest {
        this['global_eip_id'] = globalEipId;
        return this;
    }
    public set globalEipId(globalEipId: Array<string>  | undefined) {
        this['global_eip_id'] = globalEipId;
    }
    public get globalEipId(): Array<string> | undefined {
        return this['global_eip_id'];
    }
    public withGlobalEipSegmentId(globalEipSegmentId: Array<string>): ListGlobalEipsRequest {
        this['global_eip_segment_id'] = globalEipSegmentId;
        return this;
    }
    public set globalEipSegmentId(globalEipSegmentId: Array<string>  | undefined) {
        this['global_eip_segment_id'] = globalEipSegmentId;
    }
    public get globalEipSegmentId(): Array<string> | undefined {
        return this['global_eip_segment_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListGlobalEipsRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
