import { AdvancedConfig } from './AdvancedConfig';
import { InferModelResponse } from './InferModelResponse';
import { UnitConfigResponse } from './UnitConfigResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateInferDeploymentResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    private 'pool_id'?: string;
    public count?: number;
    private 'system_log_dump_enable'?: boolean;
    private 'unit_configs'?: Array<UnitConfigResponse>;
    public weight?: number;
    private 'traffic_ratio'?: string;
    private 'secret_type'?: string;
    private 'secret_name'?: string;
    public priority?: number;
    private 'high_avail_switch'?: boolean;
    public framework?: string;
    public version?: string;
    private 'version_id'?: string;
    public status?: string;
    private 'running_count'?: number;
    private 'deploy_type'?: string;
    private 'mirror_traffic_enable'?: boolean;
    private 'mirror_traffic_weight'?: string;
    private 'version_count'?: number;
    private 'workload_type'?: string;
    private 'update_at'?: number;
    private 'lts_state'?: string;
    private 'infer_name'?: string;
    public model?: InferModelResponse;
    private 'advanced_config'?: AdvancedConfig;
    public description?: string;
    private 'create_at'?: string;
    private 'schedule_strategy'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateInferDeploymentResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateInferDeploymentResponse {
        this['name'] = name;
        return this;
    }
    public withPoolId(poolId: string): CreateInferDeploymentResponse {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withCount(count: number): CreateInferDeploymentResponse {
        this['count'] = count;
        return this;
    }
    public withSystemLogDumpEnable(systemLogDumpEnable: boolean): CreateInferDeploymentResponse {
        this['system_log_dump_enable'] = systemLogDumpEnable;
        return this;
    }
    public set systemLogDumpEnable(systemLogDumpEnable: boolean  | undefined) {
        this['system_log_dump_enable'] = systemLogDumpEnable;
    }
    public get systemLogDumpEnable(): boolean | undefined {
        return this['system_log_dump_enable'];
    }
    public withUnitConfigs(unitConfigs: Array<UnitConfigResponse>): CreateInferDeploymentResponse {
        this['unit_configs'] = unitConfigs;
        return this;
    }
    public set unitConfigs(unitConfigs: Array<UnitConfigResponse>  | undefined) {
        this['unit_configs'] = unitConfigs;
    }
    public get unitConfigs(): Array<UnitConfigResponse> | undefined {
        return this['unit_configs'];
    }
    public withWeight(weight: number): CreateInferDeploymentResponse {
        this['weight'] = weight;
        return this;
    }
    public withTrafficRatio(trafficRatio: string): CreateInferDeploymentResponse {
        this['traffic_ratio'] = trafficRatio;
        return this;
    }
    public set trafficRatio(trafficRatio: string  | undefined) {
        this['traffic_ratio'] = trafficRatio;
    }
    public get trafficRatio(): string | undefined {
        return this['traffic_ratio'];
    }
    public withSecretType(secretType: string): CreateInferDeploymentResponse {
        this['secret_type'] = secretType;
        return this;
    }
    public set secretType(secretType: string  | undefined) {
        this['secret_type'] = secretType;
    }
    public get secretType(): string | undefined {
        return this['secret_type'];
    }
    public withSecretName(secretName: string): CreateInferDeploymentResponse {
        this['secret_name'] = secretName;
        return this;
    }
    public set secretName(secretName: string  | undefined) {
        this['secret_name'] = secretName;
    }
    public get secretName(): string | undefined {
        return this['secret_name'];
    }
    public withPriority(priority: number): CreateInferDeploymentResponse {
        this['priority'] = priority;
        return this;
    }
    public withHighAvailSwitch(highAvailSwitch: boolean): CreateInferDeploymentResponse {
        this['high_avail_switch'] = highAvailSwitch;
        return this;
    }
    public set highAvailSwitch(highAvailSwitch: boolean  | undefined) {
        this['high_avail_switch'] = highAvailSwitch;
    }
    public get highAvailSwitch(): boolean | undefined {
        return this['high_avail_switch'];
    }
    public withFramework(framework: string): CreateInferDeploymentResponse {
        this['framework'] = framework;
        return this;
    }
    public withVersion(version: string): CreateInferDeploymentResponse {
        this['version'] = version;
        return this;
    }
    public withVersionId(versionId: string): CreateInferDeploymentResponse {
        this['version_id'] = versionId;
        return this;
    }
    public set versionId(versionId: string  | undefined) {
        this['version_id'] = versionId;
    }
    public get versionId(): string | undefined {
        return this['version_id'];
    }
    public withStatus(status: string): CreateInferDeploymentResponse {
        this['status'] = status;
        return this;
    }
    public withRunningCount(runningCount: number): CreateInferDeploymentResponse {
        this['running_count'] = runningCount;
        return this;
    }
    public set runningCount(runningCount: number  | undefined) {
        this['running_count'] = runningCount;
    }
    public get runningCount(): number | undefined {
        return this['running_count'];
    }
    public withDeployType(deployType: string): CreateInferDeploymentResponse {
        this['deploy_type'] = deployType;
        return this;
    }
    public set deployType(deployType: string  | undefined) {
        this['deploy_type'] = deployType;
    }
    public get deployType(): string | undefined {
        return this['deploy_type'];
    }
    public withMirrorTrafficEnable(mirrorTrafficEnable: boolean): CreateInferDeploymentResponse {
        this['mirror_traffic_enable'] = mirrorTrafficEnable;
        return this;
    }
    public set mirrorTrafficEnable(mirrorTrafficEnable: boolean  | undefined) {
        this['mirror_traffic_enable'] = mirrorTrafficEnable;
    }
    public get mirrorTrafficEnable(): boolean | undefined {
        return this['mirror_traffic_enable'];
    }
    public withMirrorTrafficWeight(mirrorTrafficWeight: string): CreateInferDeploymentResponse {
        this['mirror_traffic_weight'] = mirrorTrafficWeight;
        return this;
    }
    public set mirrorTrafficWeight(mirrorTrafficWeight: string  | undefined) {
        this['mirror_traffic_weight'] = mirrorTrafficWeight;
    }
    public get mirrorTrafficWeight(): string | undefined {
        return this['mirror_traffic_weight'];
    }
    public withVersionCount(versionCount: number): CreateInferDeploymentResponse {
        this['version_count'] = versionCount;
        return this;
    }
    public set versionCount(versionCount: number  | undefined) {
        this['version_count'] = versionCount;
    }
    public get versionCount(): number | undefined {
        return this['version_count'];
    }
    public withWorkloadType(workloadType: string): CreateInferDeploymentResponse {
        this['workload_type'] = workloadType;
        return this;
    }
    public set workloadType(workloadType: string  | undefined) {
        this['workload_type'] = workloadType;
    }
    public get workloadType(): string | undefined {
        return this['workload_type'];
    }
    public withUpdateAt(updateAt: number): CreateInferDeploymentResponse {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: number  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): number | undefined {
        return this['update_at'];
    }
    public withLtsState(ltsState: string): CreateInferDeploymentResponse {
        this['lts_state'] = ltsState;
        return this;
    }
    public set ltsState(ltsState: string  | undefined) {
        this['lts_state'] = ltsState;
    }
    public get ltsState(): string | undefined {
        return this['lts_state'];
    }
    public withInferName(inferName: string): CreateInferDeploymentResponse {
        this['infer_name'] = inferName;
        return this;
    }
    public set inferName(inferName: string  | undefined) {
        this['infer_name'] = inferName;
    }
    public get inferName(): string | undefined {
        return this['infer_name'];
    }
    public withModel(model: InferModelResponse): CreateInferDeploymentResponse {
        this['model'] = model;
        return this;
    }
    public withAdvancedConfig(advancedConfig: AdvancedConfig): CreateInferDeploymentResponse {
        this['advanced_config'] = advancedConfig;
        return this;
    }
    public set advancedConfig(advancedConfig: AdvancedConfig  | undefined) {
        this['advanced_config'] = advancedConfig;
    }
    public get advancedConfig(): AdvancedConfig | undefined {
        return this['advanced_config'];
    }
    public withDescription(description: string): CreateInferDeploymentResponse {
        this['description'] = description;
        return this;
    }
    public withCreateAt(createAt: string): CreateInferDeploymentResponse {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: string  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): string | undefined {
        return this['create_at'];
    }
    public withScheduleStrategy(scheduleStrategy: string): CreateInferDeploymentResponse {
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