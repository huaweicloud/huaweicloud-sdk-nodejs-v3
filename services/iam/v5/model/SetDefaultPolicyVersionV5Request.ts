

export class SetDefaultPolicyVersionV5Request {
    private 'policy_id'?: string;
    private 'version_id'?: string;
    public constructor(policyId?: string, versionId?: string) { 
        this['policy_id'] = policyId;
        this['version_id'] = versionId;
    }
    public withPolicyId(policyId: string): SetDefaultPolicyVersionV5Request {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withVersionId(versionId: string): SetDefaultPolicyVersionV5Request {
        this['version_id'] = versionId;
        return this;
    }
    public set versionId(versionId: string  | undefined) {
        this['version_id'] = versionId;
    }
    public get versionId(): string | undefined {
        return this['version_id'];
    }
}