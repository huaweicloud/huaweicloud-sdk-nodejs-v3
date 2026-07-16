import { AdvancedConfig } from './AdvancedConfig';
import { ModelResource } from './ModelResource';
import { UnitConfig } from './UnitConfig';


export class GroupConfig {
    public id?: string;
    public name?: string;
    private 'pool_id'?: string;
    public count?: number;
    private 'system_log_dump_enable'?: boolean;
    private 'unit_configs'?: Array<UnitConfig>;
    public weight?: number;
    private 'secret_type'?: string;
    private 'secret_name'?: string;
    public priority?: number;
    private 'high_avail_switch'?: boolean;
    private 'schedule_strategy'?: string;
    public version?: string;
    private 'version_id'?: string;
    public description?: string;
    public framework?: GroupConfigFrameworkEnum | string;
    private 'running_count'?: number;
    private 'deploy_type'?: string;
    private 'mirror_traffic_enable'?: boolean;
    private 'mirror_traffic_weight'?: string;
    private 'version_count'?: number;
    private 'workload_type'?: string;
    private 'update_at'?: number;
    public model?: ModelResource;
    private 'advanced_config'?: AdvancedConfig;
    public constructor(name?: string, weight?: number) { 
        this['name'] = name;
        this['weight'] = weight;
    }
    public withId(id: string): GroupConfig {
        this['id'] = id;
        return this;
    }
    public withName(name: string): GroupConfig {
        this['name'] = name;
        return this;
    }
    public withPoolId(poolId: string): GroupConfig {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withCount(count: number): GroupConfig {
        this['count'] = count;
        return this;
    }
    public withSystemLogDumpEnable(systemLogDumpEnable: boolean): GroupConfig {
        this['system_log_dump_enable'] = systemLogDumpEnable;
        return this;
    }
    public set systemLogDumpEnable(systemLogDumpEnable: boolean  | undefined) {
        this['system_log_dump_enable'] = systemLogDumpEnable;
    }
    public get systemLogDumpEnable(): boolean | undefined {
        return this['system_log_dump_enable'];
    }
    public withUnitConfigs(unitConfigs: Array<UnitConfig>): GroupConfig {
        this['unit_configs'] = unitConfigs;
        return this;
    }
    public set unitConfigs(unitConfigs: Array<UnitConfig>  | undefined) {
        this['unit_configs'] = unitConfigs;
    }
    public get unitConfigs(): Array<UnitConfig> | undefined {
        return this['unit_configs'];
    }
    public withWeight(weight: number): GroupConfig {
        this['weight'] = weight;
        return this;
    }
    public withSecretType(secretType: string): GroupConfig {
        this['secret_type'] = secretType;
        return this;
    }
    public set secretType(secretType: string  | undefined) {
        this['secret_type'] = secretType;
    }
    public get secretType(): string | undefined {
        return this['secret_type'];
    }
    public withSecretName(secretName: string): GroupConfig {
        this['secret_name'] = secretName;
        return this;
    }
    public set secretName(secretName: string  | undefined) {
        this['secret_name'] = secretName;
    }
    public get secretName(): string | undefined {
        return this['secret_name'];
    }
    public withPriority(priority: number): GroupConfig {
        this['priority'] = priority;
        return this;
    }
    public withHighAvailSwitch(highAvailSwitch: boolean): GroupConfig {
        this['high_avail_switch'] = highAvailSwitch;
        return this;
    }
    public set highAvailSwitch(highAvailSwitch: boolean  | undefined) {
        this['high_avail_switch'] = highAvailSwitch;
    }
    public get highAvailSwitch(): boolean | undefined {
        return this['high_avail_switch'];
    }
    public withScheduleStrategy(scheduleStrategy: string): GroupConfig {
        this['schedule_strategy'] = scheduleStrategy;
        return this;
    }
    public set scheduleStrategy(scheduleStrategy: string  | undefined) {
        this['schedule_strategy'] = scheduleStrategy;
    }
    public get scheduleStrategy(): string | undefined {
        return this['schedule_strategy'];
    }
    public withVersion(version: string): GroupConfig {
        this['version'] = version;
        return this;
    }
    public withVersionId(versionId: string): GroupConfig {
        this['version_id'] = versionId;
        return this;
    }
    public set versionId(versionId: string  | undefined) {
        this['version_id'] = versionId;
    }
    public get versionId(): string | undefined {
        return this['version_id'];
    }
    public withDescription(description: string): GroupConfig {
        this['description'] = description;
        return this;
    }
    public withFramework(framework: GroupConfigFrameworkEnum | string): GroupConfig {
        this['framework'] = framework;
        return this;
    }
    public withRunningCount(runningCount: number): GroupConfig {
        this['running_count'] = runningCount;
        return this;
    }
    public set runningCount(runningCount: number  | undefined) {
        this['running_count'] = runningCount;
    }
    public get runningCount(): number | undefined {
        return this['running_count'];
    }
    public withDeployType(deployType: string): GroupConfig {
        this['deploy_type'] = deployType;
        return this;
    }
    public set deployType(deployType: string  | undefined) {
        this['deploy_type'] = deployType;
    }
    public get deployType(): string | undefined {
        return this['deploy_type'];
    }
    public withMirrorTrafficEnable(mirrorTrafficEnable: boolean): GroupConfig {
        this['mirror_traffic_enable'] = mirrorTrafficEnable;
        return this;
    }
    public set mirrorTrafficEnable(mirrorTrafficEnable: boolean  | undefined) {
        this['mirror_traffic_enable'] = mirrorTrafficEnable;
    }
    public get mirrorTrafficEnable(): boolean | undefined {
        return this['mirror_traffic_enable'];
    }
    public withMirrorTrafficWeight(mirrorTrafficWeight: string): GroupConfig {
        this['mirror_traffic_weight'] = mirrorTrafficWeight;
        return this;
    }
    public set mirrorTrafficWeight(mirrorTrafficWeight: string  | undefined) {
        this['mirror_traffic_weight'] = mirrorTrafficWeight;
    }
    public get mirrorTrafficWeight(): string | undefined {
        return this['mirror_traffic_weight'];
    }
    public withVersionCount(versionCount: number): GroupConfig {
        this['version_count'] = versionCount;
        return this;
    }
    public set versionCount(versionCount: number  | undefined) {
        this['version_count'] = versionCount;
    }
    public get versionCount(): number | undefined {
        return this['version_count'];
    }
    public withWorkloadType(workloadType: string): GroupConfig {
        this['workload_type'] = workloadType;
        return this;
    }
    public set workloadType(workloadType: string  | undefined) {
        this['workload_type'] = workloadType;
    }
    public get workloadType(): string | undefined {
        return this['workload_type'];
    }
    public withUpdateAt(updateAt: number): GroupConfig {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: number  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): number | undefined {
        return this['update_at'];
    }
    public withModel(model: ModelResource): GroupConfig {
        this['model'] = model;
        return this;
    }
    public withAdvancedConfig(advancedConfig: AdvancedConfig): GroupConfig {
        this['advanced_config'] = advancedConfig;
        return this;
    }
    public set advancedConfig(advancedConfig: AdvancedConfig  | undefined) {
        this['advanced_config'] = advancedConfig;
    }
    public get advancedConfig(): AdvancedConfig | undefined {
        return this['advanced_config'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GroupConfigFrameworkEnum {
    COMMON = 'COMMON',
    VLLM = 'VLLM',
    MINDIE = 'MINDIE'
}
