

export class InstanceDetailAzInfo {
    public region?: string;
    public zone?: string;
    private 'availability_zone_display'?: string;
    private 'slave_zone'?: string;
    private 'slave_zone_display'?: string;
    public constructor(region?: string, zone?: string, availabilityZoneDisplay?: string) { 
        this['region'] = region;
        this['zone'] = zone;
        this['availability_zone_display'] = availabilityZoneDisplay;
    }
    public withRegion(region: string): InstanceDetailAzInfo {
        this['region'] = region;
        return this;
    }
    public withZone(zone: string): InstanceDetailAzInfo {
        this['zone'] = zone;
        return this;
    }
    public withAvailabilityZoneDisplay(availabilityZoneDisplay: string): InstanceDetailAzInfo {
        this['availability_zone_display'] = availabilityZoneDisplay;
        return this;
    }
    public set availabilityZoneDisplay(availabilityZoneDisplay: string  | undefined) {
        this['availability_zone_display'] = availabilityZoneDisplay;
    }
    public get availabilityZoneDisplay(): string | undefined {
        return this['availability_zone_display'];
    }
    public withSlaveZone(slaveZone: string): InstanceDetailAzInfo {
        this['slave_zone'] = slaveZone;
        return this;
    }
    public set slaveZone(slaveZone: string  | undefined) {
        this['slave_zone'] = slaveZone;
    }
    public get slaveZone(): string | undefined {
        return this['slave_zone'];
    }
    public withSlaveZoneDisplay(slaveZoneDisplay: string): InstanceDetailAzInfo {
        this['slave_zone_display'] = slaveZoneDisplay;
        return this;
    }
    public set slaveZoneDisplay(slaveZoneDisplay: string  | undefined) {
        this['slave_zone_display'] = slaveZoneDisplay;
    }
    public get slaveZoneDisplay(): string | undefined {
        return this['slave_zone_display'];
    }
}