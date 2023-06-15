import { ObsFileAddr } from './ObsFileAddr';


export class LiveSnapshotConfig {
    public domain: string;
    private 'app_name': string | undefined;
    private 'auth_key'?: string | undefined;
    private 'time_interval': number | undefined;
    private 'object_write_mode': number | undefined;
    private 'obs_location': ObsFileAddr | undefined;
    private 'call_back_enable'?: LiveSnapshotConfigCallBackEnableEnum | undefined;
    private 'call_back_url'?: string | undefined;
    public constructor(domain?: any, appName?: any, timeInterval?: any, objectWriteMode?: any, obsLocation?: any) { 
        this['domain'] = domain;
        this['app_name'] = appName;
        this['time_interval'] = timeInterval;
        this['object_write_mode'] = objectWriteMode;
        this['obs_location'] = obsLocation;
    }
    public withDomain(domain: string): LiveSnapshotConfig {
        this['domain'] = domain;
        return this;
    }
    public withAppName(appName: string): LiveSnapshotConfig {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string | undefined) {
        this['app_name'] = appName;
    }
    public get appName() {
        return this['app_name'];
    }
    public withAuthKey(authKey: string): LiveSnapshotConfig {
        this['auth_key'] = authKey;
        return this;
    }
    public set authKey(authKey: string | undefined) {
        this['auth_key'] = authKey;
    }
    public get authKey() {
        return this['auth_key'];
    }
    public withTimeInterval(timeInterval: number): LiveSnapshotConfig {
        this['time_interval'] = timeInterval;
        return this;
    }
    public set timeInterval(timeInterval: number | undefined) {
        this['time_interval'] = timeInterval;
    }
    public get timeInterval() {
        return this['time_interval'];
    }
    public withObjectWriteMode(objectWriteMode: number): LiveSnapshotConfig {
        this['object_write_mode'] = objectWriteMode;
        return this;
    }
    public set objectWriteMode(objectWriteMode: number | undefined) {
        this['object_write_mode'] = objectWriteMode;
    }
    public get objectWriteMode() {
        return this['object_write_mode'];
    }
    public withObsLocation(obsLocation: ObsFileAddr): LiveSnapshotConfig {
        this['obs_location'] = obsLocation;
        return this;
    }
    public set obsLocation(obsLocation: ObsFileAddr | undefined) {
        this['obs_location'] = obsLocation;
    }
    public get obsLocation() {
        return this['obs_location'];
    }
    public withCallBackEnable(callBackEnable: LiveSnapshotConfigCallBackEnableEnum): LiveSnapshotConfig {
        this['call_back_enable'] = callBackEnable;
        return this;
    }
    public set callBackEnable(callBackEnable: LiveSnapshotConfigCallBackEnableEnum | undefined) {
        this['call_back_enable'] = callBackEnable;
    }
    public get callBackEnable() {
        return this['call_back_enable'];
    }
    public withCallBackUrl(callBackUrl: string): LiveSnapshotConfig {
        this['call_back_url'] = callBackUrl;
        return this;
    }
    public set callBackUrl(callBackUrl: string | undefined) {
        this['call_back_url'] = callBackUrl;
    }
    public get callBackUrl() {
        return this['call_back_url'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum LiveSnapshotConfigCallBackEnableEnum {
    ON = 'on',
    OFF = 'off'
}
