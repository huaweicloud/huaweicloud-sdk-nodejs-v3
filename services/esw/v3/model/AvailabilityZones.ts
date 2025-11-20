

export class AvailabilityZones {
    public primary?: string;
    public standby?: string;
    public constructor(primary?: string, standby?: string) { 
        this['primary'] = primary;
        this['standby'] = standby;
    }
    public withPrimary(primary: string): AvailabilityZones {
        this['primary'] = primary;
        return this;
    }
    public withStandby(standby: string): AvailabilityZones {
        this['standby'] = standby;
        return this;
    }
}