

export class ListAccessPolicyObjectsRequest {
    private 'access_policy_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(accessPolicyId?: string) { 
        this['access_policy_id'] = accessPolicyId;
    }
    public withAccessPolicyId(accessPolicyId: string): ListAccessPolicyObjectsRequest {
        this['access_policy_id'] = accessPolicyId;
        return this;
    }
    public set accessPolicyId(accessPolicyId: string  | undefined) {
        this['access_policy_id'] = accessPolicyId;
    }
    public get accessPolicyId(): string | undefined {
        return this['access_policy_id'];
    }
    public withLimit(limit: number): ListAccessPolicyObjectsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAccessPolicyObjectsRequest {
        this['offset'] = offset;
        return this;
    }
}