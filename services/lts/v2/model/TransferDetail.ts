

export class TransferDetail {
    private 'obs_period': TransferDetailObsPeriodEnum | undefined;
    private 'obs_encrypted_id'?: string | undefined;
    private 'obs_prefix_name'?: string | undefined;
    private 'obs_period_unit': string | undefined;
    private 'obs_transfer_path'?: string | undefined;
    private 'obs_eps_id'?: string | undefined;
    private 'obs_bucket_name': string | undefined;
    private 'obs_encrypted_enable'?: boolean | undefined;
    private 'obs_dir_pre_fix_name'?: string | undefined;
    private 'dis_id'?: string | undefined;
    private 'dis_name'?: string | undefined;
    private 'kafka_id'?: string | undefined;
    private 'kafka_topic'?: string | undefined;
    private 'obs_time_zone'?: string | undefined;
    private 'obs_time_zone_id'?: string | undefined;
    public tags?: Array<string>;
    public constructor(obsPeriod?: any, obsPeriodUnit?: any, obsBucketName?: any) { 
        this['obs_period'] = obsPeriod;
        this['obs_period_unit'] = obsPeriodUnit;
        this['obs_bucket_name'] = obsBucketName;
    }
    public withObsPeriod(obsPeriod: TransferDetailObsPeriodEnum): TransferDetail {
        this['obs_period'] = obsPeriod;
        return this;
    }
    public set obsPeriod(obsPeriod: TransferDetailObsPeriodEnum | undefined) {
        this['obs_period'] = obsPeriod;
    }
    public get obsPeriod() {
        return this['obs_period'];
    }
    public withObsEncryptedId(obsEncryptedId: string): TransferDetail {
        this['obs_encrypted_id'] = obsEncryptedId;
        return this;
    }
    public set obsEncryptedId(obsEncryptedId: string | undefined) {
        this['obs_encrypted_id'] = obsEncryptedId;
    }
    public get obsEncryptedId() {
        return this['obs_encrypted_id'];
    }
    public withObsPrefixName(obsPrefixName: string): TransferDetail {
        this['obs_prefix_name'] = obsPrefixName;
        return this;
    }
    public set obsPrefixName(obsPrefixName: string | undefined) {
        this['obs_prefix_name'] = obsPrefixName;
    }
    public get obsPrefixName() {
        return this['obs_prefix_name'];
    }
    public withObsPeriodUnit(obsPeriodUnit: string): TransferDetail {
        this['obs_period_unit'] = obsPeriodUnit;
        return this;
    }
    public set obsPeriodUnit(obsPeriodUnit: string | undefined) {
        this['obs_period_unit'] = obsPeriodUnit;
    }
    public get obsPeriodUnit() {
        return this['obs_period_unit'];
    }
    public withObsTransferPath(obsTransferPath: string): TransferDetail {
        this['obs_transfer_path'] = obsTransferPath;
        return this;
    }
    public set obsTransferPath(obsTransferPath: string | undefined) {
        this['obs_transfer_path'] = obsTransferPath;
    }
    public get obsTransferPath() {
        return this['obs_transfer_path'];
    }
    public withObsEpsId(obsEpsId: string): TransferDetail {
        this['obs_eps_id'] = obsEpsId;
        return this;
    }
    public set obsEpsId(obsEpsId: string | undefined) {
        this['obs_eps_id'] = obsEpsId;
    }
    public get obsEpsId() {
        return this['obs_eps_id'];
    }
    public withObsBucketName(obsBucketName: string): TransferDetail {
        this['obs_bucket_name'] = obsBucketName;
        return this;
    }
    public set obsBucketName(obsBucketName: string | undefined) {
        this['obs_bucket_name'] = obsBucketName;
    }
    public get obsBucketName() {
        return this['obs_bucket_name'];
    }
    public withObsEncryptedEnable(obsEncryptedEnable: boolean): TransferDetail {
        this['obs_encrypted_enable'] = obsEncryptedEnable;
        return this;
    }
    public set obsEncryptedEnable(obsEncryptedEnable: boolean | undefined) {
        this['obs_encrypted_enable'] = obsEncryptedEnable;
    }
    public get obsEncryptedEnable() {
        return this['obs_encrypted_enable'];
    }
    public withObsDirPreFixName(obsDirPreFixName: string): TransferDetail {
        this['obs_dir_pre_fix_name'] = obsDirPreFixName;
        return this;
    }
    public set obsDirPreFixName(obsDirPreFixName: string | undefined) {
        this['obs_dir_pre_fix_name'] = obsDirPreFixName;
    }
    public get obsDirPreFixName() {
        return this['obs_dir_pre_fix_name'];
    }
    public withDisId(disId: string): TransferDetail {
        this['dis_id'] = disId;
        return this;
    }
    public set disId(disId: string | undefined) {
        this['dis_id'] = disId;
    }
    public get disId() {
        return this['dis_id'];
    }
    public withDisName(disName: string): TransferDetail {
        this['dis_name'] = disName;
        return this;
    }
    public set disName(disName: string | undefined) {
        this['dis_name'] = disName;
    }
    public get disName() {
        return this['dis_name'];
    }
    public withKafkaId(kafkaId: string): TransferDetail {
        this['kafka_id'] = kafkaId;
        return this;
    }
    public set kafkaId(kafkaId: string | undefined) {
        this['kafka_id'] = kafkaId;
    }
    public get kafkaId() {
        return this['kafka_id'];
    }
    public withKafkaTopic(kafkaTopic: string): TransferDetail {
        this['kafka_topic'] = kafkaTopic;
        return this;
    }
    public set kafkaTopic(kafkaTopic: string | undefined) {
        this['kafka_topic'] = kafkaTopic;
    }
    public get kafkaTopic() {
        return this['kafka_topic'];
    }
    public withObsTimeZone(obsTimeZone: string): TransferDetail {
        this['obs_time_zone'] = obsTimeZone;
        return this;
    }
    public set obsTimeZone(obsTimeZone: string | undefined) {
        this['obs_time_zone'] = obsTimeZone;
    }
    public get obsTimeZone() {
        return this['obs_time_zone'];
    }
    public withObsTimeZoneId(obsTimeZoneId: string): TransferDetail {
        this['obs_time_zone_id'] = obsTimeZoneId;
        return this;
    }
    public set obsTimeZoneId(obsTimeZoneId: string | undefined) {
        this['obs_time_zone_id'] = obsTimeZoneId;
    }
    public get obsTimeZoneId() {
        return this['obs_time_zone_id'];
    }
    public withTags(tags: Array<string>): TransferDetail {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TransferDetailObsPeriodEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_5 = 5,
    NUMBER_6 = 6,
    NUMBER_12 = 12,
    NUMBER_30 = 30
}
