

export class PermissionSetCreateDTO {
    public name?: string;
    private 'parent_id'?: string;
    public description?: string;
    public type?: PermissionSetCreateDTOTypeEnum | string;
    private 'managed_cluster_id'?: string;
    private 'managed_cluster_name'?: string;
    private 'managed_role_name'?: string;
    private 'manager_id'?: string;
    private 'manager_name'?: string;
    private 'manager_type'?: PermissionSetCreateDTOManagerTypeEnum | string;
    public constructor() { 
    }
    public withName(name: string): PermissionSetCreateDTO {
        this['name'] = name;
        return this;
    }
    public withParentId(parentId: string): PermissionSetCreateDTO {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withDescription(description: string): PermissionSetCreateDTO {
        this['description'] = description;
        return this;
    }
    public withType(type: PermissionSetCreateDTOTypeEnum | string): PermissionSetCreateDTO {
        this['type'] = type;
        return this;
    }
    public withManagedClusterId(managedClusterId: string): PermissionSetCreateDTO {
        this['managed_cluster_id'] = managedClusterId;
        return this;
    }
    public set managedClusterId(managedClusterId: string  | undefined) {
        this['managed_cluster_id'] = managedClusterId;
    }
    public get managedClusterId(): string | undefined {
        return this['managed_cluster_id'];
    }
    public withManagedClusterName(managedClusterName: string): PermissionSetCreateDTO {
        this['managed_cluster_name'] = managedClusterName;
        return this;
    }
    public set managedClusterName(managedClusterName: string  | undefined) {
        this['managed_cluster_name'] = managedClusterName;
    }
    public get managedClusterName(): string | undefined {
        return this['managed_cluster_name'];
    }
    public withManagedRoleName(managedRoleName: string): PermissionSetCreateDTO {
        this['managed_role_name'] = managedRoleName;
        return this;
    }
    public set managedRoleName(managedRoleName: string  | undefined) {
        this['managed_role_name'] = managedRoleName;
    }
    public get managedRoleName(): string | undefined {
        return this['managed_role_name'];
    }
    public withManagerId(managerId: string): PermissionSetCreateDTO {
        this['manager_id'] = managerId;
        return this;
    }
    public set managerId(managerId: string  | undefined) {
        this['manager_id'] = managerId;
    }
    public get managerId(): string | undefined {
        return this['manager_id'];
    }
    public withManagerName(managerName: string): PermissionSetCreateDTO {
        this['manager_name'] = managerName;
        return this;
    }
    public set managerName(managerName: string  | undefined) {
        this['manager_name'] = managerName;
    }
    public get managerName(): string | undefined {
        return this['manager_name'];
    }
    public withManagerType(managerType: PermissionSetCreateDTOManagerTypeEnum | string): PermissionSetCreateDTO {
        this['manager_type'] = managerType;
        return this;
    }
    public set managerType(managerType: PermissionSetCreateDTOManagerTypeEnum | string  | undefined) {
        this['manager_type'] = managerType;
    }
    public get managerType(): PermissionSetCreateDTOManagerTypeEnum | string | undefined {
        return this['manager_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PermissionSetCreateDTOTypeEnum {
    COMMON = 'COMMON',
    MRS_MANAGED = 'MRS_MANAGED'
}
/**
    * @export
    * @enum {string}
    */
export enum PermissionSetCreateDTOManagerTypeEnum {
    USER = 'USER',
    USER_GROUP = 'USER_GROUP'
}
