

export class ListSupportRegionsRequest {
    public limit?: number;
    public offset?: number;
    public marker?: string;
    private 'page_reverse'?: boolean;
    public fields?: Array<ListSupportRegionsRequestFieldsEnum> | Array<string>;
    private 'sort_key'?: Array<ListSupportRegionsRequestSortKeyEnum> | Array<string>;
    private 'sort_dir'?: Array<ListSupportRegionsRequestSortDirEnum> | Array<string>;
    public id?: Array<string>;
    private 'instance_type'?: Array<string>;
    private 'public_border_group'?: Array<string>;
    private 'access_site'?: Array<string>;
    private 'region_id'?: Array<string>;
    private 'remote_endpoint'?: Array<string>;
    public status?: Array<string>;
    public constructor() { 
    }
    public withLimit(limit: number): ListSupportRegionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListSupportRegionsRequest {
        this['offset'] = offset;
        return this;
    }
    public withMarker(marker: string): ListSupportRegionsRequest {
        this['marker'] = marker;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListSupportRegionsRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean  | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse(): boolean | undefined {
        return this['page_reverse'];
    }
    public withFields(fields: Array<ListSupportRegionsRequestFieldsEnum> | Array<string>): ListSupportRegionsRequest {
        this['fields'] = fields;
        return this;
    }
    public withSortKey(sortKey: Array<ListSupportRegionsRequestSortKeyEnum> | Array<string>): ListSupportRegionsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: Array<ListSupportRegionsRequestSortKeyEnum> | Array<string>  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): Array<ListSupportRegionsRequestSortKeyEnum> | Array<string> | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: Array<ListSupportRegionsRequestSortDirEnum> | Array<string>): ListSupportRegionsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<ListSupportRegionsRequestSortDirEnum> | Array<string>  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): Array<ListSupportRegionsRequestSortDirEnum> | Array<string> | undefined {
        return this['sort_dir'];
    }
    public withId(id: Array<string>): ListSupportRegionsRequest {
        this['id'] = id;
        return this;
    }
    public withInstanceType(instanceType: Array<string>): ListSupportRegionsRequest {
        this['instance_type'] = instanceType;
        return this;
    }
    public set instanceType(instanceType: Array<string>  | undefined) {
        this['instance_type'] = instanceType;
    }
    public get instanceType(): Array<string> | undefined {
        return this['instance_type'];
    }
    public withPublicBorderGroup(publicBorderGroup: Array<string>): ListSupportRegionsRequest {
        this['public_border_group'] = publicBorderGroup;
        return this;
    }
    public set publicBorderGroup(publicBorderGroup: Array<string>  | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup(): Array<string> | undefined {
        return this['public_border_group'];
    }
    public withAccessSite(accessSite: Array<string>): ListSupportRegionsRequest {
        this['access_site'] = accessSite;
        return this;
    }
    public set accessSite(accessSite: Array<string>  | undefined) {
        this['access_site'] = accessSite;
    }
    public get accessSite(): Array<string> | undefined {
        return this['access_site'];
    }
    public withRegionId(regionId: Array<string>): ListSupportRegionsRequest {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: Array<string>  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): Array<string> | undefined {
        return this['region_id'];
    }
    public withRemoteEndpoint(remoteEndpoint: Array<string>): ListSupportRegionsRequest {
        this['remote_endpoint'] = remoteEndpoint;
        return this;
    }
    public set remoteEndpoint(remoteEndpoint: Array<string>  | undefined) {
        this['remote_endpoint'] = remoteEndpoint;
    }
    public get remoteEndpoint(): Array<string> | undefined {
        return this['remote_endpoint'];
    }
    public withStatus(status: Array<string>): ListSupportRegionsRequest {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSupportRegionsRequestFieldsEnum {
    ID = 'id',
    INSTANCE_TYPE = 'instance_type',
    ACCESS_SITE = 'access_site',
    REGION_ID = 'region_id',
    PUBLIC_BORDER_GROUP = 'public_border_group',
    REMOTE_ENDPOINT = 'remote_endpoint',
    STATUS = 'status',
    CREATED_AT = 'created_at',
    UPDATED_AT = 'updated_at'
}
/**
    * @export
    * @enum {string}
    */
export enum ListSupportRegionsRequestSortKeyEnum {
    ID = 'id',
    INSTANCE_TYPE = 'instance_type',
    ACCESS_SITE = 'access_site',
    PUBLIC_BORDER_GROUP = 'public_border_group',
    REGION_ID = 'region_id',
    REMOTE_ENDPOINT = 'remote_endpoint',
    STATUS = 'status',
    CREATED_AT = 'created_at',
    UPDATED_AT = 'updated_at'
}
/**
    * @export
    * @enum {string}
    */
export enum ListSupportRegionsRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
