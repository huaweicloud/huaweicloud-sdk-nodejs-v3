

export class ShowAvailableResourceRequest {
    private 'availability_zone'?: Array<string>;
    private 'flavor_id'?: Array<string>;
    private 'dec_project_id'?: Array<string>;
    private 'check_limit'?: Array<string>;
    public expectation?: Array<string>;
    private 'resource_type'?: Array<string>;
    public constructor(availabilityZone?: Array<string>) { 
        this['availability_zone'] = availabilityZone;
    }
    public withAvailabilityZone(availabilityZone: Array<string>): ShowAvailableResourceRequest {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: Array<string>  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): Array<string> | undefined {
        return this['availability_zone'];
    }
    public withFlavorId(flavorId: Array<string>): ShowAvailableResourceRequest {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: Array<string>  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): Array<string> | undefined {
        return this['flavor_id'];
    }
    public withDecProjectId(decProjectId: Array<string>): ShowAvailableResourceRequest {
        this['dec_project_id'] = decProjectId;
        return this;
    }
    public set decProjectId(decProjectId: Array<string>  | undefined) {
        this['dec_project_id'] = decProjectId;
    }
    public get decProjectId(): Array<string> | undefined {
        return this['dec_project_id'];
    }
    public withCheckLimit(checkLimit: Array<string>): ShowAvailableResourceRequest {
        this['check_limit'] = checkLimit;
        return this;
    }
    public set checkLimit(checkLimit: Array<string>  | undefined) {
        this['check_limit'] = checkLimit;
    }
    public get checkLimit(): Array<string> | undefined {
        return this['check_limit'];
    }
    public withExpectation(expectation: Array<string>): ShowAvailableResourceRequest {
        this['expectation'] = expectation;
        return this;
    }
    public withResourceType(resourceType: Array<string>): ShowAvailableResourceRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: Array<string>  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): Array<string> | undefined {
        return this['resource_type'];
    }
}