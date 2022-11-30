import { PolicyStatement } from './PolicyStatement';


export class UpdateEndpointPolicyRequestBody {
    private 'policy_statement': Array<PolicyStatement> | undefined;
    public constructor(policyStatement?: any) { 
        this['policy_statement'] = policyStatement;
    }
    public withPolicyStatement(policyStatement: Array<PolicyStatement>): UpdateEndpointPolicyRequestBody {
        this['policy_statement'] = policyStatement;
        return this;
    }
    public set policyStatement(policyStatement: Array<PolicyStatement> | undefined) {
        this['policy_statement'] = policyStatement;
    }
    public get policyStatement() {
        return this['policy_statement'];
    }
}