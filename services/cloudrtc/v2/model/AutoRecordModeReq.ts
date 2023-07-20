

export class AutoRecordModeReq {
    public mode?: AutoRecordModeReqModeEnum | string;
    private 'record_rule_id'?: string;
    public constructor(mode?: string) { 
        this['mode'] = mode;
    }
    public withMode(mode: AutoRecordModeReqModeEnum | string): AutoRecordModeReq {
        this['mode'] = mode;
        return this;
    }
    public withRecordRuleId(recordRuleId: string): AutoRecordModeReq {
        this['record_rule_id'] = recordRuleId;
        return this;
    }
    public set recordRuleId(recordRuleId: string  | undefined) {
        this['record_rule_id'] = recordRuleId;
    }
    public get recordRuleId(): string | undefined {
        return this['record_rule_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AutoRecordModeReqModeEnum {
    AUTO_RECORD_OFF = 'AUTO_RECORD_OFF',
    AUTO_INDIVIDUAL_RECORD = 'AUTO_INDIVIDUAL_RECORD'
}
