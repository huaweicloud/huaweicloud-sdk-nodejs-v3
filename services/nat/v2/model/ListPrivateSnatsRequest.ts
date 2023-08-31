

export class ListPrivateSnatsRequest {
    public limit?: number;
    public marker?: string;
    private 'page_reverse'?: boolean;
    public id?: Array<string>;
    public description?: Array<string>;
    private 'gateway_id'?: Array<string>;
    public cidr?: Array<string>;
    private 'virsubnet_id'?: Array<string>;
    private 'transit_ip_id'?: Array<string>;
    private 'transit_ip_address'?: Array<string>;
    private 'enterprise_project_id'?: Array<string>;
    public constructor() { 
    }
    public withLimit(limit: number): ListPrivateSnatsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListPrivateSnatsRequest {
        this['marker'] = marker;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListPrivateSnatsRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean  | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse(): boolean | undefined {
        return this['page_reverse'];
    }
    public withId(id: Array<string>): ListPrivateSnatsRequest {
        this['id'] = id;
        return this;
    }
    public withDescription(description: Array<string>): ListPrivateSnatsRequest {
        this['description'] = description;
        return this;
    }
    public withGatewayId(gatewayId: Array<string>): ListPrivateSnatsRequest {
        this['gateway_id'] = gatewayId;
        return this;
    }
    public set gatewayId(gatewayId: Array<string>  | undefined) {
        this['gateway_id'] = gatewayId;
    }
    public get gatewayId(): Array<string> | undefined {
        return this['gateway_id'];
    }
    public withCidr(cidr: Array<string>): ListPrivateSnatsRequest {
        this['cidr'] = cidr;
        return this;
    }
    public withVirsubnetId(virsubnetId: Array<string>): ListPrivateSnatsRequest {
        this['virsubnet_id'] = virsubnetId;
        return this;
    }
    public set virsubnetId(virsubnetId: Array<string>  | undefined) {
        this['virsubnet_id'] = virsubnetId;
    }
    public get virsubnetId(): Array<string> | undefined {
        return this['virsubnet_id'];
    }
    public withTransitIpId(transitIpId: Array<string>): ListPrivateSnatsRequest {
        this['transit_ip_id'] = transitIpId;
        return this;
    }
    public set transitIpId(transitIpId: Array<string>  | undefined) {
        this['transit_ip_id'] = transitIpId;
    }
    public get transitIpId(): Array<string> | undefined {
        return this['transit_ip_id'];
    }
    public withTransitIpAddress(transitIpAddress: Array<string>): ListPrivateSnatsRequest {
        this['transit_ip_address'] = transitIpAddress;
        return this;
    }
    public set transitIpAddress(transitIpAddress: Array<string>  | undefined) {
        this['transit_ip_address'] = transitIpAddress;
    }
    public get transitIpAddress(): Array<string> | undefined {
        return this['transit_ip_address'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: Array<string>): ListPrivateSnatsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: Array<string>  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): Array<string> | undefined {
        return this['enterprise_project_id'];
    }
}