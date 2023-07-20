import { PolicyStatement } from './PolicyStatement';


export class UpdateEndpointPolicyRequestBody {
    private 'policy_statement'?: Array<PolicyStatement>;
    public constructor(policyStatement?: Array<PolicyStatement>) { 
        this['policy_statement'] = policyStatement;
    }
    public withPolicyStatement(policyStatement: Array<PolicyStatement>): UpdateEndpointPolicyRequestBody {
        this['policy_statement'] = policyStatement;
        return this;
    }
    public set policyStatement(policyStatement: Array<PolicyStatement>  | undefined) {
        this['policy_statement'] = policyStatement;
    }
    public get policyStatement(): Array<PolicyStatement> | undefined {
        return this['policy_statement'];
    }
}