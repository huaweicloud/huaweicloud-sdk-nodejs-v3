import { PolicyTypeSummaryDto } from './PolicyTypeSummaryDto';


export class RootDto {
    public id?: string;
    public urn?: string;
    public name?: string;
    private 'policy_types'?: Array<PolicyTypeSummaryDto>;
    private 'created_at'?: Date;
    public constructor(id?: string, urn?: string, name?: string, policyTypes?: Array<PolicyTypeSummaryDto>, createdAt?: Date) { 
        this['id'] = id;
        this['urn'] = urn;
        this['name'] = name;
        this['policy_types'] = policyTypes;
        this['created_at'] = createdAt;
    }
    public withId(id: string): RootDto {
        this['id'] = id;
        return this;
    }
    public withUrn(urn: string): RootDto {
        this['urn'] = urn;
        return this;
    }
    public withName(name: string): RootDto {
        this['name'] = name;
        return this;
    }
    public withPolicyTypes(policyTypes: Array<PolicyTypeSummaryDto>): RootDto {
        this['policy_types'] = policyTypes;
        return this;
    }
    public set policyTypes(policyTypes: Array<PolicyTypeSummaryDto>  | undefined) {
        this['policy_types'] = policyTypes;
    }
    public get policyTypes(): Array<PolicyTypeSummaryDto> | undefined {
        return this['policy_types'];
    }
    public withCreatedAt(createdAt: Date): RootDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
}