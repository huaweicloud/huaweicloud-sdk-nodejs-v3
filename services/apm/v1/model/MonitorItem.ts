

export class MonitorItem {
    public id?: number;
    private 'env_id'?: number;
    private 'collector_id'?: number;
    private 'collector_name'?: string;
    private 'display_name'?: string;
    private 'collect_interval'?: number;
    public disabled?: boolean;
    private 'status_change_user_id'?: string;
    private 'status_change_user_name'?: string;
    private 'status_change_time'?: string;
    private 'config_change_user_id'?: string;
    private 'config_change_user_name'?: string;
    private 'config_change_time'?: string;
    public constructor() { 
    }
    public withId(id: number): MonitorItem {
        this['id'] = id;
        return this;
    }
    public withEnvId(envId: number): MonitorItem {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: number  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): number | undefined {
        return this['env_id'];
    }
    public withCollectorId(collectorId: number): MonitorItem {
        this['collector_id'] = collectorId;
        return this;
    }
    public set collectorId(collectorId: number  | undefined) {
        this['collector_id'] = collectorId;
    }
    public get collectorId(): number | undefined {
        return this['collector_id'];
    }
    public withCollectorName(collectorName: string): MonitorItem {
        this['collector_name'] = collectorName;
        return this;
    }
    public set collectorName(collectorName: string  | undefined) {
        this['collector_name'] = collectorName;
    }
    public get collectorName(): string | undefined {
        return this['collector_name'];
    }
    public withDisplayName(displayName: string): MonitorItem {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withCollectInterval(collectInterval: number): MonitorItem {
        this['collect_interval'] = collectInterval;
        return this;
    }
    public set collectInterval(collectInterval: number  | undefined) {
        this['collect_interval'] = collectInterval;
    }
    public get collectInterval(): number | undefined {
        return this['collect_interval'];
    }
    public withDisabled(disabled: boolean): MonitorItem {
        this['disabled'] = disabled;
        return this;
    }
    public withStatusChangeUserId(statusChangeUserId: string): MonitorItem {
        this['status_change_user_id'] = statusChangeUserId;
        return this;
    }
    public set statusChangeUserId(statusChangeUserId: string  | undefined) {
        this['status_change_user_id'] = statusChangeUserId;
    }
    public get statusChangeUserId(): string | undefined {
        return this['status_change_user_id'];
    }
    public withStatusChangeUserName(statusChangeUserName: string): MonitorItem {
        this['status_change_user_name'] = statusChangeUserName;
        return this;
    }
    public set statusChangeUserName(statusChangeUserName: string  | undefined) {
        this['status_change_user_name'] = statusChangeUserName;
    }
    public get statusChangeUserName(): string | undefined {
        return this['status_change_user_name'];
    }
    public withStatusChangeTime(statusChangeTime: string): MonitorItem {
        this['status_change_time'] = statusChangeTime;
        return this;
    }
    public set statusChangeTime(statusChangeTime: string  | undefined) {
        this['status_change_time'] = statusChangeTime;
    }
    public get statusChangeTime(): string | undefined {
        return this['status_change_time'];
    }
    public withConfigChangeUserId(configChangeUserId: string): MonitorItem {
        this['config_change_user_id'] = configChangeUserId;
        return this;
    }
    public set configChangeUserId(configChangeUserId: string  | undefined) {
        this['config_change_user_id'] = configChangeUserId;
    }
    public get configChangeUserId(): string | undefined {
        return this['config_change_user_id'];
    }
    public withConfigChangeUserName(configChangeUserName: string): MonitorItem {
        this['config_change_user_name'] = configChangeUserName;
        return this;
    }
    public set configChangeUserName(configChangeUserName: string  | undefined) {
        this['config_change_user_name'] = configChangeUserName;
    }
    public get configChangeUserName(): string | undefined {
        return this['config_change_user_name'];
    }
    public withConfigChangeTime(configChangeTime: string): MonitorItem {
        this['config_change_time'] = configChangeTime;
        return this;
    }
    public set configChangeTime(configChangeTime: string  | undefined) {
        this['config_change_time'] = configChangeTime;
    }
    public get configChangeTime(): string | undefined {
        return this['config_change_time'];
    }
}