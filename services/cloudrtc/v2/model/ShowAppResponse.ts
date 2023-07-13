import { AppAuth } from './AppAuth';
import { AppAutoRecordMode } from './AppAutoRecordMode';
import { AppCallbacks } from './AppCallbacks';
import { AppState } from './AppState';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAppResponse extends SdkResponse {
    private 'app_name'?: string | undefined;
    private 'app_id'?: string | undefined;
    public state?: AppState;
    public scope?: ShowAppResponseScopeEnum;
    private 'tenant_name'?: string | undefined;
    public domain?: string;
    private 'create_time'?: string | undefined;
    public authentication?: AppAuth;
    public callbacks?: AppCallbacks;
    private 'auto_record_mode'?: AppAutoRecordMode | undefined;
    private 'X-request-Id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withAppName(appName: string): ShowAppResponse {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string | undefined) {
        this['app_name'] = appName;
    }
    public get appName() {
        return this['app_name'];
    }
    public withAppId(appId: string): ShowAppResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
    public withState(state: AppState): ShowAppResponse {
        this['state'] = state;
        return this;
    }
    public withScope(scope: ShowAppResponseScopeEnum): ShowAppResponse {
        this['scope'] = scope;
        return this;
    }
    public withTenantName(tenantName: string): ShowAppResponse {
        this['tenant_name'] = tenantName;
        return this;
    }
    public set tenantName(tenantName: string | undefined) {
        this['tenant_name'] = tenantName;
    }
    public get tenantName() {
        return this['tenant_name'];
    }
    public withDomain(domain: string): ShowAppResponse {
        this['domain'] = domain;
        return this;
    }
    public withCreateTime(createTime: string): ShowAppResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withAuthentication(authentication: AppAuth): ShowAppResponse {
        this['authentication'] = authentication;
        return this;
    }
    public withCallbacks(callbacks: AppCallbacks): ShowAppResponse {
        this['callbacks'] = callbacks;
        return this;
    }
    public withAutoRecordMode(autoRecordMode: AppAutoRecordMode): ShowAppResponse {
        this['auto_record_mode'] = autoRecordMode;
        return this;
    }
    public set autoRecordMode(autoRecordMode: AppAutoRecordMode | undefined) {
        this['auto_record_mode'] = autoRecordMode;
    }
    public get autoRecordMode() {
        return this['auto_record_mode'];
    }
    public withXRequestId(xRequestId: string): ShowAppResponse {
        this['X-request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-request-Id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-request-Id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowAppResponseScopeEnum {
    DOMESTIC = 'DOMESTIC',
    OVERSEA = 'OVERSEA',
    GLOBAL = 'GLOBAL'
}
