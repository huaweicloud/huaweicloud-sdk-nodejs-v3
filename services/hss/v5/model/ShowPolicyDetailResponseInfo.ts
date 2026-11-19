

export class ShowPolicyDetailResponseInfo {
    public category?: string;
    public content?: string;
    public description?: string;
    public enabled?: boolean;
    public name?: string;
    private 'support_os'?: string;
    private 'policy_id'?: string;
    private 'feature_name'?: string;
    public constructor() { 
    }
    public withCategory(category: string): ShowPolicyDetailResponseInfo {
        this['category'] = category;
        return this;
    }
    public withContent(content: string): ShowPolicyDetailResponseInfo {
        this['content'] = content;
        return this;
    }
    public withDescription(description: string): ShowPolicyDetailResponseInfo {
        this['description'] = description;
        return this;
    }
    public withEnabled(enabled: boolean): ShowPolicyDetailResponseInfo {
        this['enabled'] = enabled;
        return this;
    }
    public withName(name: string): ShowPolicyDetailResponseInfo {
        this['name'] = name;
        return this;
    }
    public withSupportOs(supportOs: string): ShowPolicyDetailResponseInfo {
        this['support_os'] = supportOs;
        return this;
    }
    public set supportOs(supportOs: string  | undefined) {
        this['support_os'] = supportOs;
    }
    public get supportOs(): string | undefined {
        return this['support_os'];
    }
    public withPolicyId(policyId: string): ShowPolicyDetailResponseInfo {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withFeatureName(featureName: string): ShowPolicyDetailResponseInfo {
        this['feature_name'] = featureName;
        return this;
    }
    public set featureName(featureName: string  | undefined) {
        this['feature_name'] = featureName;
    }
    public get featureName(): string | undefined {
        return this['feature_name'];
    }
}