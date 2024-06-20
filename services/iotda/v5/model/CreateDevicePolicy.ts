import { Statement } from './Statement';


export class CreateDevicePolicy {
    private 'policy_name'?: string;
    private 'app_id'?: string;
    public statement?: Array<Statement>;
    public constructor(policyName?: string, statement?: Array<Statement>) { 
        this['policy_name'] = policyName;
        this['statement'] = statement;
    }
    public withPolicyName(policyName: string): CreateDevicePolicy {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withAppId(appId: string): CreateDevicePolicy {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withStatement(statement: Array<Statement>): CreateDevicePolicy {
        this['statement'] = statement;
        return this;
    }
}