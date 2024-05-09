

export class ReplayConfigInfo {
    private 'db_instance_id'?: string;
    private 'cloud_type'?: ReplayConfigInfoCloudTypeEnum | string;
    public ak?: string;
    public sk?: string;
    private 'db_source'?: ReplayConfigInfoDbSourceEnum | string;
    public region?: string;
    private 'traffic_source'?: string;
    public constructor(dbInstanceId?: string, cloudType?: string, ak?: string, sk?: string, dbSource?: string, region?: string, trafficSource?: string) { 
        this['db_instance_id'] = dbInstanceId;
        this['cloud_type'] = cloudType;
        this['ak'] = ak;
        this['sk'] = sk;
        this['db_source'] = dbSource;
        this['region'] = region;
        this['traffic_source'] = trafficSource;
    }
    public withDbInstanceId(dbInstanceId: string): ReplayConfigInfo {
        this['db_instance_id'] = dbInstanceId;
        return this;
    }
    public set dbInstanceId(dbInstanceId: string  | undefined) {
        this['db_instance_id'] = dbInstanceId;
    }
    public get dbInstanceId(): string | undefined {
        return this['db_instance_id'];
    }
    public withCloudType(cloudType: ReplayConfigInfoCloudTypeEnum | string): ReplayConfigInfo {
        this['cloud_type'] = cloudType;
        return this;
    }
    public set cloudType(cloudType: ReplayConfigInfoCloudTypeEnum | string  | undefined) {
        this['cloud_type'] = cloudType;
    }
    public get cloudType(): ReplayConfigInfoCloudTypeEnum | string | undefined {
        return this['cloud_type'];
    }
    public withAk(ak: string): ReplayConfigInfo {
        this['ak'] = ak;
        return this;
    }
    public withSk(sk: string): ReplayConfigInfo {
        this['sk'] = sk;
        return this;
    }
    public withDbSource(dbSource: ReplayConfigInfoDbSourceEnum | string): ReplayConfigInfo {
        this['db_source'] = dbSource;
        return this;
    }
    public set dbSource(dbSource: ReplayConfigInfoDbSourceEnum | string  | undefined) {
        this['db_source'] = dbSource;
    }
    public get dbSource(): ReplayConfigInfoDbSourceEnum | string | undefined {
        return this['db_source'];
    }
    public withRegion(region: string): ReplayConfigInfo {
        this['region'] = region;
        return this;
    }
    public withTrafficSource(trafficSource: string): ReplayConfigInfo {
        this['traffic_source'] = trafficSource;
        return this;
    }
    public set trafficSource(trafficSource: string  | undefined) {
        this['traffic_source'] = trafficSource;
    }
    public get trafficSource(): string | undefined {
        return this['traffic_source'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ReplayConfigInfoCloudTypeEnum {
    AWSCLOUD = 'AWSCloud',
    TENCENTCLOUD = 'TencentCloud',
    ALICLOUD = 'AliCloud'
}
/**
    * @export
    * @enum {string}
    */
export enum ReplayConfigInfoDbSourceEnum {
    AWS_AURORA_MYSQL = 'aws_aurora_mysql',
    TENCENT_TDSQL_C = 'tencent_tdsql_c',
    ALI_RDS_MYSQL = 'ali_rds_mysql'
}
