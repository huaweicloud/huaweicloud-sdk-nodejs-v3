import { ApiGroupCommonInfo } from './ApiGroupCommonInfo';
import { UrlDomain } from './UrlDomain';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDetailsOfApiGroupV2Response extends SdkResponse {
    public id?: string;
    public name?: string;
    public status?: ShowDetailsOfApiGroupV2ResponseStatusEnum | number;
    private 'sl_domain'?: string;
    private 'register_time'?: Date;
    private 'update_time'?: Date;
    private 'on_sell_status'?: number;
    private 'url_domains'?: Array<UrlDomain>;
    private 'sl_domain_access_enabled'?: boolean;
    private 'sl_domains'?: Array<string>;
    public remark?: string;
    private 'call_limits'?: number;
    private 'time_interval'?: number;
    private 'time_unit'?: string;
    private 'is_default'?: number;
    public version?: string;
    private 'roma_app_id'?: string;
    private 'roma_app_name'?: string;
    public constructor(id?: string, name?: string, status?: number, slDomain?: string, registerTime?: Date, updateTime?: Date, onSellStatus?: number) { 
        super();
        this['id'] = id;
        this['name'] = name;
        this['status'] = status;
        this['sl_domain'] = slDomain;
        this['register_time'] = registerTime;
        this['update_time'] = updateTime;
        this['on_sell_status'] = onSellStatus;
    }
    public withId(id: string): ShowDetailsOfApiGroupV2Response {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowDetailsOfApiGroupV2Response {
        this['name'] = name;
        return this;
    }
    public withStatus(status: ShowDetailsOfApiGroupV2ResponseStatusEnum | number): ShowDetailsOfApiGroupV2Response {
        this['status'] = status;
        return this;
    }
    public withSlDomain(slDomain: string): ShowDetailsOfApiGroupV2Response {
        this['sl_domain'] = slDomain;
        return this;
    }
    public set slDomain(slDomain: string  | undefined) {
        this['sl_domain'] = slDomain;
    }
    public get slDomain(): string | undefined {
        return this['sl_domain'];
    }
    public withRegisterTime(registerTime: Date): ShowDetailsOfApiGroupV2Response {
        this['register_time'] = registerTime;
        return this;
    }
    public set registerTime(registerTime: Date  | undefined) {
        this['register_time'] = registerTime;
    }
    public get registerTime(): Date | undefined {
        return this['register_time'];
    }
    public withUpdateTime(updateTime: Date): ShowDetailsOfApiGroupV2Response {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withOnSellStatus(onSellStatus: number): ShowDetailsOfApiGroupV2Response {
        this['on_sell_status'] = onSellStatus;
        return this;
    }
    public set onSellStatus(onSellStatus: number  | undefined) {
        this['on_sell_status'] = onSellStatus;
    }
    public get onSellStatus(): number | undefined {
        return this['on_sell_status'];
    }
    public withUrlDomains(urlDomains: Array<UrlDomain>): ShowDetailsOfApiGroupV2Response {
        this['url_domains'] = urlDomains;
        return this;
    }
    public set urlDomains(urlDomains: Array<UrlDomain>  | undefined) {
        this['url_domains'] = urlDomains;
    }
    public get urlDomains(): Array<UrlDomain> | undefined {
        return this['url_domains'];
    }
    public withSlDomainAccessEnabled(slDomainAccessEnabled: boolean): ShowDetailsOfApiGroupV2Response {
        this['sl_domain_access_enabled'] = slDomainAccessEnabled;
        return this;
    }
    public set slDomainAccessEnabled(slDomainAccessEnabled: boolean  | undefined) {
        this['sl_domain_access_enabled'] = slDomainAccessEnabled;
    }
    public get slDomainAccessEnabled(): boolean | undefined {
        return this['sl_domain_access_enabled'];
    }
    public withSlDomains(slDomains: Array<string>): ShowDetailsOfApiGroupV2Response {
        this['sl_domains'] = slDomains;
        return this;
    }
    public set slDomains(slDomains: Array<string>  | undefined) {
        this['sl_domains'] = slDomains;
    }
    public get slDomains(): Array<string> | undefined {
        return this['sl_domains'];
    }
    public withRemark(remark: string): ShowDetailsOfApiGroupV2Response {
        this['remark'] = remark;
        return this;
    }
    public withCallLimits(callLimits: number): ShowDetailsOfApiGroupV2Response {
        this['call_limits'] = callLimits;
        return this;
    }
    public set callLimits(callLimits: number  | undefined) {
        this['call_limits'] = callLimits;
    }
    public get callLimits(): number | undefined {
        return this['call_limits'];
    }
    public withTimeInterval(timeInterval: number): ShowDetailsOfApiGroupV2Response {
        this['time_interval'] = timeInterval;
        return this;
    }
    public set timeInterval(timeInterval: number  | undefined) {
        this['time_interval'] = timeInterval;
    }
    public get timeInterval(): number | undefined {
        return this['time_interval'];
    }
    public withTimeUnit(timeUnit: string): ShowDetailsOfApiGroupV2Response {
        this['time_unit'] = timeUnit;
        return this;
    }
    public set timeUnit(timeUnit: string  | undefined) {
        this['time_unit'] = timeUnit;
    }
    public get timeUnit(): string | undefined {
        return this['time_unit'];
    }
    public withIsDefault(isDefault: number): ShowDetailsOfApiGroupV2Response {
        this['is_default'] = isDefault;
        return this;
    }
    public set isDefault(isDefault: number  | undefined) {
        this['is_default'] = isDefault;
    }
    public get isDefault(): number | undefined {
        return this['is_default'];
    }
    public withVersion(version: string): ShowDetailsOfApiGroupV2Response {
        this['version'] = version;
        return this;
    }
    public withRomaAppId(romaAppId: string): ShowDetailsOfApiGroupV2Response {
        this['roma_app_id'] = romaAppId;
        return this;
    }
    public set romaAppId(romaAppId: string  | undefined) {
        this['roma_app_id'] = romaAppId;
    }
    public get romaAppId(): string | undefined {
        return this['roma_app_id'];
    }
    public withRomaAppName(romaAppName: string): ShowDetailsOfApiGroupV2Response {
        this['roma_app_name'] = romaAppName;
        return this;
    }
    public set romaAppName(romaAppName: string  | undefined) {
        this['roma_app_name'] = romaAppName;
    }
    public get romaAppName(): string | undefined {
        return this['roma_app_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowDetailsOfApiGroupV2ResponseStatusEnum {
    NUMBER_1 = 1
}
