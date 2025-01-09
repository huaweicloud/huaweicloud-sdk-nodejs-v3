

export class ShowAzDetailsRequest {
    private 'availability_zone_id'?: string;
    public constructor(availabilityZoneId?: string) { 
        this['availability_zone_id'] = availabilityZoneId;
    }
    public withAvailabilityZoneId(availabilityZoneId: string): ShowAzDetailsRequest {
        this['availability_zone_id'] = availabilityZoneId;
        return this;
    }
    public set availabilityZoneId(availabilityZoneId: string  | undefined) {
        this['availability_zone_id'] = availabilityZoneId;
    }
    public get availabilityZoneId(): string | undefined {
        return this['availability_zone_id'];
    }
}