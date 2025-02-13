import { AccessConfigurationDataItems } from './AccessConfigurationDataItems';
import { CloudStorageLogPathInfo } from './CloudStorageLogPathInfo';
import { ConfigurationResponseDataSpecPostStart } from './ConfigurationResponseDataSpecPostStart';
import { ConfigurationResponseDataSpecPreStop } from './ConfigurationResponseDataSpecPreStop';
import { HealthCheckConfigurationLivenessProbe } from './HealthCheckConfigurationLivenessProbe';
import { HealthCheckConfigurationReadinessProbe } from './HealthCheckConfigurationReadinessProbe';
import { HealthCheckConfigurationStartupProbe } from './HealthCheckConfigurationStartupProbe';
import { ScaleConfigurationDataAdvanced } from './ScaleConfigurationDataAdvanced';
import { ScaleConfigurationDataTrigger } from './ScaleConfigurationDataTrigger';
import { VolumeConfigurationDataVolume } from './VolumeConfigurationDataVolume';


export class ConfigurationResponseDataSpec {
    private 'rds_id'?: string;
    private 'rds_db_name'?: string;
    private 'rds_address'?: string;
    private 'rds_username'?: string;
    private 'rds_password'?: string;
    private 'rds_port'?: string;
    private 'config_center_addr'?: string;
    private 'service_center_addr'?: string;
    private 'cse_id'?: string;
    public envs?: { [key: string]: string; };
    public ip?: string;
    public items?: Array<AccessConfigurationDataItems>;
    private 'scale_strategy'?: ConfigurationResponseDataSpecScaleStrategyEnum | string;
    private 'max_replica_count'?: number;
    private 'min_replica_count'?: number;
    public advanced?: ScaleConfigurationDataAdvanced;
    public triggers?: Array<ScaleConfigurationDataTrigger>;
    public volumes?: Array<VolumeConfigurationDataVolume>;
    public livenessProbe?: HealthCheckConfigurationLivenessProbe;
    public startupProbe?: HealthCheckConfigurationStartupProbe;
    public readinessProbe?: HealthCheckConfigurationReadinessProbe;
    public postStart?: ConfigurationResponseDataSpecPostStart;
    public preStop?: ConfigurationResponseDataSpecPreStop;
    private 'log_paths'?: Array<string>;
    private 'cloud_storage_log_paths'?: Array<CloudStorageLogPathInfo>;
    public instrumentation?: string;
    private 'apm_application'?: string;
    public type?: string;
    private 'app_name'?: string;
    private 'instance_name'?: string;
    private 'env_name'?: string;
    private 'image_pull_policy'?: string;
    public version?: string;
    private 'access_key'?: string;
    private 'access_value'?: string;
    public business?: string;
    public path?: string;
    public port?: number;
    public metrics?: Array<string>;
    public constructor() { 
    }
    public withRdsId(rdsId: string): ConfigurationResponseDataSpec {
        this['rds_id'] = rdsId;
        return this;
    }
    public set rdsId(rdsId: string  | undefined) {
        this['rds_id'] = rdsId;
    }
    public get rdsId(): string | undefined {
        return this['rds_id'];
    }
    public withRdsDbName(rdsDbName: string): ConfigurationResponseDataSpec {
        this['rds_db_name'] = rdsDbName;
        return this;
    }
    public set rdsDbName(rdsDbName: string  | undefined) {
        this['rds_db_name'] = rdsDbName;
    }
    public get rdsDbName(): string | undefined {
        return this['rds_db_name'];
    }
    public withRdsAddress(rdsAddress: string): ConfigurationResponseDataSpec {
        this['rds_address'] = rdsAddress;
        return this;
    }
    public set rdsAddress(rdsAddress: string  | undefined) {
        this['rds_address'] = rdsAddress;
    }
    public get rdsAddress(): string | undefined {
        return this['rds_address'];
    }
    public withRdsUsername(rdsUsername: string): ConfigurationResponseDataSpec {
        this['rds_username'] = rdsUsername;
        return this;
    }
    public set rdsUsername(rdsUsername: string  | undefined) {
        this['rds_username'] = rdsUsername;
    }
    public get rdsUsername(): string | undefined {
        return this['rds_username'];
    }
    public withRdsPassword(rdsPassword: string): ConfigurationResponseDataSpec {
        this['rds_password'] = rdsPassword;
        return this;
    }
    public set rdsPassword(rdsPassword: string  | undefined) {
        this['rds_password'] = rdsPassword;
    }
    public get rdsPassword(): string | undefined {
        return this['rds_password'];
    }
    public withRdsPort(rdsPort: string): ConfigurationResponseDataSpec {
        this['rds_port'] = rdsPort;
        return this;
    }
    public set rdsPort(rdsPort: string  | undefined) {
        this['rds_port'] = rdsPort;
    }
    public get rdsPort(): string | undefined {
        return this['rds_port'];
    }
    public withConfigCenterAddr(configCenterAddr: string): ConfigurationResponseDataSpec {
        this['config_center_addr'] = configCenterAddr;
        return this;
    }
    public set configCenterAddr(configCenterAddr: string  | undefined) {
        this['config_center_addr'] = configCenterAddr;
    }
    public get configCenterAddr(): string | undefined {
        return this['config_center_addr'];
    }
    public withServiceCenterAddr(serviceCenterAddr: string): ConfigurationResponseDataSpec {
        this['service_center_addr'] = serviceCenterAddr;
        return this;
    }
    public set serviceCenterAddr(serviceCenterAddr: string  | undefined) {
        this['service_center_addr'] = serviceCenterAddr;
    }
    public get serviceCenterAddr(): string | undefined {
        return this['service_center_addr'];
    }
    public withCseId(cseId: string): ConfigurationResponseDataSpec {
        this['cse_id'] = cseId;
        return this;
    }
    public set cseId(cseId: string  | undefined) {
        this['cse_id'] = cseId;
    }
    public get cseId(): string | undefined {
        return this['cse_id'];
    }
    public withEnvs(envs: { [key: string]: string; }): ConfigurationResponseDataSpec {
        this['envs'] = envs;
        return this;
    }
    public withIp(ip: string): ConfigurationResponseDataSpec {
        this['ip'] = ip;
        return this;
    }
    public withItems(items: Array<AccessConfigurationDataItems>): ConfigurationResponseDataSpec {
        this['items'] = items;
        return this;
    }
    public withScaleStrategy(scaleStrategy: ConfigurationResponseDataSpecScaleStrategyEnum | string): ConfigurationResponseDataSpec {
        this['scale_strategy'] = scaleStrategy;
        return this;
    }
    public set scaleStrategy(scaleStrategy: ConfigurationResponseDataSpecScaleStrategyEnum | string  | undefined) {
        this['scale_strategy'] = scaleStrategy;
    }
    public get scaleStrategy(): ConfigurationResponseDataSpecScaleStrategyEnum | string | undefined {
        return this['scale_strategy'];
    }
    public withMaxReplicaCount(maxReplicaCount: number): ConfigurationResponseDataSpec {
        this['max_replica_count'] = maxReplicaCount;
        return this;
    }
    public set maxReplicaCount(maxReplicaCount: number  | undefined) {
        this['max_replica_count'] = maxReplicaCount;
    }
    public get maxReplicaCount(): number | undefined {
        return this['max_replica_count'];
    }
    public withMinReplicaCount(minReplicaCount: number): ConfigurationResponseDataSpec {
        this['min_replica_count'] = minReplicaCount;
        return this;
    }
    public set minReplicaCount(minReplicaCount: number  | undefined) {
        this['min_replica_count'] = minReplicaCount;
    }
    public get minReplicaCount(): number | undefined {
        return this['min_replica_count'];
    }
    public withAdvanced(advanced: ScaleConfigurationDataAdvanced): ConfigurationResponseDataSpec {
        this['advanced'] = advanced;
        return this;
    }
    public withTriggers(triggers: Array<ScaleConfigurationDataTrigger>): ConfigurationResponseDataSpec {
        this['triggers'] = triggers;
        return this;
    }
    public withVolumes(volumes: Array<VolumeConfigurationDataVolume>): ConfigurationResponseDataSpec {
        this['volumes'] = volumes;
        return this;
    }
    public withLivenessProbe(livenessProbe: HealthCheckConfigurationLivenessProbe): ConfigurationResponseDataSpec {
        this['livenessProbe'] = livenessProbe;
        return this;
    }
    public withStartupProbe(startupProbe: HealthCheckConfigurationStartupProbe): ConfigurationResponseDataSpec {
        this['startupProbe'] = startupProbe;
        return this;
    }
    public withReadinessProbe(readinessProbe: HealthCheckConfigurationReadinessProbe): ConfigurationResponseDataSpec {
        this['readinessProbe'] = readinessProbe;
        return this;
    }
    public withPostStart(postStart: ConfigurationResponseDataSpecPostStart): ConfigurationResponseDataSpec {
        this['postStart'] = postStart;
        return this;
    }
    public withPreStop(preStop: ConfigurationResponseDataSpecPreStop): ConfigurationResponseDataSpec {
        this['preStop'] = preStop;
        return this;
    }
    public withLogPaths(logPaths: Array<string>): ConfigurationResponseDataSpec {
        this['log_paths'] = logPaths;
        return this;
    }
    public set logPaths(logPaths: Array<string>  | undefined) {
        this['log_paths'] = logPaths;
    }
    public get logPaths(): Array<string> | undefined {
        return this['log_paths'];
    }
    public withCloudStorageLogPaths(cloudStorageLogPaths: Array<CloudStorageLogPathInfo>): ConfigurationResponseDataSpec {
        this['cloud_storage_log_paths'] = cloudStorageLogPaths;
        return this;
    }
    public set cloudStorageLogPaths(cloudStorageLogPaths: Array<CloudStorageLogPathInfo>  | undefined) {
        this['cloud_storage_log_paths'] = cloudStorageLogPaths;
    }
    public get cloudStorageLogPaths(): Array<CloudStorageLogPathInfo> | undefined {
        return this['cloud_storage_log_paths'];
    }
    public withInstrumentation(instrumentation: string): ConfigurationResponseDataSpec {
        this['instrumentation'] = instrumentation;
        return this;
    }
    public withApmApplication(apmApplication: string): ConfigurationResponseDataSpec {
        this['apm_application'] = apmApplication;
        return this;
    }
    public set apmApplication(apmApplication: string  | undefined) {
        this['apm_application'] = apmApplication;
    }
    public get apmApplication(): string | undefined {
        return this['apm_application'];
    }
    public withType(type: string): ConfigurationResponseDataSpec {
        this['type'] = type;
        return this;
    }
    public withAppName(appName: string): ConfigurationResponseDataSpec {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withInstanceName(instanceName: string): ConfigurationResponseDataSpec {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withEnvName(envName: string): ConfigurationResponseDataSpec {
        this['env_name'] = envName;
        return this;
    }
    public set envName(envName: string  | undefined) {
        this['env_name'] = envName;
    }
    public get envName(): string | undefined {
        return this['env_name'];
    }
    public withImagePullPolicy(imagePullPolicy: string): ConfigurationResponseDataSpec {
        this['image_pull_policy'] = imagePullPolicy;
        return this;
    }
    public set imagePullPolicy(imagePullPolicy: string  | undefined) {
        this['image_pull_policy'] = imagePullPolicy;
    }
    public get imagePullPolicy(): string | undefined {
        return this['image_pull_policy'];
    }
    public withVersion(version: string): ConfigurationResponseDataSpec {
        this['version'] = version;
        return this;
    }
    public withAccessKey(accessKey: string): ConfigurationResponseDataSpec {
        this['access_key'] = accessKey;
        return this;
    }
    public set accessKey(accessKey: string  | undefined) {
        this['access_key'] = accessKey;
    }
    public get accessKey(): string | undefined {
        return this['access_key'];
    }
    public withAccessValue(accessValue: string): ConfigurationResponseDataSpec {
        this['access_value'] = accessValue;
        return this;
    }
    public set accessValue(accessValue: string  | undefined) {
        this['access_value'] = accessValue;
    }
    public get accessValue(): string | undefined {
        return this['access_value'];
    }
    public withBusiness(business: string): ConfigurationResponseDataSpec {
        this['business'] = business;
        return this;
    }
    public withPath(path: string): ConfigurationResponseDataSpec {
        this['path'] = path;
        return this;
    }
    public withPort(port: number): ConfigurationResponseDataSpec {
        this['port'] = port;
        return this;
    }
    public withMetrics(metrics: Array<string>): ConfigurationResponseDataSpec {
        this['metrics'] = metrics;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ConfigurationResponseDataSpecScaleStrategyEnum {
    METRIC = 'metric',
    TIME = 'time',
    MIX = 'mix'
}
