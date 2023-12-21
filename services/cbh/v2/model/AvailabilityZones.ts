

export class AvailabilityZones {
    private 'region_id'?: string;
    public id?: string;
    private 'display_name'?: string;
    public status?: string;
    public type?: string;
    public constructor(regionId?: string, id?: string, displayName?: string, status?: string) { 
        this['region_id'] = regionId;
        this['id'] = id;
        this['display_name'] = displayName;
        this['status'] = status;
    }
    public withRegionId(regionId: string): AvailabilityZones {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withId(id: string): AvailabilityZones {
        this['id'] = id;
        return this;
    }
    public withDisplayName(displayName: string): AvailabilityZones {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withStatus(status: string): AvailabilityZones {
        this['status'] = status;
        return this;
    }
    public withType(type: string): AvailabilityZones {
        this['type'] = type;
        return this;
    }
}