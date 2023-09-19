

export class AvailabilityZoneDetail {
    private 'primary_availability_zone'?: string;
    private 'secondary_availability_zone'?: string;
    public constructor(primaryAvailabilityZone?: string, secondaryAvailabilityZone?: string) { 
        this['primary_availability_zone'] = primaryAvailabilityZone;
        this['secondary_availability_zone'] = secondaryAvailabilityZone;
    }
    public withPrimaryAvailabilityZone(primaryAvailabilityZone: string): AvailabilityZoneDetail {
        this['primary_availability_zone'] = primaryAvailabilityZone;
        return this;
    }
    public set primaryAvailabilityZone(primaryAvailabilityZone: string  | undefined) {
        this['primary_availability_zone'] = primaryAvailabilityZone;
    }
    public get primaryAvailabilityZone(): string | undefined {
        return this['primary_availability_zone'];
    }
    public withSecondaryAvailabilityZone(secondaryAvailabilityZone: string): AvailabilityZoneDetail {
        this['secondary_availability_zone'] = secondaryAvailabilityZone;
        return this;
    }
    public set secondaryAvailabilityZone(secondaryAvailabilityZone: string  | undefined) {
        this['secondary_availability_zone'] = secondaryAvailabilityZone;
    }
    public get secondaryAvailabilityZone(): string | undefined {
        return this['secondary_availability_zone'];
    }
}