import { PermissionActions } from './PermissionActions';


export class PermissionConfiguration {
    private 'datasource_type'?: string;
    private 'permission_types'?: Array<PermissionConfigurationPermissionTypesEnum> | Array<string>;
    private 'permission_actions'?: Array<PermissionActions>;
    public constructor() { 
    }
    public withDatasourceType(datasourceType: string): PermissionConfiguration {
        this['datasource_type'] = datasourceType;
        return this;
    }
    public set datasourceType(datasourceType: string  | undefined) {
        this['datasource_type'] = datasourceType;
    }
    public get datasourceType(): string | undefined {
        return this['datasource_type'];
    }
    public withPermissionTypes(permissionTypes: Array<PermissionConfigurationPermissionTypesEnum> | Array<string>): PermissionConfiguration {
        this['permission_types'] = permissionTypes;
        return this;
    }
    public set permissionTypes(permissionTypes: Array<PermissionConfigurationPermissionTypesEnum> | Array<string>  | undefined) {
        this['permission_types'] = permissionTypes;
    }
    public get permissionTypes(): Array<PermissionConfigurationPermissionTypesEnum> | Array<string> | undefined {
        return this['permission_types'];
    }
    public withPermissionActions(permissionActions: Array<PermissionActions>): PermissionConfiguration {
        this['permission_actions'] = permissionActions;
        return this;
    }
    public set permissionActions(permissionActions: Array<PermissionActions>  | undefined) {
        this['permission_actions'] = permissionActions;
    }
    public get permissionActions(): Array<PermissionActions> | undefined {
        return this['permission_actions'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PermissionConfigurationPermissionTypesEnum {
    ALLOW = 'ALLOW'
}
