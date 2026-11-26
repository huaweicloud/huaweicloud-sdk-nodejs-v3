import { PolicyStatus } from './PolicyStatus';


export class PolicySummary {
    private 'policy_id'?: string;
    public name?: string;
    public description?: string;
    public urn?: string;
    public status?: PolicyStatus;
    private 'status_reasons'?: Array<string>;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    private 'policy_engine_id'?: string;
    public constructor(policyId?: string, name?: string, urn?: string, status?: PolicyStatus, createdAt?: Date, updatedAt?: Date, policyEngineId?: string) { 
        this['policy_id'] = policyId;
        this['name'] = name;
        this['urn'] = urn;
        this['status'] = status;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['policy_engine_id'] = policyEngineId;
    }
    public withPolicyId(policyId: string): PolicySummary {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withName(name: string): PolicySummary {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): PolicySummary {
        this['description'] = description;
        return this;
    }
    public withUrn(urn: string): PolicySummary {
        this['urn'] = urn;
        return this;
    }
    public withStatus(status: PolicyStatus): PolicySummary {
        this['status'] = status;
        return this;
    }
    public withStatusReasons(statusReasons: Array<string>): PolicySummary {
        this['status_reasons'] = statusReasons;
        return this;
    }
    public set statusReasons(statusReasons: Array<string>  | undefined) {
        this['status_reasons'] = statusReasons;
    }
    public get statusReasons(): Array<string> | undefined {
        return this['status_reasons'];
    }
    public withCreatedAt(createdAt: Date): PolicySummary {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): PolicySummary {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withPolicyEngineId(policyEngineId: string): PolicySummary {
        this['policy_engine_id'] = policyEngineId;
        return this;
    }
    public set policyEngineId(policyEngineId: string  | undefined) {
        this['policy_engine_id'] = policyEngineId;
    }
    public get policyEngineId(): string | undefined {
        return this['policy_engine_id'];
    }
}