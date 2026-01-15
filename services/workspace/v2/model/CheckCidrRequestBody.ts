

export class CheckCidrRequestBody {
    private 'tenant_cidrs'?: Array<string>;
    private 'availability_zone'?: string;
    public constructor() { 
    }
    public withTenantCidrs(tenantCidrs: Array<string>): CheckCidrRequestBody {
        this['tenant_cidrs'] = tenantCidrs;
        return this;
    }
    public set tenantCidrs(tenantCidrs: Array<string>  | undefined) {
        this['tenant_cidrs'] = tenantCidrs;
    }
    public get tenantCidrs(): Array<string> | undefined {
        return this['tenant_cidrs'];
    }
    public withAvailabilityZone(availabilityZone: string): CheckCidrRequestBody {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
}