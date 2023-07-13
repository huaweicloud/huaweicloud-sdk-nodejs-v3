

export class AppAutoRecordMode {
    public mode: AppAutoRecordModeModeEnum;
    private 'record_rule_id'?: string | undefined;
    private 'update_time'?: string | undefined;
    public constructor(mode?: any) { 
        this['mode'] = mode;
    }
    public withMode(mode: AppAutoRecordModeModeEnum): AppAutoRecordMode {
        this['mode'] = mode;
        return this;
    }
    public withRecordRuleId(recordRuleId: string): AppAutoRecordMode {
        this['record_rule_id'] = recordRuleId;
        return this;
    }
    public set recordRuleId(recordRuleId: string | undefined) {
        this['record_rule_id'] = recordRuleId;
    }
    public get recordRuleId() {
        return this['record_rule_id'];
    }
    public withUpdateTime(updateTime: string): AppAutoRecordMode {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime() {
        return this['update_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AppAutoRecordModeModeEnum {
    AUTO_RECORD_OFF = 'AUTO_RECORD_OFF',
    AUTO_INDIVIDUAL_RECORD = 'AUTO_INDIVIDUAL_RECORD'
}
