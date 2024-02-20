import { FindingCondition } from './FindingCondition';
import { FindingPrincipal } from './FindingPrincipal';
import { FindingSourceType } from './FindingSourceType';
import { ResourceType } from './ResourceType';


export class PreviewFinding {
    public action?: Array<string>;
    private 'change_type'?: PreviewFindingChangeTypeEnum | string;
    public condition?: Array<FindingCondition>;
    private 'created_at'?: Date;
    private 'existing_finding_id'?: string;
    private 'existing_finding_status'?: PreviewFindingExistingFindingStatusEnum | string;
    public id?: string;
    private 'is_public'?: boolean;
    public principal?: FindingPrincipal;
    public resource?: string;
    private 'resource_owner_account'?: string;
    private 'resource_type'?: ResourceType;
    public sources?: Array<FindingSourceType>;
    public status?: PreviewFindingStatusEnum | string;
    public constructor(action?: Array<string>, changeType?: string, condition?: Array<FindingCondition>, createdAt?: Date, id?: string, isPublic?: boolean, principal?: FindingPrincipal, resource?: string, resourceOwnerAccount?: string, resourceType?: ResourceType, status?: string) { 
        this['action'] = action;
        this['change_type'] = changeType;
        this['condition'] = condition;
        this['created_at'] = createdAt;
        this['id'] = id;
        this['is_public'] = isPublic;
        this['principal'] = principal;
        this['resource'] = resource;
        this['resource_owner_account'] = resourceOwnerAccount;
        this['resource_type'] = resourceType;
        this['status'] = status;
    }
    public withAction(action: Array<string>): PreviewFinding {
        this['action'] = action;
        return this;
    }
    public withChangeType(changeType: PreviewFindingChangeTypeEnum | string): PreviewFinding {
        this['change_type'] = changeType;
        return this;
    }
    public set changeType(changeType: PreviewFindingChangeTypeEnum | string  | undefined) {
        this['change_type'] = changeType;
    }
    public get changeType(): PreviewFindingChangeTypeEnum | string | undefined {
        return this['change_type'];
    }
    public withCondition(condition: Array<FindingCondition>): PreviewFinding {
        this['condition'] = condition;
        return this;
    }
    public withCreatedAt(createdAt: Date): PreviewFinding {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withExistingFindingId(existingFindingId: string): PreviewFinding {
        this['existing_finding_id'] = existingFindingId;
        return this;
    }
    public set existingFindingId(existingFindingId: string  | undefined) {
        this['existing_finding_id'] = existingFindingId;
    }
    public get existingFindingId(): string | undefined {
        return this['existing_finding_id'];
    }
    public withExistingFindingStatus(existingFindingStatus: PreviewFindingExistingFindingStatusEnum | string): PreviewFinding {
        this['existing_finding_status'] = existingFindingStatus;
        return this;
    }
    public set existingFindingStatus(existingFindingStatus: PreviewFindingExistingFindingStatusEnum | string  | undefined) {
        this['existing_finding_status'] = existingFindingStatus;
    }
    public get existingFindingStatus(): PreviewFindingExistingFindingStatusEnum | string | undefined {
        return this['existing_finding_status'];
    }
    public withId(id: string): PreviewFinding {
        this['id'] = id;
        return this;
    }
    public withIsPublic(isPublic: boolean): PreviewFinding {
        this['is_public'] = isPublic;
        return this;
    }
    public set isPublic(isPublic: boolean  | undefined) {
        this['is_public'] = isPublic;
    }
    public get isPublic(): boolean | undefined {
        return this['is_public'];
    }
    public withPrincipal(principal: FindingPrincipal): PreviewFinding {
        this['principal'] = principal;
        return this;
    }
    public withResource(resource: string): PreviewFinding {
        this['resource'] = resource;
        return this;
    }
    public withResourceOwnerAccount(resourceOwnerAccount: string): PreviewFinding {
        this['resource_owner_account'] = resourceOwnerAccount;
        return this;
    }
    public set resourceOwnerAccount(resourceOwnerAccount: string  | undefined) {
        this['resource_owner_account'] = resourceOwnerAccount;
    }
    public get resourceOwnerAccount(): string | undefined {
        return this['resource_owner_account'];
    }
    public withResourceType(resourceType: ResourceType): PreviewFinding {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ResourceType  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ResourceType | undefined {
        return this['resource_type'];
    }
    public withSources(sources: Array<FindingSourceType>): PreviewFinding {
        this['sources'] = sources;
        return this;
    }
    public withStatus(status: PreviewFindingStatusEnum | string): PreviewFinding {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PreviewFindingChangeTypeEnum {
    UNCHANGED = 'unchanged',
    NEW = 'new',
    CHANGED = 'changed'
}
/**
    * @export
    * @enum {string}
    */
export enum PreviewFindingExistingFindingStatusEnum {
    ACTIVE = 'active',
    ARCHIVED = 'archived',
    RESOLVED = 'resolved'
}
/**
    * @export
    * @enum {string}
    */
export enum PreviewFindingStatusEnum {
    ACTIVE = 'active',
    ARCHIVED = 'archived',
    RESOLVED = 'resolved'
}
