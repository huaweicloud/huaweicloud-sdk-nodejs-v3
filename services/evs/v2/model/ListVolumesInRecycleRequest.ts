

export class ListVolumesInRecycleRequest {
    public name?: string;
    public status?: string;
    public limit?: number;
    private 'availability_zone'?: string;
    private 'service_type'?: string;
    public offset?: number;
    public constructor() { 
    }
    public withName(name: string): ListVolumesInRecycleRequest {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): ListVolumesInRecycleRequest {
        this['status'] = status;
        return this;
    }
    public withLimit(limit: number): ListVolumesInRecycleRequest {
        this['limit'] = limit;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): ListVolumesInRecycleRequest {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withServiceType(serviceType: string): ListVolumesInRecycleRequest {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): string | undefined {
        return this['service_type'];
    }
    public withOffset(offset: number): ListVolumesInRecycleRequest {
        this['offset'] = offset;
        return this;
    }
}