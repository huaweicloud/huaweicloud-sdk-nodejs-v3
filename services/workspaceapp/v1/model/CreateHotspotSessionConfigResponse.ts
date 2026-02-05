import { UserInfo } from './UserInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateHotspotSessionConfigResponse extends SdkResponse {
    public id?: string;
    private 'hotspot_session_migration_enable'?: boolean;
    private 'hotspot_exit_session_num'?: number;
    private 'non_migrate_users'?: Array<UserInfo>;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateHotspotSessionConfigResponse {
        this['id'] = id;
        return this;
    }
    public withHotspotSessionMigrationEnable(hotspotSessionMigrationEnable: boolean): CreateHotspotSessionConfigResponse {
        this['hotspot_session_migration_enable'] = hotspotSessionMigrationEnable;
        return this;
    }
    public set hotspotSessionMigrationEnable(hotspotSessionMigrationEnable: boolean  | undefined) {
        this['hotspot_session_migration_enable'] = hotspotSessionMigrationEnable;
    }
    public get hotspotSessionMigrationEnable(): boolean | undefined {
        return this['hotspot_session_migration_enable'];
    }
    public withHotspotExitSessionNum(hotspotExitSessionNum: number): CreateHotspotSessionConfigResponse {
        this['hotspot_exit_session_num'] = hotspotExitSessionNum;
        return this;
    }
    public set hotspotExitSessionNum(hotspotExitSessionNum: number  | undefined) {
        this['hotspot_exit_session_num'] = hotspotExitSessionNum;
    }
    public get hotspotExitSessionNum(): number | undefined {
        return this['hotspot_exit_session_num'];
    }
    public withNonMigrateUsers(nonMigrateUsers: Array<UserInfo>): CreateHotspotSessionConfigResponse {
        this['non_migrate_users'] = nonMigrateUsers;
        return this;
    }
    public set nonMigrateUsers(nonMigrateUsers: Array<UserInfo>  | undefined) {
        this['non_migrate_users'] = nonMigrateUsers;
    }
    public get nonMigrateUsers(): Array<UserInfo> | undefined {
        return this['non_migrate_users'];
    }
}