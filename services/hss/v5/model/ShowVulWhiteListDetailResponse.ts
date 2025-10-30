import { VulWhiteListDetailResponseInfoCves } from './VulWhiteListDetailResponseInfoCves';
import { VulWhiteListDetailResponseInfoHosts } from './VulWhiteListDetailResponseInfoHosts';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVulWhiteListDetailResponse extends SdkResponse {
    public id?: string;
    private 'vul_id'?: string;
    private 'vul_name'?: string;
    private 'vul_type'?: string;
    public cves?: Array<VulWhiteListDetailResponseInfoCves>;
    private 'rule_type'?: string;
    public hosts?: Array<VulWhiteListDetailResponseInfoHosts>;
    public description?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowVulWhiteListDetailResponse {
        this['id'] = id;
        return this;
    }
    public withVulId(vulId: string): ShowVulWhiteListDetailResponse {
        this['vul_id'] = vulId;
        return this;
    }
    public set vulId(vulId: string  | undefined) {
        this['vul_id'] = vulId;
    }
    public get vulId(): string | undefined {
        return this['vul_id'];
    }
    public withVulName(vulName: string): ShowVulWhiteListDetailResponse {
        this['vul_name'] = vulName;
        return this;
    }
    public set vulName(vulName: string  | undefined) {
        this['vul_name'] = vulName;
    }
    public get vulName(): string | undefined {
        return this['vul_name'];
    }
    public withVulType(vulType: string): ShowVulWhiteListDetailResponse {
        this['vul_type'] = vulType;
        return this;
    }
    public set vulType(vulType: string  | undefined) {
        this['vul_type'] = vulType;
    }
    public get vulType(): string | undefined {
        return this['vul_type'];
    }
    public withCves(cves: Array<VulWhiteListDetailResponseInfoCves>): ShowVulWhiteListDetailResponse {
        this['cves'] = cves;
        return this;
    }
    public withRuleType(ruleType: string): ShowVulWhiteListDetailResponse {
        this['rule_type'] = ruleType;
        return this;
    }
    public set ruleType(ruleType: string  | undefined) {
        this['rule_type'] = ruleType;
    }
    public get ruleType(): string | undefined {
        return this['rule_type'];
    }
    public withHosts(hosts: Array<VulWhiteListDetailResponseInfoHosts>): ShowVulWhiteListDetailResponse {
        this['hosts'] = hosts;
        return this;
    }
    public withDescription(description: string): ShowVulWhiteListDetailResponse {
        this['description'] = description;
        return this;
    }
}