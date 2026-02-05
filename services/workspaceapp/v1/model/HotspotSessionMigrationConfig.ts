import { UserInfo } from './UserInfo';


export class HotspotSessionMigrationConfig {
    public id?: string;
    private 'project_id'?: string;
    private 'hotspot_session_migration_enable'?: boolean;
    private 'hotspot_exit_session_num'?: number;
    private 'non_migrate_users'?: Array<UserInfo>;
    public constructor() { 
    }
    public withId(id: string): HotspotSessionMigrationConfig {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): HotspotSessionMigrationConfig {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withHotspotSessionMigrationEnable(hotspotSessionMigrationEnable: boolean): HotspotSessionMigrationConfig {
        this['hotspot_session_migration_enable'] = hotspotSessionMigrationEnable;
        return this;
    }
    public set hotspotSessionMigrationEnable(hotspotSessionMigrationEnable: boolean  | undefined) {
        this['hotspot_session_migration_enable'] = hotspotSessionMigrationEnable;
    }
    public get hotspotSessionMigrationEnable(): boolean | undefined {
        return this['hotspot_session_migration_enable'];
    }
    public withHotspotExitSessionNum(hotspotExitSessionNum: number): HotspotSessionMigrationConfig {
        this['hotspot_exit_session_num'] = hotspotExitSessionNum;
        return this;
    }
    public set hotspotExitSessionNum(hotspotExitSessionNum: number  | undefined) {
        this['hotspot_exit_session_num'] = hotspotExitSessionNum;
    }
    public get hotspotExitSessionNum(): number | undefined {
        return this['hotspot_exit_session_num'];
    }
    public withNonMigrateUsers(nonMigrateUsers: Array<UserInfo>): HotspotSessionMigrationConfig {
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