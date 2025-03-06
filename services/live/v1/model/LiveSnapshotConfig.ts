import { ObsFileAddr } from './ObsFileAddr';


export class LiveSnapshotConfig {
    public domain?: string;
    private 'app_name'?: string;
    private 'auth_key'?: string;
    private 'time_interval'?: number;
    private 'object_write_mode'?: number;
    private 'obs_location'?: ObsFileAddr;
    private 'call_back_enable'?: LiveSnapshotConfigCallBackEnableEnum | string;
    private 'call_back_url'?: string;
    private 'image_object_format'?: string;
    private 'image_access_protocol'?: LiveSnapshotConfigImageAccessProtocolEnum | string;
    private 'image_access_domain'?: string;
    public constructor(domain?: string, appName?: string, timeInterval?: number, objectWriteMode?: number, obsLocation?: ObsFileAddr) { 
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
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withAuthKey(authKey: string): LiveSnapshotConfig {
        this['auth_key'] = authKey;
        return this;
    }
    public set authKey(authKey: string  | undefined) {
        this['auth_key'] = authKey;
    }
    public get authKey(): string | undefined {
        return this['auth_key'];
    }
    public withTimeInterval(timeInterval: number): LiveSnapshotConfig {
        this['time_interval'] = timeInterval;
        return this;
    }
    public set timeInterval(timeInterval: number  | undefined) {
        this['time_interval'] = timeInterval;
    }
    public get timeInterval(): number | undefined {
        return this['time_interval'];
    }
    public withObjectWriteMode(objectWriteMode: number): LiveSnapshotConfig {
        this['object_write_mode'] = objectWriteMode;
        return this;
    }
    public set objectWriteMode(objectWriteMode: number  | undefined) {
        this['object_write_mode'] = objectWriteMode;
    }
    public get objectWriteMode(): number | undefined {
        return this['object_write_mode'];
    }
    public withObsLocation(obsLocation: ObsFileAddr): LiveSnapshotConfig {
        this['obs_location'] = obsLocation;
        return this;
    }
    public set obsLocation(obsLocation: ObsFileAddr  | undefined) {
        this['obs_location'] = obsLocation;
    }
    public get obsLocation(): ObsFileAddr | undefined {
        return this['obs_location'];
    }
    public withCallBackEnable(callBackEnable: LiveSnapshotConfigCallBackEnableEnum | string): LiveSnapshotConfig {
        this['call_back_enable'] = callBackEnable;
        return this;
    }
    public set callBackEnable(callBackEnable: LiveSnapshotConfigCallBackEnableEnum | string  | undefined) {
        this['call_back_enable'] = callBackEnable;
    }
    public get callBackEnable(): LiveSnapshotConfigCallBackEnableEnum | string | undefined {
        return this['call_back_enable'];
    }
    public withCallBackUrl(callBackUrl: string): LiveSnapshotConfig {
        this['call_back_url'] = callBackUrl;
        return this;
    }
    public set callBackUrl(callBackUrl: string  | undefined) {
        this['call_back_url'] = callBackUrl;
    }
    public get callBackUrl(): string | undefined {
        return this['call_back_url'];
    }
    public withImageObjectFormat(imageObjectFormat: string): LiveSnapshotConfig {
        this['image_object_format'] = imageObjectFormat;
        return this;
    }
    public set imageObjectFormat(imageObjectFormat: string  | undefined) {
        this['image_object_format'] = imageObjectFormat;
    }
    public get imageObjectFormat(): string | undefined {
        return this['image_object_format'];
    }
    public withImageAccessProtocol(imageAccessProtocol: LiveSnapshotConfigImageAccessProtocolEnum | string): LiveSnapshotConfig {
        this['image_access_protocol'] = imageAccessProtocol;
        return this;
    }
    public set imageAccessProtocol(imageAccessProtocol: LiveSnapshotConfigImageAccessProtocolEnum | string  | undefined) {
        this['image_access_protocol'] = imageAccessProtocol;
    }
    public get imageAccessProtocol(): LiveSnapshotConfigImageAccessProtocolEnum | string | undefined {
        return this['image_access_protocol'];
    }
    public withImageAccessDomain(imageAccessDomain: string): LiveSnapshotConfig {
        this['image_access_domain'] = imageAccessDomain;
        return this;
    }
    public set imageAccessDomain(imageAccessDomain: string  | undefined) {
        this['image_access_domain'] = imageAccessDomain;
    }
    public get imageAccessDomain(): string | undefined {
        return this['image_access_domain'];
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
/**
    * @export
    * @enum {string}
    */
export enum LiveSnapshotConfigImageAccessProtocolEnum {
    HTTP = 'http',
    HTTPS = 'https'
}
