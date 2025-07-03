

export class AppInfo {
    private 'env_name'?: string;
    private 'env_id'?: number;
    private 'app_name'?: string;
    private 'app_id'?: number;
    private 'online_count'?: number;
    private 'disable_count'?: number;
    private 'offline_count'?: number;
    public constructor() { 
    }
    public withEnvName(envName: string): AppInfo {
        this['env_name'] = envName;
        return this;
    }
    public set envName(envName: string  | undefined) {
        this['env_name'] = envName;
    }
    public get envName(): string | undefined {
        return this['env_name'];
    }
    public withEnvId(envId: number): AppInfo {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: number  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): number | undefined {
        return this['env_id'];
    }
    public withAppName(appName: string): AppInfo {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withAppId(appId: number): AppInfo {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: number  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): number | undefined {
        return this['app_id'];
    }
    public withOnlineCount(onlineCount: number): AppInfo {
        this['online_count'] = onlineCount;
        return this;
    }
    public set onlineCount(onlineCount: number  | undefined) {
        this['online_count'] = onlineCount;
    }
    public get onlineCount(): number | undefined {
        return this['online_count'];
    }
    public withDisableCount(disableCount: number): AppInfo {
        this['disable_count'] = disableCount;
        return this;
    }
    public set disableCount(disableCount: number  | undefined) {
        this['disable_count'] = disableCount;
    }
    public get disableCount(): number | undefined {
        return this['disable_count'];
    }
    public withOfflineCount(offlineCount: number): AppInfo {
        this['offline_count'] = offlineCount;
        return this;
    }
    public set offlineCount(offlineCount: number  | undefined) {
        this['offline_count'] = offlineCount;
    }
    public get offlineCount(): number | undefined {
        return this['offline_count'];
    }
}