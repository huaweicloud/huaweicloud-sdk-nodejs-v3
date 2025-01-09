

export class AgenciesPermissionInfo {
    private 'system_permission_display_names'?: Array<string>;
    private 'wanted_system_permission_display_names'?: Array<string>;
    public constructor() { 
    }
    public withSystemPermissionDisplayNames(systemPermissionDisplayNames: Array<string>): AgenciesPermissionInfo {
        this['system_permission_display_names'] = systemPermissionDisplayNames;
        return this;
    }
    public set systemPermissionDisplayNames(systemPermissionDisplayNames: Array<string>  | undefined) {
        this['system_permission_display_names'] = systemPermissionDisplayNames;
    }
    public get systemPermissionDisplayNames(): Array<string> | undefined {
        return this['system_permission_display_names'];
    }
    public withWantedSystemPermissionDisplayNames(wantedSystemPermissionDisplayNames: Array<string>): AgenciesPermissionInfo {
        this['wanted_system_permission_display_names'] = wantedSystemPermissionDisplayNames;
        return this;
    }
    public set wantedSystemPermissionDisplayNames(wantedSystemPermissionDisplayNames: Array<string>  | undefined) {
        this['wanted_system_permission_display_names'] = wantedSystemPermissionDisplayNames;
    }
    public get wantedSystemPermissionDisplayNames(): Array<string> | undefined {
        return this['wanted_system_permission_display_names'];
    }
}