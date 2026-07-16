import { AdvancedConfig } from './AdvancedConfig';
import { DeploymentTaskLimit } from './DeploymentTaskLimit';
import { GroupModel } from './GroupModel';
import { UnitConfig } from './UnitConfig';


export class GroupConfigUpdateRequest {
    public id?: string;
    public name?: string;
    private 'pool_id'?: string;
    public framework?: string;
    public count?: number;
    private 'deploy_type'?: string;
    private 'system_log_dump_enable'?: boolean;
    private 'unit_configs'?: Array<UnitConfig>;
    public weight?: number;
    private 'secret_type'?: string;
    private 'secret_name'?: string;
    public priority?: number;
    private 'high_avail_switch'?: boolean;
    public description?: string;
    private 'advanced_config'?: AdvancedConfig;
    public model?: GroupModel;
    private 'mirror_traffic_enable'?: boolean;
    private 'mirror_traffic_weight'?: number;
    public status?: string;
    private 'deployment_task_limit'?: DeploymentTaskLimit;
    private 'schedule_strategy'?: string;
    public constructor(name?: string, weight?: number, advancedConfig?: AdvancedConfig) { 
        this['name'] = name;
        this['weight'] = weight;
        this['advanced_config'] = advancedConfig;
    }
    public withId(id: string): GroupConfigUpdateRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): GroupConfigUpdateRequest {
        this['name'] = name;
        return this;
    }
    public withPoolId(poolId: string): GroupConfigUpdateRequest {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withFramework(framework: string): GroupConfigUpdateRequest {
        this['framework'] = framework;
        return this;
    }
    public withCount(count: number): GroupConfigUpdateRequest {
        this['count'] = count;
        return this;
    }
    public withDeployType(deployType: string): GroupConfigUpdateRequest {
        this['deploy_type'] = deployType;
        return this;
    }
    public set deployType(deployType: string  | undefined) {
        this['deploy_type'] = deployType;
    }
    public get deployType(): string | undefined {
        return this['deploy_type'];
    }
    public withSystemLogDumpEnable(systemLogDumpEnable: boolean): GroupConfigUpdateRequest {
        this['system_log_dump_enable'] = systemLogDumpEnable;
        return this;
    }
    public set systemLogDumpEnable(systemLogDumpEnable: boolean  | undefined) {
        this['system_log_dump_enable'] = systemLogDumpEnable;
    }
    public get systemLogDumpEnable(): boolean | undefined {
        return this['system_log_dump_enable'];
    }
    public withUnitConfigs(unitConfigs: Array<UnitConfig>): GroupConfigUpdateRequest {
        this['unit_configs'] = unitConfigs;
        return this;
    }
    public set unitConfigs(unitConfigs: Array<UnitConfig>  | undefined) {
        this['unit_configs'] = unitConfigs;
    }
    public get unitConfigs(): Array<UnitConfig> | undefined {
        return this['unit_configs'];
    }
    public withWeight(weight: number): GroupConfigUpdateRequest {
        this['weight'] = weight;
        return this;
    }
    public withSecretType(secretType: string): GroupConfigUpdateRequest {
        this['secret_type'] = secretType;
        return this;
    }
    public set secretType(secretType: string  | undefined) {
        this['secret_type'] = secretType;
    }
    public get secretType(): string | undefined {
        return this['secret_type'];
    }
    public withSecretName(secretName: string): GroupConfigUpdateRequest {
        this['secret_name'] = secretName;
        return this;
    }
    public set secretName(secretName: string  | undefined) {
        this['secret_name'] = secretName;
    }
    public get secretName(): string | undefined {
        return this['secret_name'];
    }
    public withPriority(priority: number): GroupConfigUpdateRequest {
        this['priority'] = priority;
        return this;
    }
    public withHighAvailSwitch(highAvailSwitch: boolean): GroupConfigUpdateRequest {
        this['high_avail_switch'] = highAvailSwitch;
        return this;
    }
    public set highAvailSwitch(highAvailSwitch: boolean  | undefined) {
        this['high_avail_switch'] = highAvailSwitch;
    }
    public get highAvailSwitch(): boolean | undefined {
        return this['high_avail_switch'];
    }
    public withDescription(description: string): GroupConfigUpdateRequest {
        this['description'] = description;
        return this;
    }
    public withAdvancedConfig(advancedConfig: AdvancedConfig): GroupConfigUpdateRequest {
        this['advanced_config'] = advancedConfig;
        return this;
    }
    public set advancedConfig(advancedConfig: AdvancedConfig  | undefined) {
        this['advanced_config'] = advancedConfig;
    }
    public get advancedConfig(): AdvancedConfig | undefined {
        return this['advanced_config'];
    }
    public withModel(model: GroupModel): GroupConfigUpdateRequest {
        this['model'] = model;
        return this;
    }
    public withMirrorTrafficEnable(mirrorTrafficEnable: boolean): GroupConfigUpdateRequest {
        this['mirror_traffic_enable'] = mirrorTrafficEnable;
        return this;
    }
    public set mirrorTrafficEnable(mirrorTrafficEnable: boolean  | undefined) {
        this['mirror_traffic_enable'] = mirrorTrafficEnable;
    }
    public get mirrorTrafficEnable(): boolean | undefined {
        return this['mirror_traffic_enable'];
    }
    public withMirrorTrafficWeight(mirrorTrafficWeight: number): GroupConfigUpdateRequest {
        this['mirror_traffic_weight'] = mirrorTrafficWeight;
        return this;
    }
    public set mirrorTrafficWeight(mirrorTrafficWeight: number  | undefined) {
        this['mirror_traffic_weight'] = mirrorTrafficWeight;
    }
    public get mirrorTrafficWeight(): number | undefined {
        return this['mirror_traffic_weight'];
    }
    public withStatus(status: string): GroupConfigUpdateRequest {
        this['status'] = status;
        return this;
    }
    public withDeploymentTaskLimit(deploymentTaskLimit: DeploymentTaskLimit): GroupConfigUpdateRequest {
        this['deployment_task_limit'] = deploymentTaskLimit;
        return this;
    }
    public set deploymentTaskLimit(deploymentTaskLimit: DeploymentTaskLimit  | undefined) {
        this['deployment_task_limit'] = deploymentTaskLimit;
    }
    public get deploymentTaskLimit(): DeploymentTaskLimit | undefined {
        return this['deployment_task_limit'];
    }
    public withScheduleStrategy(scheduleStrategy: string): GroupConfigUpdateRequest {
        this['schedule_strategy'] = scheduleStrategy;
        return this;
    }
    public set scheduleStrategy(scheduleStrategy: string  | undefined) {
        this['schedule_strategy'] = scheduleStrategy;
    }
    public get scheduleStrategy(): string | undefined {
        return this['schedule_strategy'];
    }
}