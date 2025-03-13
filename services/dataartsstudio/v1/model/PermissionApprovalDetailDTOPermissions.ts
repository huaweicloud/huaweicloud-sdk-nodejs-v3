

export class PermissionApprovalDetailDTOPermissions {
    private 'column_name'?: string;
    private 'database_name'?: string;
    private 'permission_action'?: Array<PermissionApprovalDetailDTOPermissionsPermissionActionEnum> | Array<string>;
    private 'permission_set_id'?: string;
    private 'schema_name'?: string;
    private 'secrecy_level_id'?: string;
    private 'table_name'?: string;
    public constructor() { 
    }
    public withColumnName(columnName: string): PermissionApprovalDetailDTOPermissions {
        this['column_name'] = columnName;
        return this;
    }
    public set columnName(columnName: string  | undefined) {
        this['column_name'] = columnName;
    }
    public get columnName(): string | undefined {
        return this['column_name'];
    }
    public withDatabaseName(databaseName: string): PermissionApprovalDetailDTOPermissions {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withPermissionAction(permissionAction: Array<PermissionApprovalDetailDTOPermissionsPermissionActionEnum> | Array<string>): PermissionApprovalDetailDTOPermissions {
        this['permission_action'] = permissionAction;
        return this;
    }
    public set permissionAction(permissionAction: Array<PermissionApprovalDetailDTOPermissionsPermissionActionEnum> | Array<string>  | undefined) {
        this['permission_action'] = permissionAction;
    }
    public get permissionAction(): Array<PermissionApprovalDetailDTOPermissionsPermissionActionEnum> | Array<string> | undefined {
        return this['permission_action'];
    }
    public withPermissionSetId(permissionSetId: string): PermissionApprovalDetailDTOPermissions {
        this['permission_set_id'] = permissionSetId;
        return this;
    }
    public set permissionSetId(permissionSetId: string  | undefined) {
        this['permission_set_id'] = permissionSetId;
    }
    public get permissionSetId(): string | undefined {
        return this['permission_set_id'];
    }
    public withSchemaName(schemaName: string): PermissionApprovalDetailDTOPermissions {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withSecrecyLevelId(secrecyLevelId: string): PermissionApprovalDetailDTOPermissions {
        this['secrecy_level_id'] = secrecyLevelId;
        return this;
    }
    public set secrecyLevelId(secrecyLevelId: string  | undefined) {
        this['secrecy_level_id'] = secrecyLevelId;
    }
    public get secrecyLevelId(): string | undefined {
        return this['secrecy_level_id'];
    }
    public withTableName(tableName: string): PermissionApprovalDetailDTOPermissions {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PermissionApprovalDetailDTOPermissionsPermissionActionEnum {
    SELECT = 'SELECT'
}
