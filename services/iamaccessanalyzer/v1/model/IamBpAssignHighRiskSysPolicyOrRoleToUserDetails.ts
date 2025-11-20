

export class IamBpAssignHighRiskSysPolicyOrRoleToUserDetails {
    private 'user_id'?: string;
    private 'permission_name'?: string;
    public constructor(userId?: string, permissionName?: string) { 
        this['user_id'] = userId;
        this['permission_name'] = permissionName;
    }
    public withUserId(userId: string): IamBpAssignHighRiskSysPolicyOrRoleToUserDetails {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withPermissionName(permissionName: string): IamBpAssignHighRiskSysPolicyOrRoleToUserDetails {
        this['permission_name'] = permissionName;
        return this;
    }
    public set permissionName(permissionName: string  | undefined) {
        this['permission_name'] = permissionName;
    }
    public get permissionName(): string | undefined {
        return this['permission_name'];
    }
}