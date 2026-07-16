import { GroupConfig } from './GroupConfig';
import { LtsConfig } from './LtsConfig';
import { RuntimeConfig } from './RuntimeConfig';
import { ScheduleConfig } from './ScheduleConfig';
import { ServiceCreateRequestTags } from './ServiceCreateRequestTags';
import { UpgradeConfig } from './UpgradeConfig';


export class ServiceCreateRequest {
    public name?: string;
    public version?: string;
    public description?: string;
    public type?: string;
    private 'deploy_type'?: string;
    private 'group_configs'?: Array<GroupConfig>;
    private 'runtime_config'?: RuntimeConfig;
    private 'upgrade_config'?: UpgradeConfig;
    private 'lts_strategy'?: string;
    private 'log_configs'?: Array<LtsConfig>;
    public tags?: Array<ServiceCreateRequestTags>;
    private 'workspace_id'?: string;
    public schedule?: Array<ScheduleConfig>;
    private 'custom_metrics_path'?: string;
    private 'deploy_timeout_minutes'?: number;
    private 'task_type'?: string;
    private 'workload_type'?: string;
    public constructor(name?: string, type?: string, deployType?: string, groupConfigs?: Array<GroupConfig>, runtimeConfig?: RuntimeConfig, customMetricsPath?: string) { 
        this['name'] = name;
        this['type'] = type;
        this['deploy_type'] = deployType;
        this['group_configs'] = groupConfigs;
        this['runtime_config'] = runtimeConfig;
        this['custom_metrics_path'] = customMetricsPath;
    }
    public withName(name: string): ServiceCreateRequest {
        this['name'] = name;
        return this;
    }
    public withVersion(version: string): ServiceCreateRequest {
        this['version'] = version;
        return this;
    }
    public withDescription(description: string): ServiceCreateRequest {
        this['description'] = description;
        return this;
    }
    public withType(type: string): ServiceCreateRequest {
        this['type'] = type;
        return this;
    }
    public withDeployType(deployType: string): ServiceCreateRequest {
        this['deploy_type'] = deployType;
        return this;
    }
    public set deployType(deployType: string  | undefined) {
        this['deploy_type'] = deployType;
    }
    public get deployType(): string | undefined {
        return this['deploy_type'];
    }
    public withGroupConfigs(groupConfigs: Array<GroupConfig>): ServiceCreateRequest {
        this['group_configs'] = groupConfigs;
        return this;
    }
    public set groupConfigs(groupConfigs: Array<GroupConfig>  | undefined) {
        this['group_configs'] = groupConfigs;
    }
    public get groupConfigs(): Array<GroupConfig> | undefined {
        return this['group_configs'];
    }
    public withRuntimeConfig(runtimeConfig: RuntimeConfig): ServiceCreateRequest {
        this['runtime_config'] = runtimeConfig;
        return this;
    }
    public set runtimeConfig(runtimeConfig: RuntimeConfig  | undefined) {
        this['runtime_config'] = runtimeConfig;
    }
    public get runtimeConfig(): RuntimeConfig | undefined {
        return this['runtime_config'];
    }
    public withUpgradeConfig(upgradeConfig: UpgradeConfig): ServiceCreateRequest {
        this['upgrade_config'] = upgradeConfig;
        return this;
    }
    public set upgradeConfig(upgradeConfig: UpgradeConfig  | undefined) {
        this['upgrade_config'] = upgradeConfig;
    }
    public get upgradeConfig(): UpgradeConfig | undefined {
        return this['upgrade_config'];
    }
    public withLtsStrategy(ltsStrategy: string): ServiceCreateRequest {
        this['lts_strategy'] = ltsStrategy;
        return this;
    }
    public set ltsStrategy(ltsStrategy: string  | undefined) {
        this['lts_strategy'] = ltsStrategy;
    }
    public get ltsStrategy(): string | undefined {
        return this['lts_strategy'];
    }
    public withLogConfigs(logConfigs: Array<LtsConfig>): ServiceCreateRequest {
        this['log_configs'] = logConfigs;
        return this;
    }
    public set logConfigs(logConfigs: Array<LtsConfig>  | undefined) {
        this['log_configs'] = logConfigs;
    }
    public get logConfigs(): Array<LtsConfig> | undefined {
        return this['log_configs'];
    }
    public withTags(tags: Array<ServiceCreateRequestTags>): ServiceCreateRequest {
        this['tags'] = tags;
        return this;
    }
    public withWorkspaceId(workspaceId: string): ServiceCreateRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withSchedule(schedule: Array<ScheduleConfig>): ServiceCreateRequest {
        this['schedule'] = schedule;
        return this;
    }
    public withCustomMetricsPath(customMetricsPath: string): ServiceCreateRequest {
        this['custom_metrics_path'] = customMetricsPath;
        return this;
    }
    public set customMetricsPath(customMetricsPath: string  | undefined) {
        this['custom_metrics_path'] = customMetricsPath;
    }
    public get customMetricsPath(): string | undefined {
        return this['custom_metrics_path'];
    }
    public withDeployTimeoutMinutes(deployTimeoutMinutes: number): ServiceCreateRequest {
        this['deploy_timeout_minutes'] = deployTimeoutMinutes;
        return this;
    }
    public set deployTimeoutMinutes(deployTimeoutMinutes: number  | undefined) {
        this['deploy_timeout_minutes'] = deployTimeoutMinutes;
    }
    public get deployTimeoutMinutes(): number | undefined {
        return this['deploy_timeout_minutes'];
    }
    public withTaskType(taskType: string): ServiceCreateRequest {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): string | undefined {
        return this['task_type'];
    }
    public withWorkloadType(workloadType: string): ServiceCreateRequest {
        this['workload_type'] = workloadType;
        return this;
    }
    public set workloadType(workloadType: string  | undefined) {
        this['workload_type'] = workloadType;
    }
    public get workloadType(): string | undefined {
        return this['workload_type'];
    }
}