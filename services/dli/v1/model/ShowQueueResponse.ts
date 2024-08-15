
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowQueueResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    private 'queue_id'?: number;
    public queueName?: string;
    public description?: string;
    public owner?: string;
    private 'create_time'?: number;
    public queueType?: string;
    public cuCount?: number;
    public chargingMode?: number;
    private 'resource_id'?: string;
    private 'resource_mode'?: number;
    private 'enterprise_project_id'?: string;
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
        super();
    }
    public withIsSuccess(isSuccess: boolean): ShowQueueResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ShowQueueResponse {
        this['message'] = message;
        return this;
    }
    public withQueueId(queueId: number): ShowQueueResponse {
        this['queue_id'] = queueId;
        return this;
    }
    public set queueId(queueId: number  | undefined) {
        this['queue_id'] = queueId;
    }
    public get queueId(): number | undefined {
        return this['queue_id'];
    }
    public withQueueName(queueName: string): ShowQueueResponse {
        this['queueName'] = queueName;
        return this;
    }
    public withDescription(description: string): ShowQueueResponse {
        this['description'] = description;
        return this;
    }
    public withOwner(owner: string): ShowQueueResponse {
        this['owner'] = owner;
        return this;
    }
    public withCreateTime(createTime: number): ShowQueueResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withQueueType(queueType: string): ShowQueueResponse {
        this['queueType'] = queueType;
        return this;
    }
    public withCuCount(cuCount: number): ShowQueueResponse {
        this['cuCount'] = cuCount;
        return this;
    }
    public withChargingMode(chargingMode: number): ShowQueueResponse {
        this['chargingMode'] = chargingMode;
        return this;
    }
    public withResourceId(resourceId: string): ShowQueueResponse {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceMode(resourceMode: number): ShowQueueResponse {
        this['resource_mode'] = resourceMode;
        return this;
    }
    public set resourceMode(resourceMode: number  | undefined) {
        this['resource_mode'] = resourceMode;
    }
    public get resourceMode(): number | undefined {
        return this['resource_mode'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowQueueResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withResourceType(resourceType: string): ShowQueueResponse {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withCuSpec(cuSpec: number): ShowQueueResponse {
        this['cu_spec'] = cuSpec;
        return this;
    }
    public set cuSpec(cuSpec: number  | undefined) {
        this['cu_spec'] = cuSpec;
    }
    public get cuSpec(): number | undefined {
        return this['cu_spec'];
    }
    public withCuScaleOutLimit(cuScaleOutLimit: number): ShowQueueResponse {
        this['cu_scale_out_limit'] = cuScaleOutLimit;
        return this;
    }
    public set cuScaleOutLimit(cuScaleOutLimit: number  | undefined) {
        this['cu_scale_out_limit'] = cuScaleOutLimit;
    }
    public get cuScaleOutLimit(): number | undefined {
        return this['cu_scale_out_limit'];
    }
    public withCuScaleInLimit(cuScaleInLimit: number): ShowQueueResponse {
        this['cu_scale_in_limit'] = cuScaleInLimit;
        return this;
    }
    public set cuScaleInLimit(cuScaleInLimit: number  | undefined) {
        this['cu_scale_in_limit'] = cuScaleInLimit;
    }
    public get cuScaleInLimit(): number | undefined {
        return this['cu_scale_in_limit'];
    }
    public withElasticResourcePoolName(elasticResourcePoolName: string): ShowQueueResponse {
        this['elastic_resource_pool_name'] = elasticResourcePoolName;
        return this;
    }
    public set elasticResourcePoolName(elasticResourcePoolName: string  | undefined) {
        this['elastic_resource_pool_name'] = elasticResourcePoolName;
    }
    public get elasticResourcePoolName(): string | undefined {
        return this['elastic_resource_pool_name'];
    }
    public withSupportSparkVersions(supportSparkVersions: Array<string>): ShowQueueResponse {
        this['support_spark_versions'] = supportSparkVersions;
        return this;
    }
    public set supportSparkVersions(supportSparkVersions: Array<string>  | undefined) {
        this['support_spark_versions'] = supportSparkVersions;
    }
    public get supportSparkVersions(): Array<string> | undefined {
        return this['support_spark_versions'];
    }
    public withDefaultSparkVersion(defaultSparkVersion: string): ShowQueueResponse {
        this['default_spark_version'] = defaultSparkVersion;
        return this;
    }
    public set defaultSparkVersion(defaultSparkVersion: string  | undefined) {
        this['default_spark_version'] = defaultSparkVersion;
    }
    public get defaultSparkVersion(): string | undefined {
        return this['default_spark_version'];
    }
    public withSupportHetuEngineVersions(supportHetuEngineVersions: Array<string>): ShowQueueResponse {
        this['support_hetu_engine_versions'] = supportHetuEngineVersions;
        return this;
    }
    public set supportHetuEngineVersions(supportHetuEngineVersions: Array<string>  | undefined) {
        this['support_hetu_engine_versions'] = supportHetuEngineVersions;
    }
    public get supportHetuEngineVersions(): Array<string> | undefined {
        return this['support_hetu_engine_versions'];
    }
    public withDefaultHetuEngineVersion(defaultHetuEngineVersion: string): ShowQueueResponse {
        this['default_hetu_engine_version'] = defaultHetuEngineVersion;
        return this;
    }
    public set defaultHetuEngineVersion(defaultHetuEngineVersion: string  | undefined) {
        this['default_hetu_engine_version'] = defaultHetuEngineVersion;
    }
    public get defaultHetuEngineVersion(): string | undefined {
        return this['default_hetu_engine_version'];
    }
    public withSupportFlinkSqlVersions(supportFlinkSqlVersions: Array<string>): ShowQueueResponse {
        this['support_flink_sql_versions'] = supportFlinkSqlVersions;
        return this;
    }
    public set supportFlinkSqlVersions(supportFlinkSqlVersions: Array<string>  | undefined) {
        this['support_flink_sql_versions'] = supportFlinkSqlVersions;
    }
    public get supportFlinkSqlVersions(): Array<string> | undefined {
        return this['support_flink_sql_versions'];
    }
    public withDefaultFlinkSqlVersion(defaultFlinkSqlVersion: string): ShowQueueResponse {
        this['default_flink_sql_version'] = defaultFlinkSqlVersion;
        return this;
    }
    public set defaultFlinkSqlVersion(defaultFlinkSqlVersion: string  | undefined) {
        this['default_flink_sql_version'] = defaultFlinkSqlVersion;
    }
    public get defaultFlinkSqlVersion(): string | undefined {
        return this['default_flink_sql_version'];
    }
    public withSupportFlinkJarVersions(supportFlinkJarVersions: Array<string>): ShowQueueResponse {
        this['support_flink_jar_versions'] = supportFlinkJarVersions;
        return this;
    }
    public set supportFlinkJarVersions(supportFlinkJarVersions: Array<string>  | undefined) {
        this['support_flink_jar_versions'] = supportFlinkJarVersions;
    }
    public get supportFlinkJarVersions(): Array<string> | undefined {
        return this['support_flink_jar_versions'];
    }
    public withDefaultFlinkJarVersion(defaultFlinkJarVersion: string): ShowQueueResponse {
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