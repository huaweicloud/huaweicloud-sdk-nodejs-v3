

export class VolumeTypeExtraSpecs {
    private 'availability_zone'?: string;
    private 'sold_out_availability_zone'?: string;
    public constructor() { 
    }
    public withAvailabilityZone(availabilityZone: string): VolumeTypeExtraSpecs {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withSoldOutAvailabilityZone(soldOutAvailabilityZone: string): VolumeTypeExtraSpecs {
        this['sold_out_availability_zone'] = soldOutAvailabilityZone;
        return this;
    }
    public set soldOutAvailabilityZone(soldOutAvailabilityZone: string  | undefined) {
        this['sold_out_availability_zone'] = soldOutAvailabilityZone;
    }
    public get soldOutAvailabilityZone(): string | undefined {
        return this['sold_out_availability_zone'];
    }
}