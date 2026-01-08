import { PolicyGroupForTemplate } from './PolicyGroupForTemplate';


export class CreatePolicyTemplateReq {
    private 'policy_group'?: PolicyGroupForTemplate;
    public constructor() { 
    }
    public withPolicyGroup(policyGroup: PolicyGroupForTemplate): CreatePolicyTemplateReq {
        this['policy_group'] = policyGroup;
        return this;
    }
    public set policyGroup(policyGroup: PolicyGroupForTemplate  | undefined) {
        this['policy_group'] = policyGroup;
    }
    public get policyGroup(): PolicyGroupForTemplate | undefined {
        return this['policy_group'];
    }
}