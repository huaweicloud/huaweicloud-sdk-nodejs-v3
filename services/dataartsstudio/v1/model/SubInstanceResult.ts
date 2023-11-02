

export class SubInstanceResult {
    private 'sub_rule_id'?: string;
    private 'sub_instance_instance_id'?: string;
    private 'abnormal_table_status'?: string;
    public results?: Array<object>;
    public constructor() { 
    }
    public withSubRuleId(subRuleId: string): SubInstanceResult {
        this['sub_rule_id'] = subRuleId;
        return this;
    }
    public set subRuleId(subRuleId: string  | undefined) {
        this['sub_rule_id'] = subRuleId;
    }
    public get subRuleId(): string | undefined {
        return this['sub_rule_id'];
    }
    public withSubInstanceInstanceId(subInstanceInstanceId: string): SubInstanceResult {
        this['sub_instance_instance_id'] = subInstanceInstanceId;
        return this;
    }
    public set subInstanceInstanceId(subInstanceInstanceId: string  | undefined) {
        this['sub_instance_instance_id'] = subInstanceInstanceId;
    }
    public get subInstanceInstanceId(): string | undefined {
        return this['sub_instance_instance_id'];
    }
    public withAbnormalTableStatus(abnormalTableStatus: string): SubInstanceResult {
        this['abnormal_table_status'] = abnormalTableStatus;
        return this;
    }
    public set abnormalTableStatus(abnormalTableStatus: string  | undefined) {
        this['abnormal_table_status'] = abnormalTableStatus;
    }
    public get abnormalTableStatus(): string | undefined {
        return this['abnormal_table_status'];
    }
    public withResults(results: Array<object>): SubInstanceResult {
        this['results'] = results;
        return this;
    }
}