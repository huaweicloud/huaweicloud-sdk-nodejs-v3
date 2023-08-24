

export class HostVulInfoAppList {
    private 'app_name'?: string;
    private 'app_version'?: string;
    private 'upgrade_version'?: string;
    private 'app_path'?: string;
    public constructor() { 
    }
    public withAppName(appName: string): HostVulInfoAppList {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withAppVersion(appVersion: string): HostVulInfoAppList {
        this['app_version'] = appVersion;
        return this;
    }
    public set appVersion(appVersion: string  | undefined) {
        this['app_version'] = appVersion;
    }
    public get appVersion(): string | undefined {
        return this['app_version'];
    }
    public withUpgradeVersion(upgradeVersion: string): HostVulInfoAppList {
        this['upgrade_version'] = upgradeVersion;
        return this;
    }
    public set upgradeVersion(upgradeVersion: string  | undefined) {
        this['upgrade_version'] = upgradeVersion;
    }
    public get upgradeVersion(): string | undefined {
        return this['upgrade_version'];
    }
    public withAppPath(appPath: string): HostVulInfoAppList {
        this['app_path'] = appPath;
        return this;
    }
    public set appPath(appPath: string  | undefined) {
        this['app_path'] = appPath;
    }
    public get appPath(): string | undefined {
        return this['app_path'];
    }
}