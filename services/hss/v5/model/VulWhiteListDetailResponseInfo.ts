import { VulWhiteListDetailResponseInfoCves } from './VulWhiteListDetailResponseInfoCves';
import { VulWhiteListDetailResponseInfoHosts } from './VulWhiteListDetailResponseInfoHosts';


export class VulWhiteListDetailResponseInfo {
    public id?: string;
    private 'vul_id'?: string;
    private 'vul_name'?: string;
    private 'vul_type'?: string;
    public cves?: Array<VulWhiteListDetailResponseInfoCves>;
    private 'rule_type'?: string;
    public hosts?: Array<VulWhiteListDetailResponseInfoHosts>;
    public description?: string;
    public constructor() { 
    }
    public withId(id: string): VulWhiteListDetailResponseInfo {
        this['id'] = id;
        return this;
    }
    public withVulId(vulId: string): VulWhiteListDetailResponseInfo {
        this['vul_id'] = vulId;
        return this;
    }
    public set vulId(vulId: string  | undefined) {
        this['vul_id'] = vulId;
    }
    public get vulId(): string | undefined {
        return this['vul_id'];
    }
    public withVulName(vulName: string): VulWhiteListDetailResponseInfo {
        this['vul_name'] = vulName;
        return this;
    }
    public set vulName(vulName: string  | undefined) {
        this['vul_name'] = vulName;
    }
    public get vulName(): string | undefined {
        return this['vul_name'];
    }
    public withVulType(vulType: string): VulWhiteListDetailResponseInfo {
        this['vul_type'] = vulType;
        return this;
    }
    public set vulType(vulType: string  | undefined) {
        this['vul_type'] = vulType;
    }
    public get vulType(): string | undefined {
        return this['vul_type'];
    }
    public withCves(cves: Array<VulWhiteListDetailResponseInfoCves>): VulWhiteListDetailResponseInfo {
        this['cves'] = cves;
        return this;
    }
    public withRuleType(ruleType: string): VulWhiteListDetailResponseInfo {
        this['rule_type'] = ruleType;
        return this;
    }
    public set ruleType(ruleType: string  | undefined) {
        this['rule_type'] = ruleType;
    }
    public get ruleType(): string | undefined {
        return this['rule_type'];
    }
    public withHosts(hosts: Array<VulWhiteListDetailResponseInfoHosts>): VulWhiteListDetailResponseInfo {
        this['hosts'] = hosts;
        return this;
    }
    public withDescription(description: string): VulWhiteListDetailResponseInfo {
        this['description'] = description;
        return this;
    }
}