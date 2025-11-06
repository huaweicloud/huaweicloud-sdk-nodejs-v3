

export class RepoSubscriptionEventDto {
    private 'resource_type'?: RepoSubscriptionEventDtoResourceTypeEnum | string;
    public action?: RepoSubscriptionEventDtoActionEnum | string;
    public enabled?: boolean;
    private 'role_ids'?: Array<string>;
    private 'role_names'?: Array<RepoSubscriptionEventDtoRoleNamesEnum> | Array<string>;
    public constructor() { 
    }
    public withResourceType(resourceType: RepoSubscriptionEventDtoResourceTypeEnum | string): RepoSubscriptionEventDto {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: RepoSubscriptionEventDtoResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): RepoSubscriptionEventDtoResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withAction(action: RepoSubscriptionEventDtoActionEnum | string): RepoSubscriptionEventDto {
        this['action'] = action;
        return this;
    }
    public withEnabled(enabled: boolean): RepoSubscriptionEventDto {
        this['enabled'] = enabled;
        return this;
    }
    public withRoleIds(roleIds: Array<string>): RepoSubscriptionEventDto {
        this['role_ids'] = roleIds;
        return this;
    }
    public set roleIds(roleIds: Array<string>  | undefined) {
        this['role_ids'] = roleIds;
    }
    public get roleIds(): Array<string> | undefined {
        return this['role_ids'];
    }
    public withRoleNames(roleNames: Array<RepoSubscriptionEventDtoRoleNamesEnum> | Array<string>): RepoSubscriptionEventDto {
        this['role_names'] = roleNames;
        return this;
    }
    public set roleNames(roleNames: Array<RepoSubscriptionEventDtoRoleNamesEnum> | Array<string>  | undefined) {
        this['role_names'] = roleNames;
    }
    public get roleNames(): Array<RepoSubscriptionEventDtoRoleNamesEnum> | Array<string> | undefined {
        return this['role_names'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RepoSubscriptionEventDtoResourceTypeEnum {
    REPO = 'repo',
    MR = 'mr',
    MEMBER = 'member',
    NOTE = 'note'
}
/**
    * @export
    * @enum {string}
    */
export enum RepoSubscriptionEventDtoActionEnum {
    CREATE = 'create',
    OPEN = 'open',
    UPDATE = 'update',
    DELETE = 'delete',
    MERGE = 'merge',
    REVIEW = 'review',
    APPROVE = 'approve',
    CREATE_NOTE = 'create_note',
    RESOLVE_NOTE = 'resolve_note',
    CAPACITY_WARNING = 'capacity_warning',
    MENTION = 'mention'
}
/**
    * @export
    * @enum {string}
    */
export enum RepoSubscriptionEventDtoRoleNamesEnum {
    CREATOR = 'creator',
    ASSIGNEE = 'assignee',
    REVIEWER = 'reviewer',
    SCORER = 'scorer',
    APPROVER = 'approver'
}
