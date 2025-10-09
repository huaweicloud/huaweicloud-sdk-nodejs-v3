

export class CreatePolicyReqBody {
    private 'policy_name'?: string;
    public path?: string;
    private 'policy_document'?: string;
    public description?: string;
    public constructor(policyName?: string, policyDocument?: string) { 
        this['policy_name'] = policyName;
        this['policy_document'] = policyDocument;
    }
    public withPolicyName(policyName: string): CreatePolicyReqBody {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withPath(path: string): CreatePolicyReqBody {
        this['path'] = path;
        return this;
    }
    public withPolicyDocument(policyDocument: string): CreatePolicyReqBody {
        this['policy_document'] = policyDocument;
        return this;
    }
    public set policyDocument(policyDocument: string  | undefined) {
        this['policy_document'] = policyDocument;
    }
    public get policyDocument(): string | undefined {
        return this['policy_document'];
    }
    public withDescription(description: string): CreatePolicyReqBody {
        this['description'] = description;
        return this;
    }
}