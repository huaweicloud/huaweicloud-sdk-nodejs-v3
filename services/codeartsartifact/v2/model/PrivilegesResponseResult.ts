

export class PrivilegesResponseResult {
    public operations?: string;
    public operationsIndex?: Array<number>;
    private 'role_id'?: string;
    private 'role_name'?: string;
    private 'role_chinese_name'?: string;
    private 'project_id'?: string;
    private 'area_service_id'?: string;
    private 'granted_object_path'?: string;
    private 'granted_object_type_id'?: string;
    public constructor() { 
    }
    public withOperations(operations: string): PrivilegesResponseResult {
        this['operations'] = operations;
        return this;
    }
    public withOperationsIndex(operationsIndex: Array<number>): PrivilegesResponseResult {
        this['operationsIndex'] = operationsIndex;
        return this;
    }
    public withRoleId(roleId: string): PrivilegesResponseResult {
        this['role_id'] = roleId;
        return this;
    }
    public set roleId(roleId: string  | undefined) {
        this['role_id'] = roleId;
    }
    public get roleId(): string | undefined {
        return this['role_id'];
    }
    public withRoleName(roleName: string): PrivilegesResponseResult {
        this['role_name'] = roleName;
        return this;
    }
    public set roleName(roleName: string  | undefined) {
        this['role_name'] = roleName;
    }
    public get roleName(): string | undefined {
        return this['role_name'];
    }
    public withRoleChineseName(roleChineseName: string): PrivilegesResponseResult {
        this['role_chinese_name'] = roleChineseName;
        return this;
    }
    public set roleChineseName(roleChineseName: string  | undefined) {
        this['role_chinese_name'] = roleChineseName;
    }
    public get roleChineseName(): string | undefined {
        return this['role_chinese_name'];
    }
    public withProjectId(projectId: string): PrivilegesResponseResult {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withAreaServiceId(areaServiceId: string): PrivilegesResponseResult {
        this['area_service_id'] = areaServiceId;
        return this;
    }
    public set areaServiceId(areaServiceId: string  | undefined) {
        this['area_service_id'] = areaServiceId;
    }
    public get areaServiceId(): string | undefined {
        return this['area_service_id'];
    }
    public withGrantedObjectPath(grantedObjectPath: string): PrivilegesResponseResult {
        this['granted_object_path'] = grantedObjectPath;
        return this;
    }
    public set grantedObjectPath(grantedObjectPath: string  | undefined) {
        this['granted_object_path'] = grantedObjectPath;
    }
    public get grantedObjectPath(): string | undefined {
        return this['granted_object_path'];
    }
    public withGrantedObjectTypeId(grantedObjectTypeId: string): PrivilegesResponseResult {
        this['granted_object_type_id'] = grantedObjectTypeId;
        return this;
    }
    public set grantedObjectTypeId(grantedObjectTypeId: string  | undefined) {
        this['granted_object_type_id'] = grantedObjectTypeId;
    }
    public get grantedObjectTypeId(): string | undefined {
        return this['granted_object_type_id'];
    }
}