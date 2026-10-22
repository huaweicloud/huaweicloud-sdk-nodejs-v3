import { AdvancedConfig } from './AdvancedConfig';
import { DeploymentTaskLimit } from './DeploymentTaskLimit';
import { FrozenInfo } from './FrozenInfo';
import { GroupModel } from './GroupModel';
import { UnitConfig } from './UnitConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class StopInferDeploymentResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    private 'deployment_name'?: string;
    private 'infer_name'?: string;
    public description?: string;
    private 'pool_id'?: string;
    public framework?: string;
    public version?: string;
    private 'version_id'?: string;
    private 'version_count'?: number;
    public count?: number;
    public weight?: number;
    public priority?: number;
    private 'secret_type'?: string;
    private 'secret_name'?: string;
    public status?: string;
    private 'deploy_type'?: string;
    private 'workload_type'?: string;
    private 'high_avail_switch'?: boolean;
    private 'system_log_dump_enable'?: boolean;
    private 'schedule_strategy'?: string;
    private 'unit_configs'?: Array<UnitConfig>;
    public model?: GroupModel;
    private 'advanced_config'?: AdvancedConfig;
    private 'mirror_traffic_enable'?: boolean;
    private 'mirror_traffic_weight'?: number;
    private 'user_name'?: string;
    private 'agency_name'?: string;
    private 'last_used_time'?: Date;
    private 'deployment_task_limit'?: DeploymentTaskLimit;
    private 'frozen_infos'?: Array<FrozenInfo>;
    private 'create_at'?: Date;
    private 'update_at'?: Date;
    public constructor() { 
        super();
    }
    public withId(id: string): StopInferDeploymentResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): StopInferDeploymentResponse {
        this['name'] = name;
        return this;
    }
    public withDeploymentName(deploymentName: string): StopInferDeploymentResponse {
        this['deployment_name'] = deploymentName;
        return this;
    }
    public set deploymentName(deploymentName: string  | undefined) {
        this['deployment_name'] = deploymentName;
    }
    public get deploymentName(): string | undefined {
        return this['deployment_name'];
    }
    public withInferName(inferName: string): StopInferDeploymentResponse {
        this['infer_name'] = inferName;
        return this;
    }
    public set inferName(inferName: string  | undefined) {
        this['infer_name'] = inferName;
    }
    public get inferName(): string | undefined {
        return this['infer_name'];
    }
    public withDescription(description: string): StopInferDeploymentResponse {
        this['description'] = description;
        return this;
    }
    public withPoolId(poolId: string): StopInferDeploymentResponse {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withFramework(framework: string): StopInferDeploymentResponse {
        this['framework'] = framework;
        return this;
    }
    public withVersion(version: string): StopInferDeploymentResponse {
        this['version'] = version;
        return this;
    }
    public withVersionId(versionId: string): StopInferDeploymentResponse {
        this['version_id'] = versionId;
        return this;
    }
    public set versionId(versionId: string  | undefined) {
        this['version_id'] = versionId;
    }
    public get versionId(): string | undefined {
        return this['version_id'];
    }
    public withVersionCount(versionCount: number): StopInferDeploymentResponse {
        this['version_count'] = versionCount;
        return this;
    }
    public set versionCount(versionCount: number  | undefined) {
        this['version_count'] = versionCount;
    }
    public get versionCount(): number | undefined {
        return this['version_count'];
    }
    public withCount(count: number): StopInferDeploymentResponse {
        this['count'] = count;
        return this;
    }
    public withWeight(weight: number): StopInferDeploymentResponse {
        this['weight'] = weight;
        return this;
    }
    public withPriority(priority: number): StopInferDeploymentResponse {
        this['priority'] = priority;
        return this;
    }
    public withSecretType(secretType: string): StopInferDeploymentResponse {
        this['secret_type'] = secretType;
        return this;
    }
    public set secretType(secretType: string  | undefined) {
        this['secret_type'] = secretType;
    }
    public get secretType(): string | undefined {
        return this['secret_type'];
    }
    public withSecretName(secretName: string): StopInferDeploymentResponse {
        this['secret_name'] = secretName;
        return this;
    }
    public set secretName(secretName: string  | undefined) {
        this['secret_name'] = secretName;
    }
    public get secretName(): string | undefined {
        return this['secret_name'];
    }
    public withStatus(status: string): StopInferDeploymentResponse {
        this['status'] = status;
        return this;
    }
    public withDeployType(deployType: string): StopInferDeploymentResponse {
        this['deploy_type'] = deployType;
        return this;
    }
    public set deployType(deployType: string  | undefined) {
        this['deploy_type'] = deployType;
    }
    public get deployType(): string | undefined {
        return this['deploy_type'];
    }
    public withWorkloadType(workloadType: string): StopInferDeploymentResponse {
        this['workload_type'] = workloadType;
        return this;
    }
    public set workloadType(workloadType: string  | undefined) {
        this['workload_type'] = workloadType;
    }
    public get workloadType(): string | undefined {
        return this['workload_type'];
    }
    public withHighAvailSwitch(highAvailSwitch: boolean): StopInferDeploymentResponse {
        this['high_avail_switch'] = highAvailSwitch;
        return this;
    }
    public set highAvailSwitch(highAvailSwitch: boolean  | undefined) {
        this['high_avail_switch'] = highAvailSwitch;
    }
    public get highAvailSwitch(): boolean | undefined {
        return this['high_avail_switch'];
    }
    public withSystemLogDumpEnable(systemLogDumpEnable: boolean): StopInferDeploymentResponse {
        this['system_log_dump_enable'] = systemLogDumpEnable;
        return this;
    }
    public set systemLogDumpEnable(systemLogDumpEnable: boolean  | undefined) {
        this['system_log_dump_enable'] = systemLogDumpEnable;
    }
    public get systemLogDumpEnable(): boolean | undefined {
        return this['system_log_dump_enable'];
    }
    public withScheduleStrategy(scheduleStrategy: string): StopInferDeploymentResponse {
        this['schedule_strategy'] = scheduleStrategy;
        return this;
    }
    public set scheduleStrategy(scheduleStrategy: string  | undefined) {
        this['schedule_strategy'] = scheduleStrategy;
    }
    public get scheduleStrategy(): string | undefined {
        return this['schedule_strategy'];
    }
    public withUnitConfigs(unitConfigs: Array<UnitConfig>): StopInferDeploymentResponse {
        this['unit_configs'] = unitConfigs;
        return this;
    }
    public set unitConfigs(unitConfigs: Array<UnitConfig>  | undefined) {
        this['unit_configs'] = unitConfigs;
    }
    public get unitConfigs(): Array<UnitConfig> | undefined {
        return this['unit_configs'];
    }
    public withModel(model: GroupModel): StopInferDeploymentResponse {
        this['model'] = model;
        return this;
    }
    public withAdvancedConfig(advancedConfig: AdvancedConfig): StopInferDeploymentResponse {
        this['advanced_config'] = advancedConfig;
        return this;
    }
    public set advancedConfig(advancedConfig: AdvancedConfig  | undefined) {
        this['advanced_config'] = advancedConfig;
    }
    public get advancedConfig(): AdvancedConfig | undefined {
        return this['advanced_config'];
    }
    public withMirrorTrafficEnable(mirrorTrafficEnable: boolean): StopInferDeploymentResponse {
        this['mirror_traffic_enable'] = mirrorTrafficEnable;
        return this;
    }
    public set mirrorTrafficEnable(mirrorTrafficEnable: boolean  | undefined) {
        this['mirror_traffic_enable'] = mirrorTrafficEnable;
    }
    public get mirrorTrafficEnable(): boolean | undefined {
        return this['mirror_traffic_enable'];
    }
    public withMirrorTrafficWeight(mirrorTrafficWeight: number): StopInferDeploymentResponse {
        this['mirror_traffic_weight'] = mirrorTrafficWeight;
        return this;
    }
    public set mirrorTrafficWeight(mirrorTrafficWeight: number  | undefined) {
        this['mirror_traffic_weight'] = mirrorTrafficWeight;
    }
    public get mirrorTrafficWeight(): number | undefined {
        return this['mirror_traffic_weight'];
    }
    public withUserName(userName: string): StopInferDeploymentResponse {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withAgencyName(agencyName: string): StopInferDeploymentResponse {
        this['agency_name'] = agencyName;
        return this;
    }
    public set agencyName(agencyName: string  | undefined) {
        this['agency_name'] = agencyName;
    }
    public get agencyName(): string | undefined {
        return this['agency_name'];
    }
    public withLastUsedTime(lastUsedTime: Date): StopInferDeploymentResponse {
        this['last_used_time'] = lastUsedTime;
        return this;
    }
    public set lastUsedTime(lastUsedTime: Date  | undefined) {
        this['last_used_time'] = lastUsedTime;
    }
    public get lastUsedTime(): Date | undefined {
        return this['last_used_time'];
    }
    public withDeploymentTaskLimit(deploymentTaskLimit: DeploymentTaskLimit): StopInferDeploymentResponse {
        this['deployment_task_limit'] = deploymentTaskLimit;
        return this;
    }
    public set deploymentTaskLimit(deploymentTaskLimit: DeploymentTaskLimit  | undefined) {
        this['deployment_task_limit'] = deploymentTaskLimit;
    }
    public get deploymentTaskLimit(): DeploymentTaskLimit | undefined {
        return this['deployment_task_limit'];
    }
    public withFrozenInfos(frozenInfos: Array<FrozenInfo>): StopInferDeploymentResponse {
        this['frozen_infos'] = frozenInfos;
        return this;
    }
    public set frozenInfos(frozenInfos: Array<FrozenInfo>  | undefined) {
        this['frozen_infos'] = frozenInfos;
    }
    public get frozenInfos(): Array<FrozenInfo> | undefined {
        return this['frozen_infos'];
    }
    public withCreateAt(createAt: Date): StopInferDeploymentResponse {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: Date  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): Date | undefined {
        return this['create_at'];
    }
    public withUpdateAt(updateAt: Date): StopInferDeploymentResponse {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: Date  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): Date | undefined {
        return this['update_at'];
    }
}