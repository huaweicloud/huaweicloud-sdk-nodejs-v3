import { Flag } from './Flag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteHostResponse extends SdkResponse {
    public id?: string;
    public hostid?: string;
    public description?: string;
    public type?: number;
    public proxy?: boolean;
    public flag?: Flag;
    public hostname?: string;
    private 'access_code'?: string;
    public policyid?: string;
    public timestamp?: number;
    private 'protect_status'?: number;
    private 'access_status'?: number;
    private 'exclusive_ip'?: boolean;
    private 'paid_type'?: string;
    private 'web_tag'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): DeleteHostResponse {
        this['id'] = id;
        return this;
    }
    public withHostid(hostid: string): DeleteHostResponse {
        this['hostid'] = hostid;
        return this;
    }
    public withDescription(description: string): DeleteHostResponse {
        this['description'] = description;
        return this;
    }
    public withType(type: number): DeleteHostResponse {
        this['type'] = type;
        return this;
    }
    public withProxy(proxy: boolean): DeleteHostResponse {
        this['proxy'] = proxy;
        return this;
    }
    public withFlag(flag: Flag): DeleteHostResponse {
        this['flag'] = flag;
        return this;
    }
    public withHostname(hostname: string): DeleteHostResponse {
        this['hostname'] = hostname;
        return this;
    }
    public withAccessCode(accessCode: string): DeleteHostResponse {
        this['access_code'] = accessCode;
        return this;
    }
    public set accessCode(accessCode: string  | undefined) {
        this['access_code'] = accessCode;
    }
    public get accessCode(): string | undefined {
        return this['access_code'];
    }
    public withPolicyid(policyid: string): DeleteHostResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withTimestamp(timestamp: number): DeleteHostResponse {
        this['timestamp'] = timestamp;
        return this;
    }
    public withProtectStatus(protectStatus: number): DeleteHostResponse {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: number  | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus(): number | undefined {
        return this['protect_status'];
    }
    public withAccessStatus(accessStatus: number): DeleteHostResponse {
        this['access_status'] = accessStatus;
        return this;
    }
    public set accessStatus(accessStatus: number  | undefined) {
        this['access_status'] = accessStatus;
    }
    public get accessStatus(): number | undefined {
        return this['access_status'];
    }
    public withExclusiveIp(exclusiveIp: boolean): DeleteHostResponse {
        this['exclusive_ip'] = exclusiveIp;
        return this;
    }
    public set exclusiveIp(exclusiveIp: boolean  | undefined) {
        this['exclusive_ip'] = exclusiveIp;
    }
    public get exclusiveIp(): boolean | undefined {
        return this['exclusive_ip'];
    }
    public withPaidType(paidType: string): DeleteHostResponse {
        this['paid_type'] = paidType;
        return this;
    }
    public set paidType(paidType: string  | undefined) {
        this['paid_type'] = paidType;
    }
    public get paidType(): string | undefined {
        return this['paid_type'];
    }
    public withWebTag(webTag: string): DeleteHostResponse {
        this['web_tag'] = webTag;
        return this;
    }
    public set webTag(webTag: string  | undefined) {
        this['web_tag'] = webTag;
    }
    public get webTag(): string | undefined {
        return this['web_tag'];
    }
}