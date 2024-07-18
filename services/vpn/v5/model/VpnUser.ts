

export class VpnUser {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'user_group_id'?: string;
    private 'user_group_name'?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public constructor() { 
    }
    public withId(id: string): VpnUser {
        this['id'] = id;
        return this;
    }
    public withName(name: string): VpnUser {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): VpnUser {
        this['description'] = description;
        return this;
    }
    public withUserGroupId(userGroupId: string): VpnUser {
        this['user_group_id'] = userGroupId;
        return this;
    }
    public set userGroupId(userGroupId: string  | undefined) {
        this['user_group_id'] = userGroupId;
    }
    public get userGroupId(): string | undefined {
        return this['user_group_id'];
    }
    public withUserGroupName(userGroupName: string): VpnUser {
        this['user_group_name'] = userGroupName;
        return this;
    }
    public set userGroupName(userGroupName: string  | undefined) {
        this['user_group_name'] = userGroupName;
    }
    public get userGroupName(): string | undefined {
        return this['user_group_name'];
    }
    public withCreatedAt(createdAt: Date): VpnUser {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): VpnUser {
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