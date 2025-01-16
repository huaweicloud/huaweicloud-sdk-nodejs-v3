import { Flag } from './Flag';


export class SimplePremiumWafHost {
    public id?: string;
    public hostname?: string;
    public extend?: { [key: string]: string; };
    public region?: string;
    public flag?: Flag;
    public description?: string;
    public policyid?: string;
    private 'protect_status'?: number;
    private 'access_status'?: number;
    private 'web_tag'?: string;
    public hostid?: string;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withId(id: string): SimplePremiumWafHost {
        this['id'] = id;
        return this;
    }
    public withHostname(hostname: string): SimplePremiumWafHost {
        this['hostname'] = hostname;
        return this;
    }
    public withExtend(extend: { [key: string]: string; }): SimplePremiumWafHost {
        this['extend'] = extend;
        return this;
    }
    public withRegion(region: string): SimplePremiumWafHost {
        this['region'] = region;
        return this;
    }
    public withFlag(flag: Flag): SimplePremiumWafHost {
        this['flag'] = flag;
        return this;
    }
    public withDescription(description: string): SimplePremiumWafHost {
        this['description'] = description;
        return this;
    }
    public withPolicyid(policyid: string): SimplePremiumWafHost {
        this['policyid'] = policyid;
        return this;
    }
    public withProtectStatus(protectStatus: number): SimplePremiumWafHost {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: number  | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus(): number | undefined {
        return this['protect_status'];
    }
    public withAccessStatus(accessStatus: number): SimplePremiumWafHost {
        this['access_status'] = accessStatus;
        return this;
    }
    public set accessStatus(accessStatus: number  | undefined) {
        this['access_status'] = accessStatus;
    }
    public get accessStatus(): number | undefined {
        return this['access_status'];
    }
    public withWebTag(webTag: string): SimplePremiumWafHost {
        this['web_tag'] = webTag;
        return this;
    }
    public set webTag(webTag: string  | undefined) {
        this['web_tag'] = webTag;
    }
    public get webTag(): string | undefined {
        return this['web_tag'];
    }
    public withHostid(hostid: string): SimplePremiumWafHost {
        this['hostid'] = hostid;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SimplePremiumWafHost {
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