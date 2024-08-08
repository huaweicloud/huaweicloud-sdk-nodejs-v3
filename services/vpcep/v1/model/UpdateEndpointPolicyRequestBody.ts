import { PolicyStatement } from './PolicyStatement';


export class UpdateEndpointPolicyRequestBody {
    private 'policy_statement'?: Array<PolicyStatement>;
    private 'policy_document'?: string;
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
    public withPolicyDocument(policyDocument: string): UpdateEndpointPolicyRequestBody {
        this['policy_document'] = policyDocument;
        return this;
    }
    public set policyDocument(policyDocument: string  | undefined) {
        this['policy_document'] = policyDocument;
    }
    public get policyDocument(): string | undefined {
        return this['policy_document'];
    }
}