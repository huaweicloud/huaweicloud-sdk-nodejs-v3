

export class ShowEcsQuotaRequest {
    private 'availability_zone'?: string;
    private 'resource_spec_code'?: string;
    public constructor(availabilityZone?: string, resourceSpecCode?: string) { 
        this['availability_zone'] = availabilityZone;
        this['resource_spec_code'] = resourceSpecCode;
    }
    public withAvailabilityZone(availabilityZone: string): ShowEcsQuotaRequest {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withResourceSpecCode(resourceSpecCode: string): ShowEcsQuotaRequest {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
}