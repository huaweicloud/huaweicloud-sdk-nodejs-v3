

export class ImageNonCompliantAppInfo {
    public id?: string;
    private 'app_name'?: string;
    private 'app_path'?: string;
    private 'app_version'?: string;
    private 'layer_digest'?: string;
    public constructor() { 
    }
    public withId(id: string): ImageNonCompliantAppInfo {
        this['id'] = id;
        return this;
    }
    public withAppName(appName: string): ImageNonCompliantAppInfo {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withAppPath(appPath: string): ImageNonCompliantAppInfo {
        this['app_path'] = appPath;
        return this;
    }
    public set appPath(appPath: string  | undefined) {
        this['app_path'] = appPath;
    }
    public get appPath(): string | undefined {
        return this['app_path'];
    }
    public withAppVersion(appVersion: string): ImageNonCompliantAppInfo {
        this['app_version'] = appVersion;
        return this;
    }
    public set appVersion(appVersion: string  | undefined) {
        this['app_version'] = appVersion;
    }
    public get appVersion(): string | undefined {
        return this['app_version'];
    }
    public withLayerDigest(layerDigest: string): ImageNonCompliantAppInfo {
        this['layer_digest'] = layerDigest;
        return this;
    }
    public set layerDigest(layerDigest: string  | undefined) {
        this['layer_digest'] = layerDigest;
    }
    public get layerDigest(): string | undefined {
        return this['layer_digest'];
    }
}