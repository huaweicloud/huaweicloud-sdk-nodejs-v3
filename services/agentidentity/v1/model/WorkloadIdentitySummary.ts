import { AuthorizerType } from './AuthorizerType';
import { CreatedBy } from './CreatedBy';
import { Tag } from './Tag';


export class WorkloadIdentitySummary {
    public name?: string;
    public urn?: string;
    private 'authorizer_type'?: AuthorizerType;
    private 'created_by'?: CreatedBy;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public tags?: Array<Tag>;
    public constructor(name?: string, urn?: string, authorizerType?: AuthorizerType, createdBy?: CreatedBy, createdAt?: Date, updatedAt?: Date) { 
        this['name'] = name;
        this['urn'] = urn;
        this['authorizer_type'] = authorizerType;
        this['created_by'] = createdBy;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
    }
    public withName(name: string): WorkloadIdentitySummary {
        this['name'] = name;
        return this;
    }
    public withUrn(urn: string): WorkloadIdentitySummary {
        this['urn'] = urn;
        return this;
    }
    public withAuthorizerType(authorizerType: AuthorizerType): WorkloadIdentitySummary {
        this['authorizer_type'] = authorizerType;
        return this;
    }
    public set authorizerType(authorizerType: AuthorizerType  | undefined) {
        this['authorizer_type'] = authorizerType;
    }
    public get authorizerType(): AuthorizerType | undefined {
        return this['authorizer_type'];
    }
    public withCreatedBy(createdBy: CreatedBy): WorkloadIdentitySummary {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: CreatedBy  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): CreatedBy | undefined {
        return this['created_by'];
    }
    public withCreatedAt(createdAt: Date): WorkloadIdentitySummary {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): WorkloadIdentitySummary {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withTags(tags: Array<Tag>): WorkloadIdentitySummary {
        this['tags'] = tags;
        return this;
    }
}