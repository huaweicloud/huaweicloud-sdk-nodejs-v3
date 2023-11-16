

export class ListProtectedIpRequest {
    public offset?: number;
    public limit?: number;
    private 'package_id'?: string;
    private 'policy_id'?: string;
    public ip?: string;
    public tag?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListProtectedIpRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListProtectedIpRequest {
        this['limit'] = limit;
        return this;
    }
    public withPackageId(packageId: string): ListProtectedIpRequest {
        this['package_id'] = packageId;
        return this;
    }
    public set packageId(packageId: string  | undefined) {
        this['package_id'] = packageId;
    }
    public get packageId(): string | undefined {
        return this['package_id'];
    }
    public withPolicyId(policyId: string): ListProtectedIpRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withIp(ip: string): ListProtectedIpRequest {
        this['ip'] = ip;
        return this;
    }
    public withTag(tag: string): ListProtectedIpRequest {
        this['tag'] = tag;
        return this;
    }
}