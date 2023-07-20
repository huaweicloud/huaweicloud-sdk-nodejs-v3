

export class EnterpriseRouterAZ {
    private 'availability_zone_ids'?: Array<string>;
    public constructor(availabilityZoneIds?: Array<string>) { 
        this['availability_zone_ids'] = availabilityZoneIds;
    }
    public withAvailabilityZoneIds(availabilityZoneIds: Array<string>): EnterpriseRouterAZ {
        this['availability_zone_ids'] = availabilityZoneIds;
        return this;
    }
    public set availabilityZoneIds(availabilityZoneIds: Array<string>  | undefined) {
        this['availability_zone_ids'] = availabilityZoneIds;
    }
    public get availabilityZoneIds(): Array<string> | undefined {
        return this['availability_zone_ids'];
    }
}