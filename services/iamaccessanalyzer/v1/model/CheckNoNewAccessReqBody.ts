import { PolicyDocumentType } from './PolicyDocumentType';


export class CheckNoNewAccessReqBody {
    private 'existing_policy_document'?: string;
    private 'new_policy_document'?: string;
    private 'policy_type'?: PolicyDocumentType;
    public constructor(existingPolicyDocument?: string, newPolicyDocument?: string, policyType?: PolicyDocumentType) { 
        this['existing_policy_document'] = existingPolicyDocument;
        this['new_policy_document'] = newPolicyDocument;
        this['policy_type'] = policyType;
    }
    public withExistingPolicyDocument(existingPolicyDocument: string): CheckNoNewAccessReqBody {
        this['existing_policy_document'] = existingPolicyDocument;
        return this;
    }
    public set existingPolicyDocument(existingPolicyDocument: string  | undefined) {
        this['existing_policy_document'] = existingPolicyDocument;
    }
    public get existingPolicyDocument(): string | undefined {
        return this['existing_policy_document'];
    }
    public withNewPolicyDocument(newPolicyDocument: string): CheckNoNewAccessReqBody {
        this['new_policy_document'] = newPolicyDocument;
        return this;
    }
    public set newPolicyDocument(newPolicyDocument: string  | undefined) {
        this['new_policy_document'] = newPolicyDocument;
    }
    public get newPolicyDocument(): string | undefined {
        return this['new_policy_document'];
    }
    public withPolicyType(policyType: PolicyDocumentType): CheckNoNewAccessReqBody {
        this['policy_type'] = policyType;
        return this;
    }
    public set policyType(policyType: PolicyDocumentType  | undefined) {
        this['policy_type'] = policyType;
    }
    public get policyType(): PolicyDocumentType | undefined {
        return this['policy_type'];
    }
}