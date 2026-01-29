

export class PrivilegeParam {
    private 'role_id'?: string;
    private 'project_id'?: string;
    private 'area_service_id'?: string;
    private 'granted_object_path'?: string;
    private 'granted_object_type_id'?: string;
    public operations?: PrivilegeParamOperationsEnum | string;
    public constructor(roleId?: string, projectId?: string, areaServiceId?: string, grantedObjectPath?: string, grantedObjectTypeId?: string, operations?: string) { 
        this['role_id'] = roleId;
        this['project_id'] = projectId;
        this['area_service_id'] = areaServiceId;
        this['granted_object_path'] = grantedObjectPath;
        this['granted_object_type_id'] = grantedObjectTypeId;
        this['operations'] = operations;
    }
    public withRoleId(roleId: string): PrivilegeParam {
        this['role_id'] = roleId;
        return this;
    }
    public set roleId(roleId: string  | undefined) {
        this['role_id'] = roleId;
    }
    public get roleId(): string | undefined {
        return this['role_id'];
    }
    public withProjectId(projectId: string): PrivilegeParam {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withAreaServiceId(areaServiceId: string): PrivilegeParam {
        this['area_service_id'] = areaServiceId;
        return this;
    }
    public set areaServiceId(areaServiceId: string  | undefined) {
        this['area_service_id'] = areaServiceId;
    }
    public get areaServiceId(): string | undefined {
        return this['area_service_id'];
    }
    public withGrantedObjectPath(grantedObjectPath: string): PrivilegeParam {
        this['granted_object_path'] = grantedObjectPath;
        return this;
    }
    public set grantedObjectPath(grantedObjectPath: string  | undefined) {
        this['granted_object_path'] = grantedObjectPath;
    }
    public get grantedObjectPath(): string | undefined {
        return this['granted_object_path'];
    }
    public withGrantedObjectTypeId(grantedObjectTypeId: string): PrivilegeParam {
        this['granted_object_type_id'] = grantedObjectTypeId;
        return this;
    }
    public set grantedObjectTypeId(grantedObjectTypeId: string  | undefined) {
        this['granted_object_type_id'] = grantedObjectTypeId;
    }
    public get grantedObjectTypeId(): string | undefined {
        return this['granted_object_type_id'];
    }
    public withOperations(operations: PrivilegeParamOperationsEnum | string): PrivilegeParam {
        this['operations'] = operations;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PrivilegeParamOperationsEnum {
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
