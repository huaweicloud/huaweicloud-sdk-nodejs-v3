import { AccessConfigurationDataItems } from './AccessConfigurationDataItems';
import { CloudStorageLogPathInfo } from './CloudStorageLogPathInfo';
import { ConfigurationRequestDataSpecPostStart } from './ConfigurationRequestDataSpecPostStart';
import { ConfigurationRequestDataSpecPreStop } from './ConfigurationRequestDataSpecPreStop';
import { HealthCheckConfigurationLivenessProbe } from './HealthCheckConfigurationLivenessProbe';
import { HealthCheckConfigurationReadinessProbe } from './HealthCheckConfigurationReadinessProbe';
import { HealthCheckConfigurationStartupProbe } from './HealthCheckConfigurationStartupProbe';
import { ScaleConfigurationDataAdvanced } from './ScaleConfigurationDataAdvanced';
import { ScaleConfigurationDataTrigger } from './ScaleConfigurationDataTrigger';
import { VolumeConfigurationDataVolume } from './VolumeConfigurationDataVolume';


export class ConfigurationRequestDataSpec {
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
    private 'scale_strategy'?: ConfigurationRequestDataSpecScaleStrategyEnum | string;
    private 'max_replica_count'?: number;
    private 'min_replica_count'?: number;
    public advanced?: ScaleConfigurationDataAdvanced;
    public triggers?: Array<ScaleConfigurationDataTrigger>;
    public volumes?: Array<VolumeConfigurationDataVolume>;
    public livenessProbe?: HealthCheckConfigurationLivenessProbe;
    public startupProbe?: HealthCheckConfigurationStartupProbe;
    public readinessProbe?: HealthCheckConfigurationReadinessProbe;
    public postStart?: ConfigurationRequestDataSpecPostStart;
    public preStop?: ConfigurationRequestDataSpecPreStop;
    private 'log_paths'?: Array<string>;
    private 'cloud_storage_log_paths'?: Array<CloudStorageLogPathInfo>;
    public instrumentation?: string;
    public path?: string;
    public port?: number;
    public metrics?: Array<string>;
    public constructor() { 
    }
    public withRdsId(rdsId: string): ConfigurationRequestDataSpec {
        this['rds_id'] = rdsId;
        return this;
    }
    public set rdsId(rdsId: string  | undefined) {
        this['rds_id'] = rdsId;
    }
    public get rdsId(): string | undefined {
        return this['rds_id'];
    }
    public withRdsDbName(rdsDbName: string): ConfigurationRequestDataSpec {
        this['rds_db_name'] = rdsDbName;
        return this;
    }
    public set rdsDbName(rdsDbName: string  | undefined) {
        this['rds_db_name'] = rdsDbName;
    }
    public get rdsDbName(): string | undefined {
        return this['rds_db_name'];
    }
    public withRdsAddress(rdsAddress: string): ConfigurationRequestDataSpec {
        this['rds_address'] = rdsAddress;
        return this;
    }
    public set rdsAddress(rdsAddress: string  | undefined) {
        this['rds_address'] = rdsAddress;
    }
    public get rdsAddress(): string | undefined {
        return this['rds_address'];
    }
    public withRdsUsername(rdsUsername: string): ConfigurationRequestDataSpec {
        this['rds_username'] = rdsUsername;
        return this;
    }
    public set rdsUsername(rdsUsername: string  | undefined) {
        this['rds_username'] = rdsUsername;
    }
    public get rdsUsername(): string | undefined {
        return this['rds_username'];
    }
    public withRdsPassword(rdsPassword: string): ConfigurationRequestDataSpec {
        this['rds_password'] = rdsPassword;
        return this;
    }
    public set rdsPassword(rdsPassword: string  | undefined) {
        this['rds_password'] = rdsPassword;
    }
    public get rdsPassword(): string | undefined {
        return this['rds_password'];
    }
    public withRdsPort(rdsPort: string): ConfigurationRequestDataSpec {
        this['rds_port'] = rdsPort;
        return this;
    }
    public set rdsPort(rdsPort: string  | undefined) {
        this['rds_port'] = rdsPort;
    }
    public get rdsPort(): string | undefined {
        return this['rds_port'];
    }
    public withConfigCenterAddr(configCenterAddr: string): ConfigurationRequestDataSpec {
        this['config_center_addr'] = configCenterAddr;
        return this;
    }
    public set configCenterAddr(configCenterAddr: string  | undefined) {
        this['config_center_addr'] = configCenterAddr;
    }
    public get configCenterAddr(): string | undefined {
        return this['config_center_addr'];
    }
    public withServiceCenterAddr(serviceCenterAddr: string): ConfigurationRequestDataSpec {
        this['service_center_addr'] = serviceCenterAddr;
        return this;
    }
    public set serviceCenterAddr(serviceCenterAddr: string  | undefined) {
        this['service_center_addr'] = serviceCenterAddr;
    }
    public get serviceCenterAddr(): string | undefined {
        return this['service_center_addr'];
    }
    public withCseId(cseId: string): ConfigurationRequestDataSpec {
        this['cse_id'] = cseId;
        return this;
    }
    public set cseId(cseId: string  | undefined) {
        this['cse_id'] = cseId;
    }
    public get cseId(): string | undefined {
        return this['cse_id'];
    }
    public withEnvs(envs: { [key: string]: string; }): ConfigurationRequestDataSpec {
        this['envs'] = envs;
        return this;
    }
    public withIp(ip: string): ConfigurationRequestDataSpec {
        this['ip'] = ip;
        return this;
    }
    public withItems(items: Array<AccessConfigurationDataItems>): ConfigurationRequestDataSpec {
        this['items'] = items;
        return this;
    }
    public withScaleStrategy(scaleStrategy: ConfigurationRequestDataSpecScaleStrategyEnum | string): ConfigurationRequestDataSpec {
        this['scale_strategy'] = scaleStrategy;
        return this;
    }
    public set scaleStrategy(scaleStrategy: ConfigurationRequestDataSpecScaleStrategyEnum | string  | undefined) {
        this['scale_strategy'] = scaleStrategy;
    }
    public get scaleStrategy(): ConfigurationRequestDataSpecScaleStrategyEnum | string | undefined {
        return this['scale_strategy'];
    }
    public withMaxReplicaCount(maxReplicaCount: number): ConfigurationRequestDataSpec {
        this['max_replica_count'] = maxReplicaCount;
        return this;
    }
    public set maxReplicaCount(maxReplicaCount: number  | undefined) {
        this['max_replica_count'] = maxReplicaCount;
    }
    public get maxReplicaCount(): number | undefined {
        return this['max_replica_count'];
    }
    public withMinReplicaCount(minReplicaCount: number): ConfigurationRequestDataSpec {
        this['min_replica_count'] = minReplicaCount;
        return this;
    }
    public set minReplicaCount(minReplicaCount: number  | undefined) {
        this['min_replica_count'] = minReplicaCount;
    }
    public get minReplicaCount(): number | undefined {
        return this['min_replica_count'];
    }
    public withAdvanced(advanced: ScaleConfigurationDataAdvanced): ConfigurationRequestDataSpec {
        this['advanced'] = advanced;
        return this;
    }
    public withTriggers(triggers: Array<ScaleConfigurationDataTrigger>): ConfigurationRequestDataSpec {
        this['triggers'] = triggers;
        return this;
    }
    public withVolumes(volumes: Array<VolumeConfigurationDataVolume>): ConfigurationRequestDataSpec {
        this['volumes'] = volumes;
        return this;
    }
    public withLivenessProbe(livenessProbe: HealthCheckConfigurationLivenessProbe): ConfigurationRequestDataSpec {
        this['livenessProbe'] = livenessProbe;
        return this;
    }
    public withStartupProbe(startupProbe: HealthCheckConfigurationStartupProbe): ConfigurationRequestDataSpec {
        this['startupProbe'] = startupProbe;
        return this;
    }
    public withReadinessProbe(readinessProbe: HealthCheckConfigurationReadinessProbe): ConfigurationRequestDataSpec {
        this['readinessProbe'] = readinessProbe;
        return this;
    }
    public withPostStart(postStart: ConfigurationRequestDataSpecPostStart): ConfigurationRequestDataSpec {
        this['postStart'] = postStart;
        return this;
    }
    public withPreStop(preStop: ConfigurationRequestDataSpecPreStop): ConfigurationRequestDataSpec {
        this['preStop'] = preStop;
        return this;
    }
    public withLogPaths(logPaths: Array<string>): ConfigurationRequestDataSpec {
        this['log_paths'] = logPaths;
        return this;
    }
    public set logPaths(logPaths: Array<string>  | undefined) {
        this['log_paths'] = logPaths;
    }
    public get logPaths(): Array<string> | undefined {
        return this['log_paths'];
    }
    public withCloudStorageLogPaths(cloudStorageLogPaths: Array<CloudStorageLogPathInfo>): ConfigurationRequestDataSpec {
        this['cloud_storage_log_paths'] = cloudStorageLogPaths;
        return this;
    }
    public set cloudStorageLogPaths(cloudStorageLogPaths: Array<CloudStorageLogPathInfo>  | undefined) {
        this['cloud_storage_log_paths'] = cloudStorageLogPaths;
    }
    public get cloudStorageLogPaths(): Array<CloudStorageLogPathInfo> | undefined {
        return this['cloud_storage_log_paths'];
    }
    public withInstrumentation(instrumentation: string): ConfigurationRequestDataSpec {
        this['instrumentation'] = instrumentation;
        return this;
    }
    public withPath(path: string): ConfigurationRequestDataSpec {
        this['path'] = path;
        return this;
    }
    public withPort(port: number): ConfigurationRequestDataSpec {
        this['port'] = port;
        return this;
    }
    public withMetrics(metrics: Array<string>): ConfigurationRequestDataSpec {
        this['metrics'] = metrics;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ConfigurationRequestDataSpecScaleStrategyEnum {
    METRIC = 'metric',
    TIME = 'time',
    MIX = 'mix'
}
