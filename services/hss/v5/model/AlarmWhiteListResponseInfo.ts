

export class AlarmWhiteListResponseInfo {
    private 'enterprise_project_name'?: string;
    public hash?: string;
    public description?: string;
    private 'event_type'?: number;
    private 'white_field'?: string;
    private 'field_value'?: string;
    private 'judge_type'?: string;
    private 'update_time'?: number;
    public constructor() { 
    }
    public withEnterpriseProjectName(enterpriseProjectName: string): AlarmWhiteListResponseInfo {
        this['enterprise_project_name'] = enterpriseProjectName;
        return this;
    }
    public set enterpriseProjectName(enterpriseProjectName: string  | undefined) {
        this['enterprise_project_name'] = enterpriseProjectName;
    }
    public get enterpriseProjectName(): string | undefined {
        return this['enterprise_project_name'];
    }
    public withHash(hash: string): AlarmWhiteListResponseInfo {
        this['hash'] = hash;
        return this;
    }
    public withDescription(description: string): AlarmWhiteListResponseInfo {
        this['description'] = description;
        return this;
    }
    public withEventType(eventType: number): AlarmWhiteListResponseInfo {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: number  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): number | undefined {
        return this['event_type'];
    }
    public withWhiteField(whiteField: string): AlarmWhiteListResponseInfo {
        this['white_field'] = whiteField;
        return this;
    }
    public set whiteField(whiteField: string  | undefined) {
        this['white_field'] = whiteField;
    }
    public get whiteField(): string | undefined {
        return this['white_field'];
    }
    public withFieldValue(fieldValue: string): AlarmWhiteListResponseInfo {
        this['field_value'] = fieldValue;
        return this;
    }
    public set fieldValue(fieldValue: string  | undefined) {
        this['field_value'] = fieldValue;
    }
    public get fieldValue(): string | undefined {
        return this['field_value'];
    }
    public withJudgeType(judgeType: string): AlarmWhiteListResponseInfo {
        this['judge_type'] = judgeType;
        return this;
    }
    public set judgeType(judgeType: string  | undefined) {
        this['judge_type'] = judgeType;
    }
    public get judgeType(): string | undefined {
        return this['judge_type'];
    }
    public withUpdateTime(updateTime: number): AlarmWhiteListResponseInfo {
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