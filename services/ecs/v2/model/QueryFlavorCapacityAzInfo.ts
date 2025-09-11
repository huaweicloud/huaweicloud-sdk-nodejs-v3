

export class QueryFlavorCapacityAzInfo {
    private 'region_id'?: string;
    private 'availability_zone'?: string;
    public prefer?: boolean;
    public constructor() { 
    }
    public withRegionId(regionId: string): QueryFlavorCapacityAzInfo {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withAvailabilityZone(availabilityZone: string): QueryFlavorCapacityAzInfo {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withPrefer(prefer: boolean): QueryFlavorCapacityAzInfo {
        this['prefer'] = prefer;
        return this;
    }
}