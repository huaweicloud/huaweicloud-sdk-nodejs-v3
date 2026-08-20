import { GroupConfig } from './GroupConfig';
import { LtsConfiguration } from './LtsConfiguration';
import { RuntimeConfigUpdateRequest } from './RuntimeConfigUpdateRequest';
import { ScheduleConfig } from './ScheduleConfig';
import { UpgradeConfig } from './UpgradeConfig';


export class ServiceUpdateRequest {
    public id?: string;
    public name?: string;
    private 'deploy_timeout_minutes'?: number;
    public version?: string;
    public description?: string;
    private 'group_configs'?: Array<GroupConfig>;
    private 'runtime_config'?: RuntimeConfigUpdateRequest;
    private 'upgrade_config'?: UpgradeConfig;
    private 'lts_strategy'?: string;
    private 'log_configs'?: Array<LtsConfiguration>;
    public tags?: string;
    private 'workspace_id'?: string;
    public schedule?: Array<ScheduleConfig>;
    private 'custom_metrics_path'?: string;
    private 'task_type'?: string;
    public constructor() { 
    }
    public withId(id: string): ServiceUpdateRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ServiceUpdateRequest {
        this['name'] = name;
        return this;
    }
    public withDeployTimeoutMinutes(deployTimeoutMinutes: number): ServiceUpdateRequest {
        this['deploy_timeout_minutes'] = deployTimeoutMinutes;
        return this;
    }
    public set deployTimeoutMinutes(deployTimeoutMinutes: number  | undefined) {
        this['deploy_timeout_minutes'] = deployTimeoutMinutes;
    }
    public get deployTimeoutMinutes(): number | undefined {
        return this['deploy_timeout_minutes'];
    }
    public withVersion(version: string): ServiceUpdateRequest {
        this['version'] = version;
        return this;
    }
    public withDescription(description: string): ServiceUpdateRequest {
        this['description'] = description;
        return this;
    }
    public withGroupConfigs(groupConfigs: Array<GroupConfig>): ServiceUpdateRequest {
        this['group_configs'] = groupConfigs;
        return this;
    }
    public set groupConfigs(groupConfigs: Array<GroupConfig>  | undefined) {
        this['group_configs'] = groupConfigs;
    }
    public get groupConfigs(): Array<GroupConfig> | undefined {
        return this['group_configs'];
    }
    public withRuntimeConfig(runtimeConfig: RuntimeConfigUpdateRequest): ServiceUpdateRequest {
        this['runtime_config'] = runtimeConfig;
        return this;
    }
    public set runtimeConfig(runtimeConfig: RuntimeConfigUpdateRequest  | undefined) {
        this['runtime_config'] = runtimeConfig;
    }
    public get runtimeConfig(): RuntimeConfigUpdateRequest | undefined {
        return this['runtime_config'];
    }
    public withUpgradeConfig(upgradeConfig: UpgradeConfig): ServiceUpdateRequest {
        this['upgrade_config'] = upgradeConfig;
        return this;
    }
    public set upgradeConfig(upgradeConfig: UpgradeConfig  | undefined) {
        this['upgrade_config'] = upgradeConfig;
    }
    public get upgradeConfig(): UpgradeConfig | undefined {
        return this['upgrade_config'];
    }
    public withLtsStrategy(ltsStrategy: string): ServiceUpdateRequest {
        this['lts_strategy'] = ltsStrategy;
        return this;
    }
    public set ltsStrategy(ltsStrategy: string  | undefined) {
        this['lts_strategy'] = ltsStrategy;
    }
    public get ltsStrategy(): string | undefined {
        return this['lts_strategy'];
    }
    public withLogConfigs(logConfigs: Array<LtsConfiguration>): ServiceUpdateRequest {
        this['log_configs'] = logConfigs;
        return this;
    }
    public set logConfigs(logConfigs: Array<LtsConfiguration>  | undefined) {
        this['log_configs'] = logConfigs;
    }
    public get logConfigs(): Array<LtsConfiguration> | undefined {
        return this['log_configs'];
    }
    public withTags(tags: string): ServiceUpdateRequest {
        this['tags'] = tags;
        return this;
    }
    public withWorkspaceId(workspaceId: string): ServiceUpdateRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withSchedule(schedule: Array<ScheduleConfig>): ServiceUpdateRequest {
        this['schedule'] = schedule;
        return this;
    }
    public withCustomMetricsPath(customMetricsPath: string): ServiceUpdateRequest {
        this['custom_metrics_path'] = customMetricsPath;
        return this;
    }
    public set customMetricsPath(customMetricsPath: string  | undefined) {
        this['custom_metrics_path'] = customMetricsPath;
    }
    public get customMetricsPath(): string | undefined {
        return this['custom_metrics_path'];
    }
    public withTaskType(taskType: string): ServiceUpdateRequest {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): string | undefined {
        return this['task_type'];
    }
}