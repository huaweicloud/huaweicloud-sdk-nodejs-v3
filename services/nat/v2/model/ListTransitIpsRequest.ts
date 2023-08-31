

export class ListTransitIpsRequest {
    public limit?: number;
    public marker?: string;
    private 'page_reverse'?: boolean;
    public id?: Array<string>;
    private 'network_interface_id'?: Array<string>;
    private 'ip_address'?: Array<string>;
    private 'gateway_id'?: Array<string>;
    private 'enterprise_project_id'?: Array<string>;
    private 'virsubnet_id'?: Array<string>;
    public constructor() { 
    }
    public withLimit(limit: number): ListTransitIpsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListTransitIpsRequest {
        this['marker'] = marker;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListTransitIpsRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean  | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse(): boolean | undefined {
        return this['page_reverse'];
    }
    public withId(id: Array<string>): ListTransitIpsRequest {
        this['id'] = id;
        return this;
    }
    public withNetworkInterfaceId(networkInterfaceId: Array<string>): ListTransitIpsRequest {
        this['network_interface_id'] = networkInterfaceId;
        return this;
    }
    public set networkInterfaceId(networkInterfaceId: Array<string>  | undefined) {
        this['network_interface_id'] = networkInterfaceId;
    }
    public get networkInterfaceId(): Array<string> | undefined {
        return this['network_interface_id'];
    }
    public withIpAddress(ipAddress: Array<string>): ListTransitIpsRequest {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: Array<string>  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): Array<string> | undefined {
        return this['ip_address'];
    }
    public withGatewayId(gatewayId: Array<string>): ListTransitIpsRequest {
        this['gateway_id'] = gatewayId;
        return this;
    }
    public set gatewayId(gatewayId: Array<string>  | undefined) {
        this['gateway_id'] = gatewayId;
    }
    public get gatewayId(): Array<string> | undefined {
        return this['gateway_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: Array<string>): ListTransitIpsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: Array<string>  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): Array<string> | undefined {
        return this['enterprise_project_id'];
    }
    public withVirsubnetId(virsubnetId: Array<string>): ListTransitIpsRequest {
        this['virsubnet_id'] = virsubnetId;
        return this;
    }
    public set virsubnetId(virsubnetId: Array<string>  | undefined) {
        this['virsubnet_id'] = virsubnetId;
    }
    public get virsubnetId(): Array<string> | undefined {
        return this['virsubnet_id'];
    }
}