import { AppAuth } from './AppAuth';
import { AppAutoRecordMode } from './AppAutoRecordMode';
import { AppCallbacks } from './AppCallbacks';
import { AppState } from './AppState';


export class App {
    private 'app_name'?: string;
    private 'app_id'?: string;
    public state?: AppState;
    public scope?: AppScopeEnum | string;
    private 'tenant_name'?: string;
    public domain?: string;
    private 'create_time'?: string;
    public authentication?: AppAuth;
    public callbacks?: AppCallbacks;
    private 'auto_record_mode'?: AppAutoRecordMode;
    public constructor() { 
    }
    public withAppName(appName: string): App {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withAppId(appId: string): App {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withState(state: AppState): App {
        this['state'] = state;
        return this;
    }
    public withScope(scope: AppScopeEnum | string): App {
        this['scope'] = scope;
        return this;
    }
    public withTenantName(tenantName: string): App {
        this['tenant_name'] = tenantName;
        return this;
    }
    public set tenantName(tenantName: string  | undefined) {
        this['tenant_name'] = tenantName;
    }
    public get tenantName(): string | undefined {
        return this['tenant_name'];
    }
    public withDomain(domain: string): App {
        this['domain'] = domain;
        return this;
    }
    public withCreateTime(createTime: string): App {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withAuthentication(authentication: AppAuth): App {
        this['authentication'] = authentication;
        return this;
    }
    public withCallbacks(callbacks: AppCallbacks): App {
        this['callbacks'] = callbacks;
        return this;
    }
    public withAutoRecordMode(autoRecordMode: AppAutoRecordMode): App {
        this['auto_record_mode'] = autoRecordMode;
        return this;
    }
    public set autoRecordMode(autoRecordMode: AppAutoRecordMode  | undefined) {
        this['auto_record_mode'] = autoRecordMode;
    }
    public get autoRecordMode(): AppAutoRecordMode | undefined {
        return this['auto_record_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AppScopeEnum {
    DOMESTIC = 'DOMESTIC',
    OVERSEA = 'OVERSEA',
    GLOBAL = 'GLOBAL'
}
