

export class RecordParam {
    private 'record_rule_id': string | undefined;
    public constructor(recordRuleId?: any) { 
        this['record_rule_id'] = recordRuleId;
    }
    public withRecordRuleId(recordRuleId: string): RecordParam {
        this['record_rule_id'] = recordRuleId;
        return this;
    }
    public set recordRuleId(recordRuleId: string | undefined) {
        this['record_rule_id'] = recordRuleId;
    }
    public get recordRuleId() {
        return this['record_rule_id'];
    }
}