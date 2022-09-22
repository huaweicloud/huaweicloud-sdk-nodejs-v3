

export class ListTemplatesRequest {
    public name?: string;
    private 'availability_zone'?: string | undefined;
    public region?: string;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withName(name: string): ListTemplatesRequest {
        this['name'] = name;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): ListTemplatesRequest {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone() {
        return this['availability_zone'];
    }
    public withRegion(region: string): ListTemplatesRequest {
        this['region'] = region;
        return this;
    }
    public withLimit(limit: number): ListTemplatesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListTemplatesRequest {
        this['offset'] = offset;
        return this;
    }
}