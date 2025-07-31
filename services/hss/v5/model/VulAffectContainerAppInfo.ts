import { VulAffectContainerAppPath } from './VulAffectContainerAppPath';


export class VulAffectContainerAppInfo {
    private 'app_name'?: string;
    public paths?: Array<VulAffectContainerAppPath>;
    public rule?: string;
    public constructor() { 
    }
    public withAppName(appName: string): VulAffectContainerAppInfo {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withPaths(paths: Array<VulAffectContainerAppPath>): VulAffectContainerAppInfo {
        this['paths'] = paths;
        return this;
    }
    public withRule(rule: string): VulAffectContainerAppInfo {
        this['rule'] = rule;
        return this;
    }
}