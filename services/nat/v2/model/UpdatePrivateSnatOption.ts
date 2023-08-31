

export class UpdatePrivateSnatOption {
    private 'transit_ip_ids'?: Array<string>;
    public description?: string;
    public constructor() { 
    }
    public withTransitIpIds(transitIpIds: Array<string>): UpdatePrivateSnatOption {
        this['transit_ip_ids'] = transitIpIds;
        return this;
    }
    public set transitIpIds(transitIpIds: Array<string>  | undefined) {
        this['transit_ip_ids'] = transitIpIds;
    }
    public get transitIpIds(): Array<string> | undefined {
        return this['transit_ip_ids'];
    }
    public withDescription(description: string): UpdatePrivateSnatOption {
        this['description'] = description;
        return this;
    }
}