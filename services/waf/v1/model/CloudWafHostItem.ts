import { Flag } from './Flag';


export class CloudWafHostItem {
    public id?: string;
    public hostid?: string;
    public region?: string;
    public description?: string;
    public type?: number;
    public proxy?: boolean;
    public hostname?: string;
    private 'access_code'?: string | undefined;
    public policyid?: string;
    public timestamp?: number;
    private 'protect_status'?: number | undefined;
    private 'access_status'?: number | undefined;
    private 'exclusive_ip'?: boolean | undefined;
    private 'paid_type'?: string | undefined;
    private 'web_tag'?: string | undefined;
    public flag?: Flag;
    public constructor() { 
    }
    public withId(id: string): CloudWafHostItem {
        this['id'] = id;
        return this;
    }
    public withHostid(hostid: string): CloudWafHostItem {
        this['hostid'] = hostid;
        return this;
    }
    public withRegion(region: string): CloudWafHostItem {
        this['region'] = region;
        return this;
    }
    public withDescription(description: string): CloudWafHostItem {
        this['description'] = description;
        return this;
    }
    public withType(type: number): CloudWafHostItem {
        this['type'] = type;
        return this;
    }
    public withProxy(proxy: boolean): CloudWafHostItem {
        this['proxy'] = proxy;
        return this;
    }
    public withHostname(hostname: string): CloudWafHostItem {
        this['hostname'] = hostname;
        return this;
    }
    public withAccessCode(accessCode: string): CloudWafHostItem {
        this['access_code'] = accessCode;
        return this;
    }
    public set accessCode(accessCode: string | undefined) {
        this['access_code'] = accessCode;
    }
    public get accessCode() {
        return this['access_code'];
    }
    public withPolicyid(policyid: string): CloudWafHostItem {
        this['policyid'] = policyid;
        return this;
    }
    public withTimestamp(timestamp: number): CloudWafHostItem {
        this['timestamp'] = timestamp;
        return this;
    }
    public withProtectStatus(protectStatus: number): CloudWafHostItem {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: number | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus() {
        return this['protect_status'];
    }
    public withAccessStatus(accessStatus: number): CloudWafHostItem {
        this['access_status'] = accessStatus;
        return this;
    }
    public set accessStatus(accessStatus: number | undefined) {
        this['access_status'] = accessStatus;
    }
    public get accessStatus() {
        return this['access_status'];
    }
    public withExclusiveIp(exclusiveIp: boolean): CloudWafHostItem {
        this['exclusive_ip'] = exclusiveIp;
        return this;
    }
    public set exclusiveIp(exclusiveIp: boolean | undefined) {
        this['exclusive_ip'] = exclusiveIp;
    }
    public get exclusiveIp() {
        return this['exclusive_ip'];
    }
    public withPaidType(paidType: string): CloudWafHostItem {
        this['paid_type'] = paidType;
        return this;
    }
    public set paidType(paidType: string | undefined) {
        this['paid_type'] = paidType;
    }
    public get paidType() {
        return this['paid_type'];
    }
    public withWebTag(webTag: string): CloudWafHostItem {
        this['web_tag'] = webTag;
        return this;
    }
    public set webTag(webTag: string | undefined) {
        this['web_tag'] = webTag;
    }
    public get webTag() {
        return this['web_tag'];
    }
    public withFlag(flag: Flag): CloudWafHostItem {
        this['flag'] = flag;
        return this;
    }
}