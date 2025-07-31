
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBaselineWhiteListResponse extends SdkResponse {
    private 'rule_type'?: string;
    private 'os_type'?: string;
    private 'index_version'?: string;
    private 'check_type'?: string;
    public standard?: string;
    public tag?: string;
    private 'check_rule_name'?: string;
    private 'host_id_list'?: Array<string>;
    public description?: string;
    public constructor() { 
        super();
    }
    public withRuleType(ruleType: string): ShowBaselineWhiteListResponse {
        this['rule_type'] = ruleType;
        return this;
    }
    public set ruleType(ruleType: string  | undefined) {
        this['rule_type'] = ruleType;
    }
    public get ruleType(): string | undefined {
        return this['rule_type'];
    }
    public withOsType(osType: string): ShowBaselineWhiteListResponse {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withIndexVersion(indexVersion: string): ShowBaselineWhiteListResponse {
        this['index_version'] = indexVersion;
        return this;
    }
    public set indexVersion(indexVersion: string  | undefined) {
        this['index_version'] = indexVersion;
    }
    public get indexVersion(): string | undefined {
        return this['index_version'];
    }
    public withCheckType(checkType: string): ShowBaselineWhiteListResponse {
        this['check_type'] = checkType;
        return this;
    }
    public set checkType(checkType: string  | undefined) {
        this['check_type'] = checkType;
    }
    public get checkType(): string | undefined {
        return this['check_type'];
    }
    public withStandard(standard: string): ShowBaselineWhiteListResponse {
        this['standard'] = standard;
        return this;
    }
    public withTag(tag: string): ShowBaselineWhiteListResponse {
        this['tag'] = tag;
        return this;
    }
    public withCheckRuleName(checkRuleName: string): ShowBaselineWhiteListResponse {
        this['check_rule_name'] = checkRuleName;
        return this;
    }
    public set checkRuleName(checkRuleName: string  | undefined) {
        this['check_rule_name'] = checkRuleName;
    }
    public get checkRuleName(): string | undefined {
        return this['check_rule_name'];
    }
    public withHostIdList(hostIdList: Array<string>): ShowBaselineWhiteListResponse {
        this['host_id_list'] = hostIdList;
        return this;
    }
    public set hostIdList(hostIdList: Array<string>  | undefined) {
        this['host_id_list'] = hostIdList;
    }
    public get hostIdList(): Array<string> | undefined {
        return this['host_id_list'];
    }
    public withDescription(description: string): ShowBaselineWhiteListResponse {
        this['description'] = description;
        return this;
    }
}