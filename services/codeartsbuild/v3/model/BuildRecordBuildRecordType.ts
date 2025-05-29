

export class BuildRecordBuildRecordType {
    public rerun?: boolean;
    private 'trigger_type'?: string;
    private 'record_type'?: string;
    private 'is_rerun'?: boolean;
    public constructor() { 
    }
    public withRerun(rerun: boolean): BuildRecordBuildRecordType {
        this['rerun'] = rerun;
        return this;
    }
    public withTriggerType(triggerType: string): BuildRecordBuildRecordType {
        this['trigger_type'] = triggerType;
        return this;
    }
    public set triggerType(triggerType: string  | undefined) {
        this['trigger_type'] = triggerType;
    }
    public get triggerType(): string | undefined {
        return this['trigger_type'];
    }
    public withRecordType(recordType: string): BuildRecordBuildRecordType {
        this['record_type'] = recordType;
        return this;
    }
    public set recordType(recordType: string  | undefined) {
        this['record_type'] = recordType;
    }
    public get recordType(): string | undefined {
        return this['record_type'];
    }
    public withIsRerun(isRerun: boolean): BuildRecordBuildRecordType {
        this['is_rerun'] = isRerun;
        return this;
    }
    public set isRerun(isRerun: boolean  | undefined) {
        this['is_rerun'] = isRerun;
    }
    public get isRerun(): boolean | undefined {
        return this['is_rerun'];
    }
}