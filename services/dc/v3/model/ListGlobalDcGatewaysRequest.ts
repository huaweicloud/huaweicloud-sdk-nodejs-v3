

export class ListGlobalDcGatewaysRequest {
    public limit?: number;
    public fields?: Array<string>;
    public marker?: string;
    private 'sort_key'?: string;
    private 'sort_dir'?: Array<ListGlobalDcGatewaysRequestSortDirEnum> | Array<string>;
    public id?: Array<string>;
    public name?: Array<string>;
    private 'enterprise_project_id'?: Array<string>;
    private 'site_network_id'?: Array<string>;
    private 'cloud_connection_id'?: Array<string>;
    public status?: Array<string>;
    private 'global_center_network_id'?: Array<string>;
    public constructor() { 
    }
    public withLimit(limit: number): ListGlobalDcGatewaysRequest {
        this['limit'] = limit;
        return this;
    }
    public withFields(fields: Array<string>): ListGlobalDcGatewaysRequest {
        this['fields'] = fields;
        return this;
    }
    public withMarker(marker: string): ListGlobalDcGatewaysRequest {
        this['marker'] = marker;
        return this;
    }
    public withSortKey(sortKey: string): ListGlobalDcGatewaysRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: Array<ListGlobalDcGatewaysRequestSortDirEnum> | Array<string>): ListGlobalDcGatewaysRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<ListGlobalDcGatewaysRequestSortDirEnum> | Array<string>  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): Array<ListGlobalDcGatewaysRequestSortDirEnum> | Array<string> | undefined {
        return this['sort_dir'];
    }
    public withId(id: Array<string>): ListGlobalDcGatewaysRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: Array<string>): ListGlobalDcGatewaysRequest {
        this['name'] = name;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: Array<string>): ListGlobalDcGatewaysRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: Array<string>  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): Array<string> | undefined {
        return this['enterprise_project_id'];
    }
    public withSiteNetworkId(siteNetworkId: Array<string>): ListGlobalDcGatewaysRequest {
        this['site_network_id'] = siteNetworkId;
        return this;
    }
    public set siteNetworkId(siteNetworkId: Array<string>  | undefined) {
        this['site_network_id'] = siteNetworkId;
    }
    public get siteNetworkId(): Array<string> | undefined {
        return this['site_network_id'];
    }
    public withCloudConnectionId(cloudConnectionId: Array<string>): ListGlobalDcGatewaysRequest {
        this['cloud_connection_id'] = cloudConnectionId;
        return this;
    }
    public set cloudConnectionId(cloudConnectionId: Array<string>  | undefined) {
        this['cloud_connection_id'] = cloudConnectionId;
    }
    public get cloudConnectionId(): Array<string> | undefined {
        return this['cloud_connection_id'];
    }
    public withStatus(status: Array<string>): ListGlobalDcGatewaysRequest {
        this['status'] = status;
        return this;
    }
    public withGlobalCenterNetworkId(globalCenterNetworkId: Array<string>): ListGlobalDcGatewaysRequest {
        this['global_center_network_id'] = globalCenterNetworkId;
        return this;
    }
    public set globalCenterNetworkId(globalCenterNetworkId: Array<string>  | undefined) {
        this['global_center_network_id'] = globalCenterNetworkId;
    }
    public get globalCenterNetworkId(): Array<string> | undefined {
        return this['global_center_network_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListGlobalDcGatewaysRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
