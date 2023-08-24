

export class BackupTriggerPropertiesInfo {
    public pattern?: Array<string>;
    private 'start_time'?: string;
    public constructor() { 
    }
    public withPattern(pattern: Array<string>): BackupTriggerPropertiesInfo {
        this['pattern'] = pattern;
        return this;
    }
    public withStartTime(startTime: string): BackupTriggerPropertiesInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
}