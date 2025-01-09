

export class ListDesktopNamePolicyRequest {
    private 'is_contain_user'?: boolean;
    private 'policy_name'?: string;
    private 'policy_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withIsContainUser(isContainUser: boolean): ListDesktopNamePolicyRequest {
        this['is_contain_user'] = isContainUser;
        return this;
    }
    public set isContainUser(isContainUser: boolean  | undefined) {
        this['is_contain_user'] = isContainUser;
    }
    public get isContainUser(): boolean | undefined {
        return this['is_contain_user'];
    }
    public withPolicyName(policyName: string): ListDesktopNamePolicyRequest {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withPolicyId(policyId: string): ListDesktopNamePolicyRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withOffset(offset: number): ListDesktopNamePolicyRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDesktopNamePolicyRequest {
        this['limit'] = limit;
        return this;
    }
}