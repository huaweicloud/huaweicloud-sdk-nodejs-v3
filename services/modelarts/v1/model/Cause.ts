import { Conditions } from './Conditions';


export class Cause {
    private 'policy_name'?: string;
    public condition?: Array<Conditions>;
    public constructor() { 
    }
    public withPolicyName(policyName: string): Cause {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withCondition(condition: Array<Conditions>): Cause {
        this['condition'] = condition;
        return this;
    }
}