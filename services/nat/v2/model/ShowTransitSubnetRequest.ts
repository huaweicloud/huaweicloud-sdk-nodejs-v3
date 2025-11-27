

export class ShowTransitSubnetRequest {
    private 'transit_subnet_id'?: string;
    public constructor(transitSubnetId?: string) { 
        this['transit_subnet_id'] = transitSubnetId;
    }
    public withTransitSubnetId(transitSubnetId: string): ShowTransitSubnetRequest {
        this['transit_subnet_id'] = transitSubnetId;
        return this;
    }
    public set transitSubnetId(transitSubnetId: string  | undefined) {
        this['transit_subnet_id'] = transitSubnetId;
    }
    public get transitSubnetId(): string | undefined {
        return this['transit_subnet_id'];
    }
}