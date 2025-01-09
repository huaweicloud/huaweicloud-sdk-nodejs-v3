

export class ListVolumeProductInfoRequest {
    private 'availability_zone'?: string;
    private 'volume_type'?: string;
    public constructor() { 
    }
    public withAvailabilityZone(availabilityZone: string): ListVolumeProductInfoRequest {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withVolumeType(volumeType: string): ListVolumeProductInfoRequest {
        this['volume_type'] = volumeType;
        return this;
    }
    public set volumeType(volumeType: string  | undefined) {
        this['volume_type'] = volumeType;
    }
    public get volumeType(): string | undefined {
        return this['volume_type'];
    }
}