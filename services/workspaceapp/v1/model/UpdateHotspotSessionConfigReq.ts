

export class UpdateHotspotSessionConfigReq {
    private 'hotspot_session_migration_enable'?: boolean;
    private 'hotspot_exit_session_num'?: number;
    public constructor(hotspotSessionMigrationEnable?: boolean, hotspotExitSessionNum?: number) { 
        this['hotspot_session_migration_enable'] = hotspotSessionMigrationEnable;
        this['hotspot_exit_session_num'] = hotspotExitSessionNum;
    }
    public withHotspotSessionMigrationEnable(hotspotSessionMigrationEnable: boolean): UpdateHotspotSessionConfigReq {
        this['hotspot_session_migration_enable'] = hotspotSessionMigrationEnable;
        return this;
    }
    public set hotspotSessionMigrationEnable(hotspotSessionMigrationEnable: boolean  | undefined) {
        this['hotspot_session_migration_enable'] = hotspotSessionMigrationEnable;
    }
    public get hotspotSessionMigrationEnable(): boolean | undefined {
        return this['hotspot_session_migration_enable'];
    }
    public withHotspotExitSessionNum(hotspotExitSessionNum: number): UpdateHotspotSessionConfigReq {
        this['hotspot_exit_session_num'] = hotspotExitSessionNum;
        return this;
    }
    public set hotspotExitSessionNum(hotspotExitSessionNum: number  | undefined) {
        this['hotspot_exit_session_num'] = hotspotExitSessionNum;
    }
    public get hotspotExitSessionNum(): number | undefined {
        return this['hotspot_exit_session_num'];
    }
}