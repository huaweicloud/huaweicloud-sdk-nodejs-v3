import { PolicyStatement } from './PolicyStatement';


export class UpdateEndpointPolicyRequestBody {
    private 'policy_statement'?: Array<PolicyStatement>;
    private 'policy_document'?: object;
    public constructor() { 
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
    public withPolicyDocument(policyDocument: object): UpdateEndpointPolicyRequestBody {
        this['policy_document'] = policyDocument;
        return this;
    }
    public set policyDocument(policyDocument: object  | undefined) {
        this['policy_document'] = policyDocument;
    }
    public get policyDocument(): object | undefined {
        return this['policy_document'];
    }
}