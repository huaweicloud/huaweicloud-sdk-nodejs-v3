

export class ListUsersOfGroupRequest {
    private 'user_name'?: string;
    private 'group_id'?: string;
    public description?: string;
    private 'active_type'?: ListUsersOfGroupRequestActiveTypeEnum | string;
    public limit?: string;
    public offset?: string;
    public constructor(groupId?: string) { 
        this['group_id'] = groupId;
    }
    public withUserName(userName: string): ListUsersOfGroupRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withGroupId(groupId: string): ListUsersOfGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withDescription(description: string): ListUsersOfGroupRequest {
        this['description'] = description;
        return this;
    }
    public withActiveType(activeType: ListUsersOfGroupRequestActiveTypeEnum | string): ListUsersOfGroupRequest {
        this['active_type'] = activeType;
        return this;
    }
    public set activeType(activeType: ListUsersOfGroupRequestActiveTypeEnum | string  | undefined) {
        this['active_type'] = activeType;
    }
    public get activeType(): ListUsersOfGroupRequestActiveTypeEnum | string | undefined {
        return this['active_type'];
    }
    public withLimit(limit: string): ListUsersOfGroupRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListUsersOfGroupRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListUsersOfGroupRequestActiveTypeEnum {
    USER_ACTIVATE = 'USER_ACTIVATE',
    ADMIN_ACTIVATE = 'ADMIN_ACTIVATE'
}
