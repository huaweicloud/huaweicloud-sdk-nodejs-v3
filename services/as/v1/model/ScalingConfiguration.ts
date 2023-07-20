import { InstanceConfigResult } from './InstanceConfigResult';


export class ScalingConfiguration {
    private 'scaling_configuration_id'?: string;
    public tenant?: string;
    private 'scaling_configuration_name'?: string;
    private 'instance_config'?: InstanceConfigResult;
    private 'create_time'?: Date;
    private 'scaling_group_id'?: string;
    public constructor() { 
    }
    public withScalingConfigurationId(scalingConfigurationId: string): ScalingConfiguration {
        this['scaling_configuration_id'] = scalingConfigurationId;
        return this;
    }
    public set scalingConfigurationId(scalingConfigurationId: string  | undefined) {
        this['scaling_configuration_id'] = scalingConfigurationId;
    }
    public get scalingConfigurationId(): string | undefined {
        return this['scaling_configuration_id'];
    }
    public withTenant(tenant: string): ScalingConfiguration {
        this['tenant'] = tenant;
        return this;
    }
    public withScalingConfigurationName(scalingConfigurationName: string): ScalingConfiguration {
        this['scaling_configuration_name'] = scalingConfigurationName;
        return this;
    }
    public set scalingConfigurationName(scalingConfigurationName: string  | undefined) {
        this['scaling_configuration_name'] = scalingConfigurationName;
    }
    public get scalingConfigurationName(): string | undefined {
        return this['scaling_configuration_name'];
    }
    public withInstanceConfig(instanceConfig: InstanceConfigResult): ScalingConfiguration {
        this['instance_config'] = instanceConfig;
        return this;
    }
    public set instanceConfig(instanceConfig: InstanceConfigResult  | undefined) {
        this['instance_config'] = instanceConfig;
    }
    public get instanceConfig(): InstanceConfigResult | undefined {
        return this['instance_config'];
    }
    public withCreateTime(createTime: Date): ScalingConfiguration {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withScalingGroupId(scalingGroupId: string): ScalingConfiguration {
        this['scaling_group_id'] = scalingGroupId;
        return this;
    }
    public set scalingGroupId(scalingGroupId: string  | undefined) {
        this['scaling_group_id'] = scalingGroupId;
    }
    public get scalingGroupId(): string | undefined {
        return this['scaling_group_id'];
    }
}