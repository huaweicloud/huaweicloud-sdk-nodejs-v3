

export class Queue {
    private 'queue_id'?: number;
    private 'queue_name'?: string;
    public description?: string;
    public owner?: string;
    private 'create_time'?: number;
    private 'queue_type'?: string;
    private 'cu_count'?: number;
    private 'charging_mode'?: number;
    private 'resource_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'cidr_in_vpc'?: string;
    private 'cidr_in_mgntsubnet'?: string;
    private 'cidr_in_subnet'?: string;
    private 'resource_mode'?: number;
    public platform?: string;
    private 'is_restarting'?: boolean;
    public labels?: string;
    public feature?: string;
    private 'resource_type'?: string;
    private 'cu_spec'?: number;
    private 'cu_scale_out_limit'?: number;
    private 'cu_scale_in_limit'?: number;
    private 'elastic_resource_pool_name'?: string;
    private 'support_spark_versions'?: Array<string>;
    private 'default_spark_version'?: string;
    private 'support_hetu_engine_versions'?: Array<string>;
    private 'default_hetu_engine_version'?: string;
    private 'support_flink_sql_versions'?: Array<string>;
    private 'default_flink_sql_version'?: string;
    private 'support_flink_jar_versions'?: Array<string>;
    private 'default_flink_jar_version'?: string;
    public constructor() { 
    }
    public withQueueId(queueId: number): Queue {
        this['queue_id'] = queueId;
        return this;
    }
    public set queueId(queueId: number  | undefined) {
        this['queue_id'] = queueId;
    }
    public get queueId(): number | undefined {
        return this['queue_id'];
    }
    public withQueueName(queueName: string): Queue {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withDescription(description: string): Queue {
        this['description'] = description;
        return this;
    }
    public withOwner(owner: string): Queue {
        this['owner'] = owner;
        return this;
    }
    public withCreateTime(createTime: number): Queue {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withQueueType(queueType: string): Queue {
        this['queue_type'] = queueType;
        return this;
    }
    public set queueType(queueType: string  | undefined) {
        this['queue_type'] = queueType;
    }
    public get queueType(): string | undefined {
        return this['queue_type'];
    }
    public withCuCount(cuCount: number): Queue {
        this['cu_count'] = cuCount;
        return this;
    }
    public set cuCount(cuCount: number  | undefined) {
        this['cu_count'] = cuCount;
    }
    public get cuCount(): number | undefined {
        return this['cu_count'];
    }
    public withChargingMode(chargingMode: number): Queue {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: number  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): number | undefined {
        return this['charging_mode'];
    }
    public withResourceId(resourceId: string): Queue {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): Queue {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withCidrInVpc(cidrInVpc: string): Queue {
        this['cidr_in_vpc'] = cidrInVpc;
        return this;
    }
    public set cidrInVpc(cidrInVpc: string  | undefined) {
        this['cidr_in_vpc'] = cidrInVpc;
    }
    public get cidrInVpc(): string | undefined {
        return this['cidr_in_vpc'];
    }
    public withCidrInMgntsubnet(cidrInMgntsubnet: string): Queue {
        this['cidr_in_mgntsubnet'] = cidrInMgntsubnet;
        return this;
    }
    public set cidrInMgntsubnet(cidrInMgntsubnet: string  | undefined) {
        this['cidr_in_mgntsubnet'] = cidrInMgntsubnet;
    }
    public get cidrInMgntsubnet(): string | undefined {
        return this['cidr_in_mgntsubnet'];
    }
    public withCidrInSubnet(cidrInSubnet: string): Queue {
        this['cidr_in_subnet'] = cidrInSubnet;
        return this;
    }
    public set cidrInSubnet(cidrInSubnet: string  | undefined) {
        this['cidr_in_subnet'] = cidrInSubnet;
    }
    public get cidrInSubnet(): string | undefined {
        return this['cidr_in_subnet'];
    }
    public withResourceMode(resourceMode: number): Queue {
        this['resource_mode'] = resourceMode;
        return this;
    }
    public set resourceMode(resourceMode: number  | undefined) {
        this['resource_mode'] = resourceMode;
    }
    public get resourceMode(): number | undefined {
        return this['resource_mode'];
    }
    public withPlatform(platform: string): Queue {
        this['platform'] = platform;
        return this;
    }
    public withIsRestarting(isRestarting: boolean): Queue {
        this['is_restarting'] = isRestarting;
        return this;
    }
    public set isRestarting(isRestarting: boolean  | undefined) {
        this['is_restarting'] = isRestarting;
    }
    public get isRestarting(): boolean | undefined {
        return this['is_restarting'];
    }
    public withLabels(labels: string): Queue {
        this['labels'] = labels;
        return this;
    }
    public withFeature(feature: string): Queue {
        this['feature'] = feature;
        return this;
    }
    public withResourceType(resourceType: string): Queue {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withCuSpec(cuSpec: number): Queue {
        this['cu_spec'] = cuSpec;
        return this;
    }
    public set cuSpec(cuSpec: number  | undefined) {
        this['cu_spec'] = cuSpec;
    }
    public get cuSpec(): number | undefined {
        return this['cu_spec'];
    }
    public withCuScaleOutLimit(cuScaleOutLimit: number): Queue {
        this['cu_scale_out_limit'] = cuScaleOutLimit;
        return this;
    }
    public set cuScaleOutLimit(cuScaleOutLimit: number  | undefined) {
        this['cu_scale_out_limit'] = cuScaleOutLimit;
    }
    public get cuScaleOutLimit(): number | undefined {
        return this['cu_scale_out_limit'];
    }
    public withCuScaleInLimit(cuScaleInLimit: number): Queue {
        this['cu_scale_in_limit'] = cuScaleInLimit;
        return this;
    }
    public set cuScaleInLimit(cuScaleInLimit: number  | undefined) {
        this['cu_scale_in_limit'] = cuScaleInLimit;
    }
    public get cuScaleInLimit(): number | undefined {
        return this['cu_scale_in_limit'];
    }
    public withElasticResourcePoolName(elasticResourcePoolName: string): Queue {
        this['elastic_resource_pool_name'] = elasticResourcePoolName;
        return this;
    }
    public set elasticResourcePoolName(elasticResourcePoolName: string  | undefined) {
        this['elastic_resource_pool_name'] = elasticResourcePoolName;
    }
    public get elasticResourcePoolName(): string | undefined {
        return this['elastic_resource_pool_name'];
    }
    public withSupportSparkVersions(supportSparkVersions: Array<string>): Queue {
        this['support_spark_versions'] = supportSparkVersions;
        return this;
    }
    public set supportSparkVersions(supportSparkVersions: Array<string>  | undefined) {
        this['support_spark_versions'] = supportSparkVersions;
    }
    public get supportSparkVersions(): Array<string> | undefined {
        return this['support_spark_versions'];
    }
    public withDefaultSparkVersion(defaultSparkVersion: string): Queue {
        this['default_spark_version'] = defaultSparkVersion;
        return this;
    }
    public set defaultSparkVersion(defaultSparkVersion: string  | undefined) {
        this['default_spark_version'] = defaultSparkVersion;
    }
    public get defaultSparkVersion(): string | undefined {
        return this['default_spark_version'];
    }
    public withSupportHetuEngineVersions(supportHetuEngineVersions: Array<string>): Queue {
        this['support_hetu_engine_versions'] = supportHetuEngineVersions;
        return this;
    }
    public set supportHetuEngineVersions(supportHetuEngineVersions: Array<string>  | undefined) {
        this['support_hetu_engine_versions'] = supportHetuEngineVersions;
    }
    public get supportHetuEngineVersions(): Array<string> | undefined {
        return this['support_hetu_engine_versions'];
    }
    public withDefaultHetuEngineVersion(defaultHetuEngineVersion: string): Queue {
        this['default_hetu_engine_version'] = defaultHetuEngineVersion;
        return this;
    }
    public set defaultHetuEngineVersion(defaultHetuEngineVersion: string  | undefined) {
        this['default_hetu_engine_version'] = defaultHetuEngineVersion;
    }
    public get defaultHetuEngineVersion(): string | undefined {
        return this['default_hetu_engine_version'];
    }
    public withSupportFlinkSqlVersions(supportFlinkSqlVersions: Array<string>): Queue {
        this['support_flink_sql_versions'] = supportFlinkSqlVersions;
        return this;
    }
    public set supportFlinkSqlVersions(supportFlinkSqlVersions: Array<string>  | undefined) {
        this['support_flink_sql_versions'] = supportFlinkSqlVersions;
    }
    public get supportFlinkSqlVersions(): Array<string> | undefined {
        return this['support_flink_sql_versions'];
    }
    public withDefaultFlinkSqlVersion(defaultFlinkSqlVersion: string): Queue {
        this['default_flink_sql_version'] = defaultFlinkSqlVersion;
        return this;
    }
    public set defaultFlinkSqlVersion(defaultFlinkSqlVersion: string  | undefined) {
        this['default_flink_sql_version'] = defaultFlinkSqlVersion;
    }
    public get defaultFlinkSqlVersion(): string | undefined {
        return this['default_flink_sql_version'];
    }
    public withSupportFlinkJarVersions(supportFlinkJarVersions: Array<string>): Queue {
        this['support_flink_jar_versions'] = supportFlinkJarVersions;
        return this;
    }
    public set supportFlinkJarVersions(supportFlinkJarVersions: Array<string>  | undefined) {
        this['support_flink_jar_versions'] = supportFlinkJarVersions;
    }
    public get supportFlinkJarVersions(): Array<string> | undefined {
        return this['support_flink_jar_versions'];
    }
    public withDefaultFlinkJarVersion(defaultFlinkJarVersion: string): Queue {
        this['default_flink_jar_version'] = defaultFlinkJarVersion;
        return this;
    }
    public set defaultFlinkJarVersion(defaultFlinkJarVersion: string  | undefined) {
        this['default_flink_jar_version'] = defaultFlinkJarVersion;
    }
    public get defaultFlinkJarVersion(): string | undefined {
        return this['default_flink_jar_version'];
    }
}