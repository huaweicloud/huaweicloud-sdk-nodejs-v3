import { ShowPeriodResponseInfo } from './ShowPeriodResponseInfo';


export class ResourceProductDataObjectInfo {
    private 'charging_mode'?: string;
    private 'is_auto_renew'?: boolean;
    private 'version_info'?: { [key: string]: Array<ShowPeriodResponseInfo>; };
    public constructor() { 
    }
    public withChargingMode(chargingMode: string): ResourceProductDataObjectInfo {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): string | undefined {
        return this['charging_mode'];
    }
    public withIsAutoRenew(isAutoRenew: boolean): ResourceProductDataObjectInfo {
        this['is_auto_renew'] = isAutoRenew;
        return this;
    }
    public set isAutoRenew(isAutoRenew: boolean  | undefined) {
        this['is_auto_renew'] = isAutoRenew;
    }
    public get isAutoRenew(): boolean | undefined {
        return this['is_auto_renew'];
    }
    public withVersionInfo(versionInfo: { [key: string]: Array<ShowPeriodResponseInfo>; }): ResourceProductDataObjectInfo {
        this['version_info'] = versionInfo;
        return this;
    }
    public set versionInfo(versionInfo: { [key: string]: Array<ShowPeriodResponseInfo>; }  | undefined) {
        this['version_info'] = versionInfo;
    }
    public get versionInfo(): { [key: string]: Array<ShowPeriodResponseInfo>; } | undefined {
        return this['version_info'];
    }
}