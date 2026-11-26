import { PolicyEngineType } from './PolicyEngineType';
import { Tag } from './Tag';


export class PolicyEngine {
    private 'policy_engine_id'?: string;
    public name?: string;
    public type?: PolicyEngineType;
    public description?: string;
    public urn?: string;
    public tags?: Array<Tag>;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public constructor(policyEngineId?: string, name?: string, type?: PolicyEngineType, urn?: string, createdAt?: Date, updatedAt?: Date) { 
        this['policy_engine_id'] = policyEngineId;
        this['name'] = name;
        this['type'] = type;
        this['urn'] = urn;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
    }
    public withPolicyEngineId(policyEngineId: string): PolicyEngine {
        this['policy_engine_id'] = policyEngineId;
        return this;
    }
    public set policyEngineId(policyEngineId: string  | undefined) {
        this['policy_engine_id'] = policyEngineId;
    }
    public get policyEngineId(): string | undefined {
        return this['policy_engine_id'];
    }
    public withName(name: string): PolicyEngine {
        this['name'] = name;
        return this;
    }
    public withType(type: PolicyEngineType): PolicyEngine {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): PolicyEngine {
        this['description'] = description;
        return this;
    }
    public withUrn(urn: string): PolicyEngine {
        this['urn'] = urn;
        return this;
    }
    public withTags(tags: Array<Tag>): PolicyEngine {
        this['tags'] = tags;
        return this;
    }
    public withCreatedAt(createdAt: Date): PolicyEngine {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): PolicyEngine {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
}