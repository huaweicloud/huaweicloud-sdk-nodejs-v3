

export class RecordAuditRule {
    private 'record_type'?: string;
    private 'interval_record_start_time'?: string;
    private 'interval_record_end_time'?: string;
    private 'op_type'?: string;
    private 'audio_record'?: boolean;
    public fps?: string;
    public duration?: string;
    public resolution?: string;
    private 'event_enable'?: boolean;
    private 'file_suffix'?: string;
    private 'regit_paths'?: string;
    public constructor() { 
    }
    public withRecordType(recordType: string): RecordAuditRule {
        this['record_type'] = recordType;
        return this;
    }
    public set recordType(recordType: string  | undefined) {
        this['record_type'] = recordType;
    }
    public get recordType(): string | undefined {
        return this['record_type'];
    }
    public withIntervalRecordStartTime(intervalRecordStartTime: string): RecordAuditRule {
        this['interval_record_start_time'] = intervalRecordStartTime;
        return this;
    }
    public set intervalRecordStartTime(intervalRecordStartTime: string  | undefined) {
        this['interval_record_start_time'] = intervalRecordStartTime;
    }
    public get intervalRecordStartTime(): string | undefined {
        return this['interval_record_start_time'];
    }
    public withIntervalRecordEndTime(intervalRecordEndTime: string): RecordAuditRule {
        this['interval_record_end_time'] = intervalRecordEndTime;
        return this;
    }
    public set intervalRecordEndTime(intervalRecordEndTime: string  | undefined) {
        this['interval_record_end_time'] = intervalRecordEndTime;
    }
    public get intervalRecordEndTime(): string | undefined {
        return this['interval_record_end_time'];
    }
    public withOpType(opType: string): RecordAuditRule {
        this['op_type'] = opType;
        return this;
    }
    public set opType(opType: string  | undefined) {
        this['op_type'] = opType;
    }
    public get opType(): string | undefined {
        return this['op_type'];
    }
    public withAudioRecord(audioRecord: boolean): RecordAuditRule {
        this['audio_record'] = audioRecord;
        return this;
    }
    public set audioRecord(audioRecord: boolean  | undefined) {
        this['audio_record'] = audioRecord;
    }
    public get audioRecord(): boolean | undefined {
        return this['audio_record'];
    }
    public withFps(fps: string): RecordAuditRule {
        this['fps'] = fps;
        return this;
    }
    public withDuration(duration: string): RecordAuditRule {
        this['duration'] = duration;
        return this;
    }
    public withResolution(resolution: string): RecordAuditRule {
        this['resolution'] = resolution;
        return this;
    }
    public withEventEnable(eventEnable: boolean): RecordAuditRule {
        this['event_enable'] = eventEnable;
        return this;
    }
    public set eventEnable(eventEnable: boolean  | undefined) {
        this['event_enable'] = eventEnable;
    }
    public get eventEnable(): boolean | undefined {
        return this['event_enable'];
    }
    public withFileSuffix(fileSuffix: string): RecordAuditRule {
        this['file_suffix'] = fileSuffix;
        return this;
    }
    public set fileSuffix(fileSuffix: string  | undefined) {
        this['file_suffix'] = fileSuffix;
    }
    public get fileSuffix(): string | undefined {
        return this['file_suffix'];
    }
    public withRegitPaths(regitPaths: string): RecordAuditRule {
        this['regit_paths'] = regitPaths;
        return this;
    }
    public set regitPaths(regitPaths: string  | undefined) {
        this['regit_paths'] = regitPaths;
    }
    public get regitPaths(): string | undefined {
        return this['regit_paths'];
    }
}