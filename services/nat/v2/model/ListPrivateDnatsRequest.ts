

export class ListPrivateDnatsRequest {
    public limit?: number;
    public marker?: string;
    private 'page_reverse'?: boolean;
    public id?: Array<string>;
    private 'enterprise_project_id'?: Array<string>;
    public description?: Array<string>;
    private 'gateway_id'?: Array<string>;
    private 'transit_ip_id'?: Array<string>;
    private 'external_ip_address'?: Array<string>;
    private 'network_interface_id'?: Array<string>;
    public type?: Array<string>;
    private 'private_ip_address'?: Array<string>;
    public constructor() { 
    }
    public withLimit(limit: number): ListPrivateDnatsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListPrivateDnatsRequest {
        this['marker'] = marker;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListPrivateDnatsRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean  | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse(): boolean | undefined {
        return this['page_reverse'];
    }
    public withId(id: Array<string>): ListPrivateDnatsRequest {
        this['id'] = id;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: Array<string>): ListPrivateDnatsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: Array<string>  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): Array<string> | undefined {
        return this['enterprise_project_id'];
    }
    public withDescription(description: Array<string>): ListPrivateDnatsRequest {
        this['description'] = description;
        return this;
    }
    public withGatewayId(gatewayId: Array<string>): ListPrivateDnatsRequest {
        this['gateway_id'] = gatewayId;
        return this;
    }
    public set gatewayId(gatewayId: Array<string>  | undefined) {
        this['gateway_id'] = gatewayId;
    }
    public get gatewayId(): Array<string> | undefined {
        return this['gateway_id'];
    }
    public withTransitIpId(transitIpId: Array<string>): ListPrivateDnatsRequest {
        this['transit_ip_id'] = transitIpId;
        return this;
    }
    public set transitIpId(transitIpId: Array<string>  | undefined) {
        this['transit_ip_id'] = transitIpId;
    }
    public get transitIpId(): Array<string> | undefined {
        return this['transit_ip_id'];
    }
    public withExternalIpAddress(externalIpAddress: Array<string>): ListPrivateDnatsRequest {
        this['external_ip_address'] = externalIpAddress;
        return this;
    }
    public set externalIpAddress(externalIpAddress: Array<string>  | undefined) {
        this['external_ip_address'] = externalIpAddress;
    }
    public get externalIpAddress(): Array<string> | undefined {
        return this['external_ip_address'];
    }
    public withNetworkInterfaceId(networkInterfaceId: Array<string>): ListPrivateDnatsRequest {
        this['network_interface_id'] = networkInterfaceId;
        return this;
    }
    public set networkInterfaceId(networkInterfaceId: Array<string>  | undefined) {
        this['network_interface_id'] = networkInterfaceId;
    }
    public get networkInterfaceId(): Array<string> | undefined {
        return this['network_interface_id'];
    }
    public withType(type: Array<string>): ListPrivateDnatsRequest {
        this['type'] = type;
        return this;
    }
    public withPrivateIpAddress(privateIpAddress: Array<string>): ListPrivateDnatsRequest {
        this['private_ip_address'] = privateIpAddress;
        return this;
    }
    public set privateIpAddress(privateIpAddress: Array<string>  | undefined) {
        this['private_ip_address'] = privateIpAddress;
    }
    public get privateIpAddress(): Array<string> | undefined {
        return this['private_ip_address'];
    }
}