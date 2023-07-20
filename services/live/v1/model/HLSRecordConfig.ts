

export class HLSRecordConfig {
    private 'record_cycle'?: number;
    private 'record_prefix'?: string;
    private 'record_ts_prefix'?: string;
    private 'record_slice_duration'?: number;
    private 'record_max_duration_to_merge_file'?: number;
    public constructor(recordCycle?: number) { 
        this['record_cycle'] = recordCycle;
    }
    public withRecordCycle(recordCycle: number): HLSRecordConfig {
        this['record_cycle'] = recordCycle;
        return this;
    }
    public set recordCycle(recordCycle: number  | undefined) {
        this['record_cycle'] = recordCycle;
    }
    public get recordCycle(): number | undefined {
        return this['record_cycle'];
    }
    public withRecordPrefix(recordPrefix: string): HLSRecordConfig {
        this['record_prefix'] = recordPrefix;
        return this;
    }
    public set recordPrefix(recordPrefix: string  | undefined) {
        this['record_prefix'] = recordPrefix;
    }
    public get recordPrefix(): string | undefined {
        return this['record_prefix'];
    }
    public withRecordTsPrefix(recordTsPrefix: string): HLSRecordConfig {
        this['record_ts_prefix'] = recordTsPrefix;
        return this;
    }
    public set recordTsPrefix(recordTsPrefix: string  | undefined) {
        this['record_ts_prefix'] = recordTsPrefix;
    }
    public get recordTsPrefix(): string | undefined {
        return this['record_ts_prefix'];
    }
    public withRecordSliceDuration(recordSliceDuration: number): HLSRecordConfig {
        this['record_slice_duration'] = recordSliceDuration;
        return this;
    }
    public set recordSliceDuration(recordSliceDuration: number  | undefined) {
        this['record_slice_duration'] = recordSliceDuration;
    }
    public get recordSliceDuration(): number | undefined {
        return this['record_slice_duration'];
    }
    public withRecordMaxDurationToMergeFile(recordMaxDurationToMergeFile: number): HLSRecordConfig {
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