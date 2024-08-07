import { FindingCondition } from './FindingCondition';
import { FindingDetails } from './FindingDetails';
import { FindingPrincipal } from './FindingPrincipal';
import { FindingSourceType } from './FindingSourceType';
import { FindingType } from './FindingType';
import { ResourceType } from './ResourceType';


export class Finding {
    public action?: Array<string>;
    private 'analyzed_at'?: Date;
    public condition?: Array<FindingCondition>;
    private 'created_at'?: Date;
    private 'finding_details'?: Array<FindingDetails>;
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
    public status?: FindingStatusEnum | string;
    private 'updated_at'?: Date;
    public constructor(analyzedAt?: Date, createdAt?: Date, findingDetails?: Array<FindingDetails>, findingType?: FindingType, id?: string, resource?: string, resourceOwnerAccount?: string, resourceType?: ResourceType, status?: string, updatedAt?: Date) { 
        this['analyzed_at'] = analyzedAt;
        this['created_at'] = createdAt;
        this['finding_details'] = findingDetails;
        this['finding_type'] = findingType;
        this['id'] = id;
        this['resource'] = resource;
        this['resource_owner_account'] = resourceOwnerAccount;
        this['resource_type'] = resourceType;
        this['status'] = status;
        this['updated_at'] = updatedAt;
    }
    public withAction(action: Array<string>): Finding {
        this['action'] = action;
        return this;
    }
    public withAnalyzedAt(analyzedAt: Date): Finding {
        this['analyzed_at'] = analyzedAt;
        return this;
    }
    public set analyzedAt(analyzedAt: Date  | undefined) {
        this['analyzed_at'] = analyzedAt;
    }
    public get analyzedAt(): Date | undefined {
        return this['analyzed_at'];
    }
    public withCondition(condition: Array<FindingCondition>): Finding {
        this['condition'] = condition;
        return this;
    }
    public withCreatedAt(createdAt: Date): Finding {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withFindingDetails(findingDetails: Array<FindingDetails>): Finding {
        this['finding_details'] = findingDetails;
        return this;
    }
    public set findingDetails(findingDetails: Array<FindingDetails>  | undefined) {
        this['finding_details'] = findingDetails;
    }
    public get findingDetails(): Array<FindingDetails> | undefined {
        return this['finding_details'];
    }
    public withFindingType(findingType: FindingType): Finding {
        this['finding_type'] = findingType;
        return this;
    }
    public set findingType(findingType: FindingType  | undefined) {
        this['finding_type'] = findingType;
    }
    public get findingType(): FindingType | undefined {
        return this['finding_type'];
    }
    public withId(id: string): Finding {
        this['id'] = id;
        return this;
    }
    public withIsPublic(isPublic: boolean): Finding {
        this['is_public'] = isPublic;
        return this;
    }
    public set isPublic(isPublic: boolean  | undefined) {
        this['is_public'] = isPublic;
    }
    public get isPublic(): boolean | undefined {
        return this['is_public'];
    }
    public withPrincipal(principal: FindingPrincipal): Finding {
        this['principal'] = principal;
        return this;
    }
    public withResource(resource: string): Finding {
        this['resource'] = resource;
        return this;
    }
    public withResourceId(resourceId: string): Finding {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceOwnerAccount(resourceOwnerAccount: string): Finding {
        this['resource_owner_account'] = resourceOwnerAccount;
        return this;
    }
    public set resourceOwnerAccount(resourceOwnerAccount: string  | undefined) {
        this['resource_owner_account'] = resourceOwnerAccount;
    }
    public get resourceOwnerAccount(): string | undefined {
        return this['resource_owner_account'];
    }
    public withResourceProjectId(resourceProjectId: string): Finding {
        this['resource_project_id'] = resourceProjectId;
        return this;
    }
    public set resourceProjectId(resourceProjectId: string  | undefined) {
        this['resource_project_id'] = resourceProjectId;
    }
    public get resourceProjectId(): string | undefined {
        return this['resource_project_id'];
    }
    public withResourceType(resourceType: ResourceType): Finding {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ResourceType  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ResourceType | undefined {
        return this['resource_type'];
    }
    public withSources(sources: Array<FindingSourceType>): Finding {
        this['sources'] = sources;
        return this;
    }
    public withStatus(status: FindingStatusEnum | string): Finding {
        this['status'] = status;
        return this;
    }
    public withUpdatedAt(updatedAt: Date): Finding {
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
export enum FindingStatusEnum {
    ACTIVE = 'active',
    ARCHIVED = 'archived',
    RESOLVED = 'resolved'
}
