

export class ListGlobalDcGatewayRequest {
    public limit?: number;
    public marker?: string;
    public fields?: Array<string>;
    private 'sort_key'?: string;
    private 'sort_dir'?: Array<ListGlobalDcGatewayRequestSortDirEnum> | Array<string>;
    private 'hosting_id'?: Array<string>;
    private 'enterprise_project_id'?: Array<string>;
    public id?: Array<string>;
    public name?: Array<string>;
    private 'global_center_network_id'?: Array<string>;
    private 'site_network_id'?: Array<string>;
    private 'cloud_connection_id'?: Array<string>;
    public constructor() { 
    }
    public withLimit(limit: number): ListGlobalDcGatewayRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListGlobalDcGatewayRequest {
        this['marker'] = marker;
        return this;
    }
    public withFields(fields: Array<string>): ListGlobalDcGatewayRequest {
        this['fields'] = fields;
        return this;
    }
    public withSortKey(sortKey: string): ListGlobalDcGatewayRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: Array<ListGlobalDcGatewayRequestSortDirEnum> | Array<string>): ListGlobalDcGatewayRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<ListGlobalDcGatewayRequestSortDirEnum> | Array<string>  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): Array<ListGlobalDcGatewayRequestSortDirEnum> | Array<string> | undefined {
        return this['sort_dir'];
    }
    public withHostingId(hostingId: Array<string>): ListGlobalDcGatewayRequest {
        this['hosting_id'] = hostingId;
        return this;
    }
    public set hostingId(hostingId: Array<string>  | undefined) {
        this['hosting_id'] = hostingId;
    }
    public get hostingId(): Array<string> | undefined {
        return this['hosting_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: Array<string>): ListGlobalDcGatewayRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: Array<string>  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): Array<string> | undefined {
        return this['enterprise_project_id'];
    }
    public withId(id: Array<string>): ListGlobalDcGatewayRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: Array<string>): ListGlobalDcGatewayRequest {
        this['name'] = name;
        return this;
    }
    public withGlobalCenterNetworkId(globalCenterNetworkId: Array<string>): ListGlobalDcGatewayRequest {
        this['global_center_network_id'] = globalCenterNetworkId;
        return this;
    }
    public set globalCenterNetworkId(globalCenterNetworkId: Array<string>  | undefined) {
        this['global_center_network_id'] = globalCenterNetworkId;
    }
    public get globalCenterNetworkId(): Array<string> | undefined {
        return this['global_center_network_id'];
    }
    public withSiteNetworkId(siteNetworkId: Array<string>): ListGlobalDcGatewayRequest {
        this['site_network_id'] = siteNetworkId;
        return this;
    }
    public set siteNetworkId(siteNetworkId: Array<string>  | undefined) {
        this['site_network_id'] = siteNetworkId;
    }
    public get siteNetworkId(): Array<string> | undefined {
        return this['site_network_id'];
    }
    public withCloudConnectionId(cloudConnectionId: Array<string>): ListGlobalDcGatewayRequest {
        this['cloud_connection_id'] = cloudConnectionId;
        return this;
    }
    public set cloudConnectionId(cloudConnectionId: Array<string>  | undefined) {
        this['cloud_connection_id'] = cloudConnectionId;
    }
    public get cloudConnectionId(): Array<string> | undefined {
        return this['cloud_connection_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListGlobalDcGatewayRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
