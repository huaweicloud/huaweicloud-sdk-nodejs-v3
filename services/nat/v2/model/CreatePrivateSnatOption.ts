

export class CreatePrivateSnatOption {
    private 'gateway_id'?: string;
    public cidr?: string;
    private 'virsubnet_id'?: string;
    public description?: string;
    private 'transit_ip_ids'?: Array<string>;
    public constructor(gatewayId?: string, transitIpIds?: Array<string>) { 
        this['gateway_id'] = gatewayId;
        this['transit_ip_ids'] = transitIpIds;
    }
    public withGatewayId(gatewayId: string): CreatePrivateSnatOption {
        this['gateway_id'] = gatewayId;
        return this;
    }
    public set gatewayId(gatewayId: string  | undefined) {
        this['gateway_id'] = gatewayId;
    }
    public get gatewayId(): string | undefined {
        return this['gateway_id'];
    }
    public withCidr(cidr: string): CreatePrivateSnatOption {
        this['cidr'] = cidr;
        return this;
    }
    public withVirsubnetId(virsubnetId: string): CreatePrivateSnatOption {
        this['virsubnet_id'] = virsubnetId;
        return this;
    }
    public set virsubnetId(virsubnetId: string  | undefined) {
        this['virsubnet_id'] = virsubnetId;
    }
    public get virsubnetId(): string | undefined {
        return this['virsubnet_id'];
    }
    public withDescription(description: string): CreatePrivateSnatOption {
        this['description'] = description;
        return this;
    }
    public withTransitIpIds(transitIpIds: Array<string>): CreatePrivateSnatOption {
        this['transit_ip_ids'] = transitIpIds;
        return this;
    }
    public set transitIpIds(transitIpIds: Array<string>  | undefined) {
        this['transit_ip_ids'] = transitIpIds;
    }
    public get transitIpIds(): Array<string> | undefined {
        return this['transit_ip_ids'];
    }
}