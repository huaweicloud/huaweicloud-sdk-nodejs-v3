
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCustomRuleConfigDetailResponse extends SdkResponse {
    private 'rule_id'?: string;
    private 'hash_type'?: string;
    private 'auto_block'?: number;
    private 'is_all_host'?: boolean;
    private 'rule_type'?: string;
    private 'rule_values'?: Array<string>;
    private 'agent_ids'?: Array<string>;
    public constructor() { 
        super();
    }
    public withRuleId(ruleId: string): ListCustomRuleConfigDetailResponse {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withHashType(hashType: string): ListCustomRuleConfigDetailResponse {
        this['hash_type'] = hashType;
        return this;
    }
    public set hashType(hashType: string  | undefined) {
        this['hash_type'] = hashType;
    }
    public get hashType(): string | undefined {
        return this['hash_type'];
    }
    public withAutoBlock(autoBlock: number): ListCustomRuleConfigDetailResponse {
        this['auto_block'] = autoBlock;
        return this;
    }
    public set autoBlock(autoBlock: number  | undefined) {
        this['auto_block'] = autoBlock;
    }
    public get autoBlock(): number | undefined {
        return this['auto_block'];
    }
    public withIsAllHost(isAllHost: boolean): ListCustomRuleConfigDetailResponse {
        this['is_all_host'] = isAllHost;
        return this;
    }
    public set isAllHost(isAllHost: boolean  | undefined) {
        this['is_all_host'] = isAllHost;
    }
    public get isAllHost(): boolean | undefined {
        return this['is_all_host'];
    }
    public withRuleType(ruleType: string): ListCustomRuleConfigDetailResponse {
        this['rule_type'] = ruleType;
        return this;
    }
    public set ruleType(ruleType: string  | undefined) {
        this['rule_type'] = ruleType;
    }
    public get ruleType(): string | undefined {
        return this['rule_type'];
    }
    public withRuleValues(ruleValues: Array<string>): ListCustomRuleConfigDetailResponse {
        this['rule_values'] = ruleValues;
        return this;
    }
    public set ruleValues(ruleValues: Array<string>  | undefined) {
        this['rule_values'] = ruleValues;
    }
    public get ruleValues(): Array<string> | undefined {
        return this['rule_values'];
    }
    public withAgentIds(agentIds: Array<string>): ListCustomRuleConfigDetailResponse {
        this['agent_ids'] = agentIds;
        return this;
    }
    public set agentIds(agentIds: Array<string>  | undefined) {
        this['agent_ids'] = agentIds;
    }
    public get agentIds(): Array<string> | undefined {
        return this['agent_ids'];
    }
}