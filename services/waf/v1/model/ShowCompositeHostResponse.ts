import { AccessProgress } from './AccessProgress';
import { Flag } from './Flag';
import { PremiumWafInstances } from './PremiumWafInstances';
import { WafServer } from './WafServer';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCompositeHostResponse extends SdkResponse {
    public id?: string;
    public hostid?: string;
    public hostname?: string;
    public policyid?: string;
    private 'access_code'?: string;
    private 'protect_status'?: number;
    private 'access_status'?: number;
    public proxy?: boolean;
    public timestamp?: number;
    private 'paid_type'?: string;
    public flag?: Flag;
    private 'waf_type'?: string;
    private 'web_tag'?: string;
    private 'access_progress'?: Array<AccessProgress>;
    private 'premium_waf_instances'?: Array<PremiumWafInstances>;
    public description?: string;
    private 'exclusive_ip'?: boolean;
    public region?: string;
    public server?: Array<WafServer>;
    private 'enterprise_project_id'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowCompositeHostResponse {
        this['id'] = id;
        return this;
    }
    public withHostid(hostid: string): ShowCompositeHostResponse {
        this['hostid'] = hostid;
        return this;
    }
    public withHostname(hostname: string): ShowCompositeHostResponse {
        this['hostname'] = hostname;
        return this;
    }
    public withPolicyid(policyid: string): ShowCompositeHostResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withAccessCode(accessCode: string): ShowCompositeHostResponse {
        this['access_code'] = accessCode;
        return this;
    }
    public set accessCode(accessCode: string  | undefined) {
        this['access_code'] = accessCode;
    }
    public get accessCode(): string | undefined {
        return this['access_code'];
    }
    public withProtectStatus(protectStatus: number): ShowCompositeHostResponse {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: number  | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus(): number | undefined {
        return this['protect_status'];
    }
    public withAccessStatus(accessStatus: number): ShowCompositeHostResponse {
        this['access_status'] = accessStatus;
        return this;
    }
    public set accessStatus(accessStatus: number  | undefined) {
        this['access_status'] = accessStatus;
    }
    public get accessStatus(): number | undefined {
        return this['access_status'];
    }
    public withProxy(proxy: boolean): ShowCompositeHostResponse {
        this['proxy'] = proxy;
        return this;
    }
    public withTimestamp(timestamp: number): ShowCompositeHostResponse {
        this['timestamp'] = timestamp;
        return this;
    }
    public withPaidType(paidType: string): ShowCompositeHostResponse {
        this['paid_type'] = paidType;
        return this;
    }
    public set paidType(paidType: string  | undefined) {
        this['paid_type'] = paidType;
    }
    public get paidType(): string | undefined {
        return this['paid_type'];
    }
    public withFlag(flag: Flag): ShowCompositeHostResponse {
        this['flag'] = flag;
        return this;
    }
    public withWafType(wafType: string): ShowCompositeHostResponse {
        this['waf_type'] = wafType;
        return this;
    }
    public set wafType(wafType: string  | undefined) {
        this['waf_type'] = wafType;
    }
    public get wafType(): string | undefined {
        return this['waf_type'];
    }
    public withWebTag(webTag: string): ShowCompositeHostResponse {
        this['web_tag'] = webTag;
        return this;
    }
    public set webTag(webTag: string  | undefined) {
        this['web_tag'] = webTag;
    }
    public get webTag(): string | undefined {
        return this['web_tag'];
    }
    public withAccessProgress(accessProgress: Array<AccessProgress>): ShowCompositeHostResponse {
        this['access_progress'] = accessProgress;
        return this;
    }
    public set accessProgress(accessProgress: Array<AccessProgress>  | undefined) {
        this['access_progress'] = accessProgress;
    }
    public get accessProgress(): Array<AccessProgress> | undefined {
        return this['access_progress'];
    }
    public withPremiumWafInstances(premiumWafInstances: Array<PremiumWafInstances>): ShowCompositeHostResponse {
        this['premium_waf_instances'] = premiumWafInstances;
        return this;
    }
    public set premiumWafInstances(premiumWafInstances: Array<PremiumWafInstances>  | undefined) {
        this['premium_waf_instances'] = premiumWafInstances;
    }
    public get premiumWafInstances(): Array<PremiumWafInstances> | undefined {
        return this['premium_waf_instances'];
    }
    public withDescription(description: string): ShowCompositeHostResponse {
        this['description'] = description;
        return this;
    }
    public withExclusiveIp(exclusiveIp: boolean): ShowCompositeHostResponse {
        this['exclusive_ip'] = exclusiveIp;
        return this;
    }
    public set exclusiveIp(exclusiveIp: boolean  | undefined) {
        this['exclusive_ip'] = exclusiveIp;
    }
    public get exclusiveIp(): boolean | undefined {
        return this['exclusive_ip'];
    }
    public withRegion(region: string): ShowCompositeHostResponse {
        this['region'] = region;
        return this;
    }
    public withServer(server: Array<WafServer>): ShowCompositeHostResponse {
        this['server'] = server;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowCompositeHostResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}