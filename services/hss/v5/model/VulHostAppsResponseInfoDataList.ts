import { VulHostAppsResponseInfoPaths } from './VulHostAppsResponseInfoPaths';


export class VulHostAppsResponseInfoDataList {
    private 'app_name'?: string;
    public path?: string;
    public paths?: Array<VulHostAppsResponseInfoPaths>;
    public rule?: string;
    public constructor() { 
    }
    public withAppName(appName: string): VulHostAppsResponseInfoDataList {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withPath(path: string): VulHostAppsResponseInfoDataList {
        this['path'] = path;
        return this;
    }
    public withPaths(paths: Array<VulHostAppsResponseInfoPaths>): VulHostAppsResponseInfoDataList {
        this['paths'] = paths;
        return this;
    }
    public withRule(rule: string): VulHostAppsResponseInfoDataList {
        this['rule'] = rule;
        return this;
    }
}