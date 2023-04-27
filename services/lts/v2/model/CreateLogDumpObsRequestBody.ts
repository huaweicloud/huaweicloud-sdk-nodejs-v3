

export class CreateLogDumpObsRequestBody {
    private 'log_group_id': string | undefined;
    private 'log_stream_ids': Array<string> | undefined;
    private 'obs_bucket_name': string | undefined;
    public type: string;
    private 'storage_format': string | undefined;
    private 'switch_on'?: boolean | undefined;
    private 'prefix_name'?: string | undefined;
    private 'dir_prefix_name'?: string | undefined;
    public period: number;
    private 'period_unit': string | undefined;
    public constructor(logGroupId?: any, logStreamIds?: any, obsBucketName?: any, type?: any, storageFormat?: any, period?: any, periodUnit?: any) { 
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
    public set logGroupId(logGroupId: string | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId() {
        return this['log_group_id'];
    }
    public withLogStreamIds(logStreamIds: Array<string>): CreateLogDumpObsRequestBody {
        this['log_stream_ids'] = logStreamIds;
        return this;
    }
    public set logStreamIds(logStreamIds: Array<string> | undefined) {
        this['log_stream_ids'] = logStreamIds;
    }
    public get logStreamIds() {
        return this['log_stream_ids'];
    }
    public withObsBucketName(obsBucketName: string): CreateLogDumpObsRequestBody {
        this['obs_bucket_name'] = obsBucketName;
        return this;
    }
    public set obsBucketName(obsBucketName: string | undefined) {
        this['obs_bucket_name'] = obsBucketName;
    }
    public get obsBucketName() {
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
    public set storageFormat(storageFormat: string | undefined) {
        this['storage_format'] = storageFormat;
    }
    public get storageFormat() {
        return this['storage_format'];
    }
    public withSwitchOn(switchOn: boolean): CreateLogDumpObsRequestBody {
        this['switch_on'] = switchOn;
        return this;
    }
    public set switchOn(switchOn: boolean | undefined) {
        this['switch_on'] = switchOn;
    }
    public get switchOn() {
        return this['switch_on'];
    }
    public withPrefixName(prefixName: string): CreateLogDumpObsRequestBody {
        this['prefix_name'] = prefixName;
        return this;
    }
    public set prefixName(prefixName: string | undefined) {
        this['prefix_name'] = prefixName;
    }
    public get prefixName() {
        return this['prefix_name'];
    }
    public withDirPrefixName(dirPrefixName: string): CreateLogDumpObsRequestBody {
        this['dir_prefix_name'] = dirPrefixName;
        return this;
    }
    public set dirPrefixName(dirPrefixName: string | undefined) {
        this['dir_prefix_name'] = dirPrefixName;
    }
    public get dirPrefixName() {
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
    public set periodUnit(periodUnit: string | undefined) {
        this['period_unit'] = periodUnit;
    }
    public get periodUnit() {
        return this['period_unit'];
    }
}