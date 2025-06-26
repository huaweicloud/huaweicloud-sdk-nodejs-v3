import { PolicyTemplate } from './PolicyTemplate';


export class UpdatePolicyTemplateReq {
    private 'policy_group'?: PolicyTemplate;
    public constructor(policyGroup?: PolicyTemplate) { 
        this['policy_group'] = policyGroup;
    }
    public withPolicyGroup(policyGroup: PolicyTemplate): UpdatePolicyTemplateReq {
        this['policy_group'] = policyGroup;
        return this;
    }
    public set policyGroup(policyGroup: PolicyTemplate  | undefined) {
        this['policy_group'] = policyGroup;
    }
    public get policyGroup(): PolicyTemplate | undefined {
        return this['policy_group'];
    }
}