

export class VulAffectImageAppPathResponseInfo {
    public status?: string;
    private 'app_version'?: string;
    private 'app_path'?: string;
    public constructor() { 
    }
    public withStatus(status: string): VulAffectImageAppPathResponseInfo {
        this['status'] = status;
        return this;
    }
    public withAppVersion(appVersion: string): VulAffectImageAppPathResponseInfo {
        this['app_version'] = appVersion;
        return this;
    }
    public set appVersion(appVersion: string  | undefined) {
        this['app_version'] = appVersion;
    }
    public get appVersion(): string | undefined {
        return this['app_version'];
    }
    public withAppPath(appPath: string): VulAffectImageAppPathResponseInfo {
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