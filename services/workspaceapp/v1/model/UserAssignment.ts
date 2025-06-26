

export class UserAssignment {
    public attach?: string;
    private 'policy_statement_id'?: string;
    public constructor(attach?: string, policyStatementId?: string) { 
        this['attach'] = attach;
        this['policy_statement_id'] = policyStatementId;
    }
    public withAttach(attach: string): UserAssignment {
        this['attach'] = attach;
        return this;
    }
    public withPolicyStatementId(policyStatementId: string): UserAssignment {
        this['policy_statement_id'] = policyStatementId;
        return this;
    }
    public set policyStatementId(policyStatementId: string  | undefined) {
        this['policy_statement_id'] = policyStatementId;
    }
    public get policyStatementId(): string | undefined {
        return this['policy_statement_id'];
    }
}