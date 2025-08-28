

export class VulHostAppsResponseInfoPaths {
    private 'app_path'?: string;
    private 'app_version'?: string;
    public status?: string;
    public constructor() { 
    }
    public withAppPath(appPath: string): VulHostAppsResponseInfoPaths {
        this['app_path'] = appPath;
        return this;
    }
    public set appPath(appPath: string  | undefined) {
        this['app_path'] = appPath;
    }
    public get appPath(): string | undefined {
        return this['app_path'];
    }
    public withAppVersion(appVersion: string): VulHostAppsResponseInfoPaths {
        this['app_version'] = appVersion;
        return this;
    }
    public set appVersion(appVersion: string  | undefined) {
        this['app_version'] = appVersion;
    }
    public get appVersion(): string | undefined {
        return this['app_version'];
    }
    public withStatus(status: string): VulHostAppsResponseInfoPaths {
        this['status'] = status;
        return this;
    }
}