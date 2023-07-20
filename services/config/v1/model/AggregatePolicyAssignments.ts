import { Compliance } from './Compliance';


export class AggregatePolicyAssignments {
    private 'policy_assignment_id'?: string;
    private 'policy_assignment_name'?: string;
    public compliance?: Compliance;
    private 'account_id'?: string;
    public constructor() { 
    }
    public withPolicyAssignmentId(policyAssignmentId: string): AggregatePolicyAssignments {
        this['policy_assignment_id'] = policyAssignmentId;
        return this;
    }
    public set policyAssignmentId(policyAssignmentId: string  | undefined) {
        this['policy_assignment_id'] = policyAssignmentId;
    }
    public get policyAssignmentId(): string | undefined {
        return this['policy_assignment_id'];
    }
    public withPolicyAssignmentName(policyAssignmentName: string): AggregatePolicyAssignments {
        this['policy_assignment_name'] = policyAssignmentName;
        return this;
    }
    public set policyAssignmentName(policyAssignmentName: string  | undefined) {
        this['policy_assignment_name'] = policyAssignmentName;
    }
    public get policyAssignmentName(): string | undefined {
        return this['policy_assignment_name'];
    }
    public withCompliance(compliance: Compliance): AggregatePolicyAssignments {
        this['compliance'] = compliance;
        return this;
    }
    public withAccountId(accountId: string): AggregatePolicyAssignments {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
}