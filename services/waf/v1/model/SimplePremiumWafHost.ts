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
    private 'pool_ids'?: Array<string>;
    private 'loadbalancer_id'?: string;
    private 'protocol_port'?: number;
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
    public withPoolIds(poolIds: Array<string>): SimplePremiumWafHost {
        this['pool_ids'] = poolIds;
        return this;
    }
    public set poolIds(poolIds: Array<string>  | undefined) {
        this['pool_ids'] = poolIds;
    }
    public get poolIds(): Array<string> | undefined {
        return this['pool_ids'];
    }
    public withLoadbalancerId(loadbalancerId: string): SimplePremiumWafHost {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string  | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId(): string | undefined {
        return this['loadbalancer_id'];
    }
    public withProtocolPort(protocolPort: number): SimplePremiumWafHost {
        this['protocol_port'] = protocolPort;
        return this;
    }
    public set protocolPort(protocolPort: number  | undefined) {
        this['protocol_port'] = protocolPort;
    }
    public get protocolPort(): number | undefined {
        return this['protocol_port'];
    }
}