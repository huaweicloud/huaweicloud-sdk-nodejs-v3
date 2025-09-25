import { VulAffectImageAppPathResponseInfo } from './VulAffectImageAppPathResponseInfo';


export class VulAffectImageAppsResponseInfo {
    private 'app_name'?: string;
    public paths?: Array<VulAffectImageAppPathResponseInfo>;
    public rule?: string;
    public constructor() { 
    }
    public withAppName(appName: string): VulAffectImageAppsResponseInfo {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withPaths(paths: Array<VulAffectImageAppPathResponseInfo>): VulAffectImageAppsResponseInfo {
        this['paths'] = paths;
        return this;
    }
    public withRule(rule: string): VulAffectImageAppsResponseInfo {
        this['rule'] = rule;
        return this;
    }
}