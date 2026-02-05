
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateHotspotSessionConfigResponse extends SdkResponse {
    public id?: string;
    private 'hotspot_session_migration_enable'?: boolean;
    private 'hotspot_exit_session_num'?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateHotspotSessionConfigResponse {
        this['id'] = id;
        return this;
    }
    public withHotspotSessionMigrationEnable(hotspotSessionMigrationEnable: boolean): UpdateHotspotSessionConfigResponse {
        this['hotspot_session_migration_enable'] = hotspotSessionMigrationEnable;
        return this;
    }
    public set hotspotSessionMigrationEnable(hotspotSessionMigrationEnable: boolean  | undefined) {
        this['hotspot_session_migration_enable'] = hotspotSessionMigrationEnable;
    }
    public get hotspotSessionMigrationEnable(): boolean | undefined {
        return this['hotspot_session_migration_enable'];
    }
    public withHotspotExitSessionNum(hotspotExitSessionNum: number): UpdateHotspotSessionConfigResponse {
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