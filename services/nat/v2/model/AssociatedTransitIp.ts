

export class AssociatedTransitIp {
    private 'transit_ip_id'?: string;
    private 'transit_ip_address'?: string;
    public constructor() { 
    }
    public withTransitIpId(transitIpId: string): AssociatedTransitIp {
        this['transit_ip_id'] = transitIpId;
        return this;
    }
    public set transitIpId(transitIpId: string  | undefined) {
        this['transit_ip_id'] = transitIpId;
    }
    public get transitIpId(): string | undefined {
        return this['transit_ip_id'];
    }
    public withTransitIpAddress(transitIpAddress: string): AssociatedTransitIp {
        this['transit_ip_address'] = transitIpAddress;
        return this;
    }
    public set transitIpAddress(transitIpAddress: string  | undefined) {
        this['transit_ip_address'] = transitIpAddress;
    }
    public get transitIpAddress(): string | undefined {
        return this['transit_ip_address'];
    }
}