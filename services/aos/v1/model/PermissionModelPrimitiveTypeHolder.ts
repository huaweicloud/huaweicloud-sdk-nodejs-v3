

export class PermissionModelPrimitiveTypeHolder {
    private 'permission_model'?: PermissionModelPrimitiveTypeHolderPermissionModelEnum | string;
    public constructor() { 
    }
    public withPermissionModel(permissionModel: PermissionModelPrimitiveTypeHolderPermissionModelEnum | string): PermissionModelPrimitiveTypeHolder {
        this['permission_model'] = permissionModel;
        return this;
    }
    public set permissionModel(permissionModel: PermissionModelPrimitiveTypeHolderPermissionModelEnum | string  | undefined) {
        this['permission_model'] = permissionModel;
    }
    public get permissionModel(): PermissionModelPrimitiveTypeHolderPermissionModelEnum | string | undefined {
        return this['permission_model'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PermissionModelPrimitiveTypeHolderPermissionModelEnum {
    SELF_MANAGED = 'SELF_MANAGED'
}
