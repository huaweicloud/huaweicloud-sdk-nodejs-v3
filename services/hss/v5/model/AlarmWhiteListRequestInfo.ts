

export class AlarmWhiteListRequestInfo {
    private 'event_type'?: number;
    public hash?: string;
    public description?: string;
    private 'delete_white_rule'?: boolean;
    private 'white_field'?: string;
    private 'judge_type'?: string;
    private 'field_value'?: string;
    private 'file_hash'?: string;
    private 'file_path'?: string;
    public constructor() { 
    }
    public withEventType(eventType: number): AlarmWhiteListRequestInfo {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: number  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): number | undefined {
        return this['event_type'];
    }
    public withHash(hash: string): AlarmWhiteListRequestInfo {
        this['hash'] = hash;
        return this;
    }
    public withDescription(description: string): AlarmWhiteListRequestInfo {
        this['description'] = description;
        return this;
    }
    public withDeleteWhiteRule(deleteWhiteRule: boolean): AlarmWhiteListRequestInfo {
        this['delete_white_rule'] = deleteWhiteRule;
        return this;
    }
    public set deleteWhiteRule(deleteWhiteRule: boolean  | undefined) {
        this['delete_white_rule'] = deleteWhiteRule;
    }
    public get deleteWhiteRule(): boolean | undefined {
        return this['delete_white_rule'];
    }
    public withWhiteField(whiteField: string): AlarmWhiteListRequestInfo {
        this['white_field'] = whiteField;
        return this;
    }
    public set whiteField(whiteField: string  | undefined) {
        this['white_field'] = whiteField;
    }
    public get whiteField(): string | undefined {
        return this['white_field'];
    }
    public withJudgeType(judgeType: string): AlarmWhiteListRequestInfo {
        this['judge_type'] = judgeType;
        return this;
    }
    public set judgeType(judgeType: string  | undefined) {
        this['judge_type'] = judgeType;
    }
    public get judgeType(): string | undefined {
        return this['judge_type'];
    }
    public withFieldValue(fieldValue: string): AlarmWhiteListRequestInfo {
        this['field_value'] = fieldValue;
        return this;
    }
    public set fieldValue(fieldValue: string  | undefined) {
        this['field_value'] = fieldValue;
    }
    public get fieldValue(): string | undefined {
        return this['field_value'];
    }
    public withFileHash(fileHash: string): AlarmWhiteListRequestInfo {
        this['file_hash'] = fileHash;
        return this;
    }
    public set fileHash(fileHash: string  | undefined) {
        this['file_hash'] = fileHash;
    }
    public get fileHash(): string | undefined {
        return this['file_hash'];
    }
    public withFilePath(filePath: string): AlarmWhiteListRequestInfo {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
}