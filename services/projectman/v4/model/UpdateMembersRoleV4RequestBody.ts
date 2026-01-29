

export class UpdateMembersRoleV4RequestBody {
    private 'role_id'?: number;
    private 'user_ids'?: Array<string>;
    public constructor(roleId?: number, userIds?: Array<string>) { 
        this['role_id'] = roleId;
        this['user_ids'] = userIds;
    }
    public withRoleId(roleId: number): UpdateMembersRoleV4RequestBody {
        this['role_id'] = roleId;
        return this;
    }
    public set roleId(roleId: number  | undefined) {
        this['role_id'] = roleId;
    }
    public get roleId(): number | undefined {
        return this['role_id'];
    }
    public withUserIds(userIds: Array<string>): UpdateMembersRoleV4RequestBody {
        this['user_ids'] = userIds;
        return this;
    }
    public set userIds(userIds: Array<string>  | undefined) {
        this['user_ids'] = userIds;
    }
    public get userIds(): Array<string> | undefined {
        return this['user_ids'];
    }
}