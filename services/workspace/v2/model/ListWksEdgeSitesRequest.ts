

export class ListWksEdgeSitesRequest {
    public name?: string;
    private 'availability_zone_id'?: string;
    public status?: string;
    public constructor() { 
    }
    public withName(name: string): ListWksEdgeSitesRequest {
        this['name'] = name;
        return this;
    }
    public withAvailabilityZoneId(availabilityZoneId: string): ListWksEdgeSitesRequest {
        this['availability_zone_id'] = availabilityZoneId;
        return this;
    }
    public set availabilityZoneId(availabilityZoneId: string  | undefined) {
        this['availability_zone_id'] = availabilityZoneId;
    }
    public get availabilityZoneId(): string | undefined {
        return this['availability_zone_id'];
    }
    public withStatus(status: string): ListWksEdgeSitesRequest {
        this['status'] = status;
        return this;
    }
}