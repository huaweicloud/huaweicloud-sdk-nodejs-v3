

export class Privilege {
    private 'role_id'?: string;
    private 'role_name'?: string;
    private 'role_chinese_name'?: string;
    private 'project_id'?: string;
    private 'area_service_id'?: string;
    private 'granted_object_path'?: string;
    private 'granted_object_type_id'?: string;
    public operations?: PrivilegeOperationsEnum | string;
    private 'operations_index'?: Array<number>;
    public constructor(roleId?: string, projectId?: string, areaServiceId?: string, grantedObjectPath?: string, grantedObjectTypeId?: string, operations?: string) { 
        this['role_id'] = roleId;
        this['project_id'] = projectId;
        this['area_service_id'] = areaServiceId;
        this['granted_object_path'] = grantedObjectPath;
        this['granted_object_type_id'] = grantedObjectTypeId;
        this['operations'] = operations;
    }
    public withRoleId(roleId: string): Privilege {
        this['role_id'] = roleId;
        return this;
    }
    public set roleId(roleId: string  | undefined) {
        this['role_id'] = roleId;
    }
    public get roleId(): string | undefined {
        return this['role_id'];
    }
    public withRoleName(roleName: string): Privilege {
        this['role_name'] = roleName;
        return this;
    }
    public set roleName(roleName: string  | undefined) {
        this['role_name'] = roleName;
    }
    public get roleName(): string | undefined {
        return this['role_name'];
    }
    public withRoleChineseName(roleChineseName: string): Privilege {
        this['role_chinese_name'] = roleChineseName;
        return this;
    }
    public set roleChineseName(roleChineseName: string  | undefined) {
        this['role_chinese_name'] = roleChineseName;
    }
    public get roleChineseName(): string | undefined {
        return this['role_chinese_name'];
    }
    public withProjectId(projectId: string): Privilege {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withAreaServiceId(areaServiceId: string): Privilege {
        this['area_service_id'] = areaServiceId;
        return this;
    }
    public set areaServiceId(areaServiceId: string  | undefined) {
        this['area_service_id'] = areaServiceId;
    }
    public get areaServiceId(): string | undefined {
        return this['area_service_id'];
    }
    public withGrantedObjectPath(grantedObjectPath: string): Privilege {
        this['granted_object_path'] = grantedObjectPath;
        return this;
    }
    public set grantedObjectPath(grantedObjectPath: string  | undefined) {
        this['granted_object_path'] = grantedObjectPath;
    }
    public get grantedObjectPath(): string | undefined {
        return this['granted_object_path'];
    }
    public withGrantedObjectTypeId(grantedObjectTypeId: string): Privilege {
        this['granted_object_type_id'] = grantedObjectTypeId;
        return this;
    }
    public set grantedObjectTypeId(grantedObjectTypeId: string  | undefined) {
        this['granted_object_type_id'] = grantedObjectTypeId;
    }
    public get grantedObjectTypeId(): string | undefined {
        return this['granted_object_type_id'];
    }
    public withOperations(operations: PrivilegeOperationsEnum | string): Privilege {
        this['operations'] = operations;
        return this;
    }
    public withOperationsIndex(operationsIndex: Array<number>): Privilege {
        this['operations_index'] = operationsIndex;
        return this;
    }
    public set operationsIndex(operationsIndex: Array<number>  | undefined) {
        this['operations_index'] = operationsIndex;
    }
    public get operationsIndex(): Array<number> | undefined {
        return this['operations_index'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PrivilegeOperationsEnum {
    CREATEREPOSITORY = 'createrepository',
    EDITREPOSITORY = 'editrepository',
    RESTORE = 'restore',
    DELETEREPOSITORY = 'deleterepository',
    PHYSICDELETE = 'physicdelete',
    RESTOREALL = 'restoreall',
    CLEARALL = 'clearall',
    DELETEORREDEPLOY = 'deleteorredeploy',
    DOWNLOADORVIEW = 'downloadorview',
    IMPORT = 'import',
    UPLOAD = 'upload',
    EXPORT = 'export'
}
