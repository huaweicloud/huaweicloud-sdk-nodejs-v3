

export class AiAppCreateRequest {
    public name?: string;
    public description?: string;
    private 'policy_id'?: string;
    private 'api_sign'?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): AiAppCreateRequest {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): AiAppCreateRequest {
        this['description'] = description;
        return this;
    }
    public withPolicyId(policyId: string): AiAppCreateRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withApiSign(apiSign: string): AiAppCreateRequest {
        this['api_sign'] = apiSign;
        return this;
    }
    public set apiSign(apiSign: string  | undefined) {
        this['api_sign'] = apiSign;
    }
    public get apiSign(): string | undefined {
        return this['api_sign'];
    }
}