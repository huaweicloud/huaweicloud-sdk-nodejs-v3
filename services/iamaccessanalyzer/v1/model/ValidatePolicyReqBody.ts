import { PolicyType } from './PolicyType';
import { ValidatePolicyResourceType } from './ValidatePolicyResourceType';


export class ValidatePolicyReqBody {
    private 'policy_document'?: string;
    private 'policy_type'?: PolicyType;
    private 'validate_policy_resource_type'?: ValidatePolicyResourceType;
    public constructor(policyDocument?: string, policyType?: PolicyType) { 
        this['policy_document'] = policyDocument;
        this['policy_type'] = policyType;
    }
    public withPolicyDocument(policyDocument: string): ValidatePolicyReqBody {
        this['policy_document'] = policyDocument;
        return this;
    }
    public set policyDocument(policyDocument: string  | undefined) {
        this['policy_document'] = policyDocument;
    }
    public get policyDocument(): string | undefined {
        return this['policy_document'];
    }
    public withPolicyType(policyType: PolicyType): ValidatePolicyReqBody {
        this['policy_type'] = policyType;
        return this;
    }
    public set policyType(policyType: PolicyType  | undefined) {
        this['policy_type'] = policyType;
    }
    public get policyType(): PolicyType | undefined {
        return this['policy_type'];
    }
    public withValidatePolicyResourceType(validatePolicyResourceType: ValidatePolicyResourceType): ValidatePolicyReqBody {
        this['validate_policy_resource_type'] = validatePolicyResourceType;
        return this;
    }
    public set validatePolicyResourceType(validatePolicyResourceType: ValidatePolicyResourceType  | undefined) {
        this['validate_policy_resource_type'] = validatePolicyResourceType;
    }
    public get validatePolicyResourceType(): ValidatePolicyResourceType | undefined {
        return this['validate_policy_resource_type'];
    }
}