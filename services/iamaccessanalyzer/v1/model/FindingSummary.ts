import { FindingCondition } from './FindingCondition';
import { FindingPrincipal } from './FindingPrincipal';
import { FindingSourceType } from './FindingSourceType';
import { FindingType } from './FindingType';
import { ResourceType } from './ResourceType';


export class FindingSummary {
    public action?: Array<string>;
    private 'analyzed_at'?: Date;
    public condition?: Array<FindingCondition>;
    private 'created_at'?: Date;
    private 'finding_type'?: FindingType;
    public id?: string;
    private 'is_public'?: boolean;
    public principal?: FindingPrincipal;
    public resource?: string;
    private 'resource_id'?: string;
    private 'resource_owner_account'?: string;
    private 'resource_project_id'?: string;
    private 'resource_type'?: ResourceType;
    public sources?: Array<FindingSourceType>;
    public status?: FindingSummaryStatusEnum | string;
    private 'updated_at'?: Date;
    public constructor(analyzedAt?: Date, createdAt?: Date, findingType?: FindingType, id?: string, resource?: string, resourceOwnerAccount?: string, resourceType?: ResourceType, status?: string, updatedAt?: Date) { 
        this['analyzed_at'] = analyzedAt;
        this['created_at'] = createdAt;
        this['finding_type'] = findingType;
        this['id'] = id;
        this['resource'] = resource;
        this['resource_owner_account'] = resourceOwnerAccount;
        this['resource_type'] = resourceType;
        this['status'] = status;
        this['updated_at'] = updatedAt;
    }
    public withAction(action: Array<string>): FindingSummary {
        this['action'] = action;
        return this;
    }
    public withAnalyzedAt(analyzedAt: Date): FindingSummary {
        this['analyzed_at'] = analyzedAt;
        return this;
    }
    public set analyzedAt(analyzedAt: Date  | undefined) {
        this['analyzed_at'] = analyzedAt;
    }
    public get analyzedAt(): Date | undefined {
        return this['analyzed_at'];
    }
    public withCondition(condition: Array<FindingCondition>): FindingSummary {
        this['condition'] = condition;
        return this;
    }
    public withCreatedAt(createdAt: Date): FindingSummary {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withFindingType(findingType: FindingType): FindingSummary {
        this['finding_type'] = findingType;
        return this;
    }
    public set findingType(findingType: FindingType  | undefined) {
        this['finding_type'] = findingType;
    }
    public get findingType(): FindingType | undefined {
        return this['finding_type'];
    }
    public withId(id: string): FindingSummary {
        this['id'] = id;
        return this;
    }
    public withIsPublic(isPublic: boolean): FindingSummary {
        this['is_public'] = isPublic;
        return this;
    }
    public set isPublic(isPublic: boolean  | undefined) {
        this['is_public'] = isPublic;
    }
    public get isPublic(): boolean | undefined {
        return this['is_public'];
    }
    public withPrincipal(principal: FindingPrincipal): FindingSummary {
        this['principal'] = principal;
        return this;
    }
    public withResource(resource: string): FindingSummary {
        this['resource'] = resource;
        return this;
    }
    public withResourceId(resourceId: string): FindingSummary {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceOwnerAccount(resourceOwnerAccount: string): FindingSummary {
        this['resource_owner_account'] = resourceOwnerAccount;
        return this;
    }
    public set resourceOwnerAccount(resourceOwnerAccount: string  | undefined) {
        this['resource_owner_account'] = resourceOwnerAccount;
    }
    public get resourceOwnerAccount(): string | undefined {
        return this['resource_owner_account'];
    }
    public withResourceProjectId(resourceProjectId: string): FindingSummary {
        this['resource_project_id'] = resourceProjectId;
        return this;
    }
    public set resourceProjectId(resourceProjectId: string  | undefined) {
        this['resource_project_id'] = resourceProjectId;
    }
    public get resourceProjectId(): string | undefined {
        return this['resource_project_id'];
    }
    public withResourceType(resourceType: ResourceType): FindingSummary {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ResourceType  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ResourceType | undefined {
        return this['resource_type'];
    }
    public withSources(sources: Array<FindingSourceType>): FindingSummary {
        this['sources'] = sources;
        return this;
    }
    public withStatus(status: FindingSummaryStatusEnum | string): FindingSummary {
        this['status'] = status;
        return this;
    }
    public withUpdatedAt(updatedAt: Date): FindingSummary {
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

/**
    * @export
    * @enum {string}
    */
export enum FindingSummaryStatusEnum {
    ACTIVE = 'active',
    ARCHIVED = 'archived',
    RESOLVED = 'resolved'
}
