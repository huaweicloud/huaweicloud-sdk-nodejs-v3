

export class KeystoneRemoveProjectPermissionFromGroupRequest {
    private 'group_id': string | undefined;
    private 'role_id': string | undefined;
    public constructor(groupId?: any, roleId?: any) { 
        this['group_id'] = groupId;
        this['role_id'] = roleId;
    }
    public withGroupId(groupId: string): KeystoneRemoveProjectPermissionFromGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
        return this['group_id'];
    }
    public withRoleId(roleId: string): KeystoneRemoveProjectPermissionFromGroupRequest {
        this['role_id'] = roleId;
        return this;
    }
    public set roleId(roleId: string | undefined) {
        this['role_id'] = roleId;
    }
    public get roleId() {
        return this['role_id'];
    }
}