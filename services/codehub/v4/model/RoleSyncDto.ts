

export class RoleSyncDto {
    public id?: number;
    private 'role_id'?: string;
    private 'role_sync_enabled'?: boolean;
    private 'role_name'?: string;
    private 'role_type'?: string;
    private 'role_chinese_name'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public constructor() { 
    }
    public withId(id: number): RoleSyncDto {
        this['id'] = id;
        return this;
    }
    public withRoleId(roleId: string): RoleSyncDto {
        this['role_id'] = roleId;
        return this;
    }
    public set roleId(roleId: string  | undefined) {
        this['role_id'] = roleId;
    }
    public get roleId(): string | undefined {
        return this['role_id'];
    }
    public withRoleSyncEnabled(roleSyncEnabled: boolean): RoleSyncDto {
        this['role_sync_enabled'] = roleSyncEnabled;
        return this;
    }
    public set roleSyncEnabled(roleSyncEnabled: boolean  | undefined) {
        this['role_sync_enabled'] = roleSyncEnabled;
    }
    public get roleSyncEnabled(): boolean | undefined {
        return this['role_sync_enabled'];
    }
    public withRoleName(roleName: string): RoleSyncDto {
        this['role_name'] = roleName;
        return this;
    }
    public set roleName(roleName: string  | undefined) {
        this['role_name'] = roleName;
    }
    public get roleName(): string | undefined {
        return this['role_name'];
    }
    public withRoleType(roleType: string): RoleSyncDto {
        this['role_type'] = roleType;
        return this;
    }
    public set roleType(roleType: string  | undefined) {
        this['role_type'] = roleType;
    }
    public get roleType(): string | undefined {
        return this['role_type'];
    }
    public withRoleChineseName(roleChineseName: string): RoleSyncDto {
        this['role_chinese_name'] = roleChineseName;
        return this;
    }
    public set roleChineseName(roleChineseName: string  | undefined) {
        this['role_chinese_name'] = roleChineseName;
    }
    public get roleChineseName(): string | undefined {
        return this['role_chinese_name'];
    }
    public withCreatedAt(createdAt: string): RoleSyncDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): RoleSyncDto {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
}