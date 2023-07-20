

export class MP4RecordConfig {
    private 'record_cycle'?: number;
    private 'record_prefix'?: string;
    private 'record_max_duration_to_merge_file'?: number;
    public constructor(recordCycle?: number) { 
        this['record_cycle'] = recordCycle;
    }
    public withRecordCycle(recordCycle: number): MP4RecordConfig {
        this['record_cycle'] = recordCycle;
        return this;
    }
    public set recordCycle(recordCycle: number  | undefined) {
        this['record_cycle'] = recordCycle;
    }
    public get recordCycle(): number | undefined {
        return this['record_cycle'];
    }
    public withRecordPrefix(recordPrefix: string): MP4RecordConfig {
        this['record_prefix'] = recordPrefix;
        return this;
    }
    public set recordPrefix(recordPrefix: string  | undefined) {
        this['record_prefix'] = recordPrefix;
    }
    public get recordPrefix(): string | undefined {
        return this['record_prefix'];
    }
    public withRecordMaxDurationToMergeFile(recordMaxDurationToMergeFile: number): MP4RecordConfig {
        this['record_max_duration_to_merge_file'] = recordMaxDurationToMergeFile;
        return this;
    }
    public set recordMaxDurationToMergeFile(recordMaxDurationToMergeFile: number  | undefined) {
        this['record_max_duration_to_merge_file'] = recordMaxDurationToMergeFile;
    }
    public get recordMaxDurationToMergeFile(): number | undefined {
        return this['record_max_duration_to_merge_file'];
    }
}