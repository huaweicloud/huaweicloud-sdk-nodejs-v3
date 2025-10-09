

export class CreatePolicyVersionReqBody {
    private 'policy_document'?: string;
    private 'set_as_default'?: boolean;
    public constructor(policyDocument?: string) { 
        this['policy_document'] = policyDocument;
    }
    public withPolicyDocument(policyDocument: string): CreatePolicyVersionReqBody {
        this['policy_document'] = policyDocument;
        return this;
    }
    public set policyDocument(policyDocument: string  | undefined) {
        this['policy_document'] = policyDocument;
    }
    public get policyDocument(): string | undefined {
        return this['policy_document'];
    }
    public withSetAsDefault(setAsDefault: boolean): CreatePolicyVersionReqBody {
        this['set_as_default'] = setAsDefault;
        return this;
    }
    public set setAsDefault(setAsDefault: boolean  | undefined) {
        this['set_as_default'] = setAsDefault;
    }
    public get setAsDefault(): boolean | undefined {
        return this['set_as_default'];
    }
}