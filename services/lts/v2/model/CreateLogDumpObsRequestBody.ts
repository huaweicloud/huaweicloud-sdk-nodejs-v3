

export class CreateLogDumpObsRequestBody {
    private 'log_group_id'?: string;
    private 'log_stream_ids'?: Array<string>;
    private 'obs_bucket_name'?: string;
    public type?: string;
    private 'storage_format'?: string;
    private 'switch_on'?: boolean;
    private 'prefix_name'?: string;
    private 'dir_prefix_name'?: string;
    public period?: number;
    private 'period_unit'?: string;
    public constructor(logGroupId?: string, logStreamIds?: Array<string>, obsBucketName?: string, type?: string, storageFormat?: string, period?: number, periodUnit?: string) { 
        this['log_group_id'] = logGroupId;
        this['log_stream_ids'] = logStreamIds;
        this['obs_bucket_name'] = obsBucketName;
        this['type'] = type;
        this['storage_format'] = storageFormat;
        this['period'] = period;
        this['period_unit'] = periodUnit;
    }
    public withLogGroupId(logGroupId: string): CreateLogDumpObsRequestBody {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withLogStreamIds(logStreamIds: Array<string>): CreateLogDumpObsRequestBody {
        this['log_stream_ids'] = logStreamIds;
        return this;
    }
    public set logStreamIds(logStreamIds: Array<string>  | undefined) {
        this['log_stream_ids'] = logStreamIds;
    }
    public get logStreamIds(): Array<string> | undefined {
        return this['log_stream_ids'];
    }
    public withObsBucketName(obsBucketName: string): CreateLogDumpObsRequestBody {
        this['obs_bucket_name'] = obsBucketName;
        return this;
    }
    public set obsBucketName(obsBucketName: string  | undefined) {
        this['obs_bucket_name'] = obsBucketName;
    }
    public get obsBucketName(): string | undefined {
        return this['obs_bucket_name'];
    }
    public withType(type: string): CreateLogDumpObsRequestBody {
        this['type'] = type;
        return this;
    }
    public withStorageFormat(storageFormat: string): CreateLogDumpObsRequestBody {
        this['storage_format'] = storageFormat;
        return this;
    }
    public set storageFormat(storageFormat: string  | undefined) {
        this['storage_format'] = storageFormat;
    }
    public get storageFormat(): string | undefined {
        return this['storage_format'];
    }
    public withSwitchOn(switchOn: boolean): CreateLogDumpObsRequestBody {
        this['switch_on'] = switchOn;
        return this;
    }
    public set switchOn(switchOn: boolean  | undefined) {
        this['switch_on'] = switchOn;
    }
    public get switchOn(): boolean | undefined {
        return this['switch_on'];
    }
    public withPrefixName(prefixName: string): CreateLogDumpObsRequestBody {
        this['prefix_name'] = prefixName;
        return this;
    }
    public set prefixName(prefixName: string  | undefined) {
        this['prefix_name'] = prefixName;
    }
    public get prefixName(): string | undefined {
        return this['prefix_name'];
    }
    public withDirPrefixName(dirPrefixName: string): CreateLogDumpObsRequestBody {
        this['dir_prefix_name'] = dirPrefixName;
        return this;
    }
    public set dirPrefixName(dirPrefixName: string  | undefined) {
        this['dir_prefix_name'] = dirPrefixName;
    }
    public get dirPrefixName(): string | undefined {
        return this['dir_prefix_name'];
    }
    public withPeriod(period: number): CreateLogDumpObsRequestBody {
        this['period'] = period;
        return this;
    }
    public withPeriodUnit(periodUnit: string): CreateLogDumpObsRequestBody {
        this['period_unit'] = periodUnit;
        return this;
    }
    public set periodUnit(periodUnit: string  | undefined) {
        this['period_unit'] = periodUnit;
    }
    public get periodUnit(): string | undefined {
        return this['period_unit'];
    }
}