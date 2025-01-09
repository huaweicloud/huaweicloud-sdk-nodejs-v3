

export class BatchSetMaintenanceModeReq {
    private 'desktop_ids'?: Array<string>;
    private 'in_maintenance_mode'?: boolean;
    public constructor(desktopIds?: Array<string>, inMaintenanceMode?: boolean) { 
        this['desktop_ids'] = desktopIds;
        this['in_maintenance_mode'] = inMaintenanceMode;
    }
    public withDesktopIds(desktopIds: Array<string>): BatchSetMaintenanceModeReq {
        this['desktop_ids'] = desktopIds;
        return this;
    }
    public set desktopIds(desktopIds: Array<string>  | undefined) {
        this['desktop_ids'] = desktopIds;
    }
    public get desktopIds(): Array<string> | undefined {
        return this['desktop_ids'];
    }
    public withInMaintenanceMode(inMaintenanceMode: boolean): BatchSetMaintenanceModeReq {
        this['in_maintenance_mode'] = inMaintenanceMode;
        return this;
    }
    public set inMaintenanceMode(inMaintenanceMode: boolean  | undefined) {
        this['in_maintenance_mode'] = inMaintenanceMode;
    }
    public get inMaintenanceMode(): boolean | undefined {
        return this['in_maintenance_mode'];
    }
}