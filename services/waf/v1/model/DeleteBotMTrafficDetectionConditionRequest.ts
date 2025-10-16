

export class DeleteBotMTrafficDetectionConditionRequest {
    private 'policy_id'?: string;
    private 'condition_id'?: string;
    private 'Content-Type'?: string;
    public constructor(policyId?: string, conditionId?: string, contentType?: string) { 
        this['policy_id'] = policyId;
        this['condition_id'] = conditionId;
        this['Content-Type'] = contentType;
    }
    public withPolicyId(policyId: string): DeleteBotMTrafficDetectionConditionRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withConditionId(conditionId: string): DeleteBotMTrafficDetectionConditionRequest {
        this['condition_id'] = conditionId;
        return this;
    }
    public set conditionId(conditionId: string  | undefined) {
        this['condition_id'] = conditionId;
    }
    public get conditionId(): string | undefined {
        return this['condition_id'];
    }
    public withContentType(contentType: string): DeleteBotMTrafficDetectionConditionRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
}