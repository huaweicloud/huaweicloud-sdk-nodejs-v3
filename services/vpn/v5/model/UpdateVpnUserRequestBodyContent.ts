

export class UpdateVpnUserRequestBodyContent {
    public description?: string;
    private 'user_group_id'?: string;
    public constructor() { 
    }
    public withDescription(description: string): UpdateVpnUserRequestBodyContent {
        this['description'] = description;
        return this;
    }
    public withUserGroupId(userGroupId: string): UpdateVpnUserRequestBodyContent {
        this['user_group_id'] = userGroupId;
        return this;
    }
    public set userGroupId(userGroupId: string  | undefined) {
        this['user_group_id'] = userGroupId;
    }
    public get userGroupId(): string | undefined {
        return this['user_group_id'];
    }
}