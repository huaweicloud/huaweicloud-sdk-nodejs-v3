

export class ShowTransitIpRequest {
    private 'transit_ip_id'?: string;
    public constructor(transitIpId?: string) { 
        this['transit_ip_id'] = transitIpId;
    }
    public withTransitIpId(transitIpId: string): ShowTransitIpRequest {
        this['transit_ip_id'] = transitIpId;
        return this;
    }
    public set transitIpId(transitIpId: string  | undefined) {
        this['transit_ip_id'] = transitIpId;
    }
    public get transitIpId(): string | undefined {
        return this['transit_ip_id'];
    }
}