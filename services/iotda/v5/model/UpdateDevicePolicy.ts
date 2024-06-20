import { Statement } from './Statement';


export class UpdateDevicePolicy {
    private 'policy_name'?: string;
    public statement?: Array<Statement>;
    public constructor() { 
    }
    public withPolicyName(policyName: string): UpdateDevicePolicy {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withStatement(statement: Array<Statement>): UpdateDevicePolicy {
        this['statement'] = statement;
        return this;
    }
}