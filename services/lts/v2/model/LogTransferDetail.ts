

export class LogTransferDetail {
    private 'obs_period'?: number;
    private 'obs_period_unit'?: string;
    private 'obs_bucket_name'?: string;
    private 'obs_encrypted_id'?: string;
    private 'obs_dir_pre_fix_name'?: string;
    private 'obs_prefix_name'?: string;
    private 'obs_time_zone'?: string;
    private 'obs_time_zone_id'?: string;
    private 'dis_id'?: string;
    private 'dis_name'?: string;
    private 'kafka_id'?: string;
    private 'kafka_topic'?: string;
    private 'obs_eps_id'?: string;
    private 'obs_encrypted_enable'?: boolean;
    public tags?: Array<string>;
    private 'lts_tags'?: Array<string>;
    private 'stream_tags'?: Array<string>;
    private 'struct_fields'?: Array<string>;
    private 'invalid_field_value'?: string;
    public constructor(obsPeriod?: number, obsPeriodUnit?: string, obsBucketName?: string) { 
        this['obs_period'] = obsPeriod;
        this['obs_period_unit'] = obsPeriodUnit;
        this['obs_bucket_name'] = obsBucketName;
    }
    public withObsPeriod(obsPeriod: number): LogTransferDetail {
        this['obs_period'] = obsPeriod;
        return this;
    }
    public set obsPeriod(obsPeriod: number  | undefined) {
        this['obs_period'] = obsPeriod;
    }
    public get obsPeriod(): number | undefined {
        return this['obs_period'];
    }
    public withObsPeriodUnit(obsPeriodUnit: string): LogTransferDetail {
        this['obs_period_unit'] = obsPeriodUnit;
        return this;
    }
    public set obsPeriodUnit(obsPeriodUnit: string  | undefined) {
        this['obs_period_unit'] = obsPeriodUnit;
    }
    public get obsPeriodUnit(): string | undefined {
        return this['obs_period_unit'];
    }
    public withObsBucketName(obsBucketName: string): LogTransferDetail {
        this['obs_bucket_name'] = obsBucketName;
        return this;
    }
    public set obsBucketName(obsBucketName: string  | undefined) {
        this['obs_bucket_name'] = obsBucketName;
    }
    public get obsBucketName(): string | undefined {
        return this['obs_bucket_name'];
    }
    public withObsEncryptedId(obsEncryptedId: string): LogTransferDetail {
        this['obs_encrypted_id'] = obsEncryptedId;
        return this;
    }
    public set obsEncryptedId(obsEncryptedId: string  | undefined) {
        this['obs_encrypted_id'] = obsEncryptedId;
    }
    public get obsEncryptedId(): string | undefined {
        return this['obs_encrypted_id'];
    }
    public withObsDirPreFixName(obsDirPreFixName: string): LogTransferDetail {
        this['obs_dir_pre_fix_name'] = obsDirPreFixName;
        return this;
    }
    public set obsDirPreFixName(obsDirPreFixName: string  | undefined) {
        this['obs_dir_pre_fix_name'] = obsDirPreFixName;
    }
    public get obsDirPreFixName(): string | undefined {
        return this['obs_dir_pre_fix_name'];
    }
    public withObsPrefixName(obsPrefixName: string): LogTransferDetail {
        this['obs_prefix_name'] = obsPrefixName;
        return this;
    }
    public set obsPrefixName(obsPrefixName: string  | undefined) {
        this['obs_prefix_name'] = obsPrefixName;
    }
    public get obsPrefixName(): string | undefined {
        return this['obs_prefix_name'];
    }
    public withObsTimeZone(obsTimeZone: string): LogTransferDetail {
        this['obs_time_zone'] = obsTimeZone;
        return this;
    }
    public set obsTimeZone(obsTimeZone: string  | undefined) {
        this['obs_time_zone'] = obsTimeZone;
    }
    public get obsTimeZone(): string | undefined {
        return this['obs_time_zone'];
    }
    public withObsTimeZoneId(obsTimeZoneId: string): LogTransferDetail {
        this['obs_time_zone_id'] = obsTimeZoneId;
        return this;
    }
    public set obsTimeZoneId(obsTimeZoneId: string  | undefined) {
        this['obs_time_zone_id'] = obsTimeZoneId;
    }
    public get obsTimeZoneId(): string | undefined {
        return this['obs_time_zone_id'];
    }
    public withDisId(disId: string): LogTransferDetail {
        this['dis_id'] = disId;
        return this;
    }
    public set disId(disId: string  | undefined) {
        this['dis_id'] = disId;
    }
    public get disId(): string | undefined {
        return this['dis_id'];
    }
    public withDisName(disName: string): LogTransferDetail {
        this['dis_name'] = disName;
        return this;
    }
    public set disName(disName: string  | undefined) {
        this['dis_name'] = disName;
    }
    public get disName(): string | undefined {
        return this['dis_name'];
    }
    public withKafkaId(kafkaId: string): LogTransferDetail {
        this['kafka_id'] = kafkaId;
        return this;
    }
    public set kafkaId(kafkaId: string  | undefined) {
        this['kafka_id'] = kafkaId;
    }
    public get kafkaId(): string | undefined {
        return this['kafka_id'];
    }
    public withKafkaTopic(kafkaTopic: string): LogTransferDetail {
        this['kafka_topic'] = kafkaTopic;
        return this;
    }
    public set kafkaTopic(kafkaTopic: string  | undefined) {
        this['kafka_topic'] = kafkaTopic;
    }
    public get kafkaTopic(): string | undefined {
        return this['kafka_topic'];
    }
    public withObsEpsId(obsEpsId: string): LogTransferDetail {
        this['obs_eps_id'] = obsEpsId;
        return this;
    }
    public set obsEpsId(obsEpsId: string  | undefined) {
        this['obs_eps_id'] = obsEpsId;
    }
    public get obsEpsId(): string | undefined {
        return this['obs_eps_id'];
    }
    public withObsEncryptedEnable(obsEncryptedEnable: boolean): LogTransferDetail {
        this['obs_encrypted_enable'] = obsEncryptedEnable;
        return this;
    }
    public set obsEncryptedEnable(obsEncryptedEnable: boolean  | undefined) {
        this['obs_encrypted_enable'] = obsEncryptedEnable;
    }
    public get obsEncryptedEnable(): boolean | undefined {
        return this['obs_encrypted_enable'];
    }
    public withTags(tags: Array<string>): LogTransferDetail {
        this['tags'] = tags;
        return this;
    }
    public withLtsTags(ltsTags: Array<string>): LogTransferDetail {
        this['lts_tags'] = ltsTags;
        return this;
    }
    public set ltsTags(ltsTags: Array<string>  | undefined) {
        this['lts_tags'] = ltsTags;
    }
    public get ltsTags(): Array<string> | undefined {
        return this['lts_tags'];
    }
    public withStreamTags(streamTags: Array<string>): LogTransferDetail {
        this['stream_tags'] = streamTags;
        return this;
    }
    public set streamTags(streamTags: Array<string>  | undefined) {
        this['stream_tags'] = streamTags;
    }
    public get streamTags(): Array<string> | undefined {
        return this['stream_tags'];
    }
    public withStructFields(structFields: Array<string>): LogTransferDetail {
        this['struct_fields'] = structFields;
        return this;
    }
    public set structFields(structFields: Array<string>  | undefined) {
        this['struct_fields'] = structFields;
    }
    public get structFields(): Array<string> | undefined {
        return this['struct_fields'];
    }
    public withInvalidFieldValue(invalidFieldValue: string): LogTransferDetail {
        this['invalid_field_value'] = invalidFieldValue;
        return this;
    }
    public set invalidFieldValue(invalidFieldValue: string  | undefined) {
        this['invalid_field_value'] = invalidFieldValue;
    }
    public get invalidFieldValue(): string | undefined {
        return this['invalid_field_value'];
    }
}