import { AdvancedConfig } from './AdvancedConfig';
import { FrozenInfo } from './FrozenInfo';
import { UnitConfig } from './UnitConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInferDeploymentVersionResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    private 'infer_name'?: string;
    private 'create_at'?: Date;
    public description?: string;
    private 'pool_id'?: string;
    public framework?: string;
    public priority?: string;
    private 'secret_type'?: string;
    public status?: string;
    public count?: number;
    private 'high_avail_switch'?: string;
    private 'system_log_dump_enable'?: string;
    private 'unit_configs'?: Array<UnitConfig>;
    private 'update_at'?: Date;
    public version?: string;
    private 'version_count'?: number;
    public weight?: number;
    private 'advanced_config'?: AdvancedConfig;
    private 'job_id'?: string;
    private 'deployment_name'?: string;
    private 'frozen_infos'?: Array<FrozenInfo>;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowInferDeploymentVersionResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowInferDeploymentVersionResponse {
        this['name'] = name;
        return this;
    }
    public withInferName(inferName: string): ShowInferDeploymentVersionResponse {
        this['infer_name'] = inferName;
        return this;
    }
    public set inferName(inferName: string  | undefined) {
        this['infer_name'] = inferName;
    }
    public get inferName(): string | undefined {
        return this['infer_name'];
    }
    public withCreateAt(createAt: Date): ShowInferDeploymentVersionResponse {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: Date  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): Date | undefined {
        return this['create_at'];
    }
    public withDescription(description: string): ShowInferDeploymentVersionResponse {
        this['description'] = description;
        return this;
    }
    public withPoolId(poolId: string): ShowInferDeploymentVersionResponse {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withFramework(framework: string): ShowInferDeploymentVersionResponse {
        this['framework'] = framework;
        return this;
    }
    public withPriority(priority: string): ShowInferDeploymentVersionResponse {
        this['priority'] = priority;
        return this;
    }
    public withSecretType(secretType: string): ShowInferDeploymentVersionResponse {
        this['secret_type'] = secretType;
        return this;
    }
    public set secretType(secretType: string  | undefined) {
        this['secret_type'] = secretType;
    }
    public get secretType(): string | undefined {
        return this['secret_type'];
    }
    public withStatus(status: string): ShowInferDeploymentVersionResponse {
        this['status'] = status;
        return this;
    }
    public withCount(count: number): ShowInferDeploymentVersionResponse {
        this['count'] = count;
        return this;
    }
    public withHighAvailSwitch(highAvailSwitch: string): ShowInferDeploymentVersionResponse {
        this['high_avail_switch'] = highAvailSwitch;
        return this;
    }
    public set highAvailSwitch(highAvailSwitch: string  | undefined) {
        this['high_avail_switch'] = highAvailSwitch;
    }
    public get highAvailSwitch(): string | undefined {
        return this['high_avail_switch'];
    }
    public withSystemLogDumpEnable(systemLogDumpEnable: string): ShowInferDeploymentVersionResponse {
        this['system_log_dump_enable'] = systemLogDumpEnable;
        return this;
    }
    public set systemLogDumpEnable(systemLogDumpEnable: string  | undefined) {
        this['system_log_dump_enable'] = systemLogDumpEnable;
    }
    public get systemLogDumpEnable(): string | undefined {
        return this['system_log_dump_enable'];
    }
    public withUnitConfigs(unitConfigs: Array<UnitConfig>): ShowInferDeploymentVersionResponse {
        this['unit_configs'] = unitConfigs;
        return this;
    }
    public set unitConfigs(unitConfigs: Array<UnitConfig>  | undefined) {
        this['unit_configs'] = unitConfigs;
    }
    public get unitConfigs(): Array<UnitConfig> | undefined {
        return this['unit_configs'];
    }
    public withUpdateAt(updateAt: Date): ShowInferDeploymentVersionResponse {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: Date  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): Date | undefined {
        return this['update_at'];
    }
    public withVersion(version: string): ShowInferDeploymentVersionResponse {
        this['version'] = version;
        return this;
    }
    public withVersionCount(versionCount: number): ShowInferDeploymentVersionResponse {
        this['version_count'] = versionCount;
        return this;
    }
    public set versionCount(versionCount: number  | undefined) {
        this['version_count'] = versionCount;
    }
    public get versionCount(): number | undefined {
        return this['version_count'];
    }
    public withWeight(weight: number): ShowInferDeploymentVersionResponse {
        this['weight'] = weight;
        return this;
    }
    public withAdvancedConfig(advancedConfig: AdvancedConfig): ShowInferDeploymentVersionResponse {
        this['advanced_config'] = advancedConfig;
        return this;
    }
    public set advancedConfig(advancedConfig: AdvancedConfig  | undefined) {
        this['advanced_config'] = advancedConfig;
    }
    public get advancedConfig(): AdvancedConfig | undefined {
        return this['advanced_config'];
    }
    public withJobId(jobId: string): ShowInferDeploymentVersionResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withDeploymentName(deploymentName: string): ShowInferDeploymentVersionResponse {
        this['deployment_name'] = deploymentName;
        return this;
    }
    public set deploymentName(deploymentName: string  | undefined) {
        this['deployment_name'] = deploymentName;
    }
    public get deploymentName(): string | undefined {
        return this['deployment_name'];
    }
    public withFrozenInfos(frozenInfos: Array<FrozenInfo>): ShowInferDeploymentVersionResponse {
        this['frozen_infos'] = frozenInfos;
        return this;
    }
    public set frozenInfos(frozenInfos: Array<FrozenInfo>  | undefined) {
        this['frozen_infos'] = frozenInfos;
    }
    public get frozenInfos(): Array<FrozenInfo> | undefined {
        return this['frozen_infos'];
    }
}