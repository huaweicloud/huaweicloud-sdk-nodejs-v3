

export class EventWhiteRuleListRequestInfo {
    private 'event_type'?: number;
    private 'field_key'?: string;
    private 'field_value'?: string;
    private 'judge_type'?: string;
    public constructor(eventType?: number, fieldKey?: string, fieldValue?: string, judgeType?: string) { 
        this['event_type'] = eventType;
        this['field_key'] = fieldKey;
        this['field_value'] = fieldValue;
        this['judge_type'] = judgeType;
    }
    public withEventType(eventType: number): EventWhiteRuleListRequestInfo {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: number  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): number | undefined {
        return this['event_type'];
    }
    public withFieldKey(fieldKey: string): EventWhiteRuleListRequestInfo {
        this['field_key'] = fieldKey;
        return this;
    }
    public set fieldKey(fieldKey: string  | undefined) {
        this['field_key'] = fieldKey;
    }
    public get fieldKey(): string | undefined {
        return this['field_key'];
    }
    public withFieldValue(fieldValue: string): EventWhiteRuleListRequestInfo {
        this['field_value'] = fieldValue;
        return this;
    }
    public set fieldValue(fieldValue: string  | undefined) {
        this['field_value'] = fieldValue;
    }
    public get fieldValue(): string | undefined {
        return this['field_value'];
    }
    public withJudgeType(judgeType: string): EventWhiteRuleListRequestInfo {
        this['judge_type'] = judgeType;
        return this;
    }
    public set judgeType(judgeType: string  | undefined) {
        this['judge_type'] = judgeType;
    }
    public get judgeType(): string | undefined {
        return this['judge_type'];
    }
}