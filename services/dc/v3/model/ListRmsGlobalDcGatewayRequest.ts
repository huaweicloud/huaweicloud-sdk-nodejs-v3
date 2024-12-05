

export class ListRmsGlobalDcGatewayRequest {
    public limit?: number;
    public offset?: number;
    public marker?: string;
    private 'page_reverse'?: boolean;
    private 'rp_name'?: string;
    private 'domain_id'?: string;
    private 'region_id'?: string;
    private 'resource_type'?: string;
    public fields?: Array<string>;
    private 'ext_fields'?: Array<string>;
    private 'sort_key'?: string;
    private 'sort_dir'?: Array<ListRmsGlobalDcGatewayRequestSortDirEnum> | Array<string>;
    public id?: Array<string>;
    public name?: Array<string>;
    public status?: Array<string>;
    private 'enterprise_project_id'?: Array<string>;
    private 'global_center_network_id'?: Array<string>;
    private 'site_network_id'?: Array<string>;
    private 'cloud_connection_id'?: Array<string>;
    public constructor(rpName?: string, domainId?: string, regionId?: string, resourceType?: string) { 
        this['rp_name'] = rpName;
        this['domain_id'] = domainId;
        this['region_id'] = regionId;
        this['resource_type'] = resourceType;
    }
    public withLimit(limit: number): ListRmsGlobalDcGatewayRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListRmsGlobalDcGatewayRequest {
        this['offset'] = offset;
        return this;
    }
    public withMarker(marker: string): ListRmsGlobalDcGatewayRequest {
        this['marker'] = marker;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListRmsGlobalDcGatewayRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean  | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse(): boolean | undefined {
        return this['page_reverse'];
    }
    public withRpName(rpName: string): ListRmsGlobalDcGatewayRequest {
        this['rp_name'] = rpName;
        return this;
    }
    public set rpName(rpName: string  | undefined) {
        this['rp_name'] = rpName;
    }
    public get rpName(): string | undefined {
        return this['rp_name'];
    }
    public withDomainId(domainId: string): ListRmsGlobalDcGatewayRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withRegionId(regionId: string): ListRmsGlobalDcGatewayRequest {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withResourceType(resourceType: string): ListRmsGlobalDcGatewayRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withFields(fields: Array<string>): ListRmsGlobalDcGatewayRequest {
        this['fields'] = fields;
        return this;
    }
    public withExtFields(extFields: Array<string>): ListRmsGlobalDcGatewayRequest {
        this['ext_fields'] = extFields;
        return this;
    }
    public set extFields(extFields: Array<string>  | undefined) {
        this['ext_fields'] = extFields;
    }
    public get extFields(): Array<string> | undefined {
        return this['ext_fields'];
    }
    public withSortKey(sortKey: string): ListRmsGlobalDcGatewayRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: Array<ListRmsGlobalDcGatewayRequestSortDirEnum> | Array<string>): ListRmsGlobalDcGatewayRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<ListRmsGlobalDcGatewayRequestSortDirEnum> | Array<string>  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): Array<ListRmsGlobalDcGatewayRequestSortDirEnum> | Array<string> | undefined {
        return this['sort_dir'];
    }
    public withId(id: Array<string>): ListRmsGlobalDcGatewayRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: Array<string>): ListRmsGlobalDcGatewayRequest {
        this['name'] = name;
        return this;
    }
    public withStatus(status: Array<string>): ListRmsGlobalDcGatewayRequest {
        this['status'] = status;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: Array<string>): ListRmsGlobalDcGatewayRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: Array<string>  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): Array<string> | undefined {
        return this['enterprise_project_id'];
    }
    public withGlobalCenterNetworkId(globalCenterNetworkId: Array<string>): ListRmsGlobalDcGatewayRequest {
        this['global_center_network_id'] = globalCenterNetworkId;
        return this;
    }
    public set globalCenterNetworkId(globalCenterNetworkId: Array<string>  | undefined) {
        this['global_center_network_id'] = globalCenterNetworkId;
    }
    public get globalCenterNetworkId(): Array<string> | undefined {
        return this['global_center_network_id'];
    }
    public withSiteNetworkId(siteNetworkId: Array<string>): ListRmsGlobalDcGatewayRequest {
        this['site_network_id'] = siteNetworkId;
        return this;
    }
    public set siteNetworkId(siteNetworkId: Array<string>  | undefined) {
        this['site_network_id'] = siteNetworkId;
    }
    public get siteNetworkId(): Array<string> | undefined {
        return this['site_network_id'];
    }
    public withCloudConnectionId(cloudConnectionId: Array<string>): ListRmsGlobalDcGatewayRequest {
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
export enum ListRmsGlobalDcGatewayRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
