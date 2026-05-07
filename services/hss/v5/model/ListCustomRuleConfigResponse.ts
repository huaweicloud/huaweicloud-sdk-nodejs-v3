

export class ListCustomRuleConfigResponse {
    private 'rule_id'?: string;
    private 'host_num'?: number;
    private 'rule_name'?: string;
    private 'rule_status'?: number;
    private 'rule_type'?: string;
    private 'auto_block'?: number;
    private 'hash_type'?: string;
    private 'is_all_host'?: boolean;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public constructor() { 
    }
    public withRuleId(ruleId: string): ListCustomRuleConfigResponse {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withHostNum(hostNum: number): ListCustomRuleConfigResponse {
        this['host_num'] = hostNum;
        return this;
    }
    public set hostNum(hostNum: number  | undefined) {
        this['host_num'] = hostNum;
    }
    public get hostNum(): number | undefined {
        return this['host_num'];
    }
    public withRuleName(ruleName: string): ListCustomRuleConfigResponse {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withRuleStatus(ruleStatus: number): ListCustomRuleConfigResponse {
        this['rule_status'] = ruleStatus;
        return this;
    }
    public set ruleStatus(ruleStatus: number  | undefined) {
        this['rule_status'] = ruleStatus;
    }
    public get ruleStatus(): number | undefined {
        return this['rule_status'];
    }
    public withRuleType(ruleType: string): ListCustomRuleConfigResponse {
        this['rule_type'] = ruleType;
        return this;
    }
    public set ruleType(ruleType: string  | undefined) {
        this['rule_type'] = ruleType;
    }
    public get ruleType(): string | undefined {
        return this['rule_type'];
    }
    public withAutoBlock(autoBlock: number): ListCustomRuleConfigResponse {
        this['auto_block'] = autoBlock;
        return this;
    }
    public set autoBlock(autoBlock: number  | undefined) {
        this['auto_block'] = autoBlock;
    }
    public get autoBlock(): number | undefined {
        return this['auto_block'];
    }
    public withHashType(hashType: string): ListCustomRuleConfigResponse {
        this['hash_type'] = hashType;
        return this;
    }
    public set hashType(hashType: string  | undefined) {
        this['hash_type'] = hashType;
    }
    public get hashType(): string | undefined {
        return this['hash_type'];
    }
    public withIsAllHost(isAllHost: boolean): ListCustomRuleConfigResponse {
        this['is_all_host'] = isAllHost;
        return this;
    }
    public set isAllHost(isAllHost: boolean  | undefined) {
        this['is_all_host'] = isAllHost;
    }
    public get isAllHost(): boolean | undefined {
        return this['is_all_host'];
    }
    public withCreateTime(createTime: number): ListCustomRuleConfigResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): ListCustomRuleConfigResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
}