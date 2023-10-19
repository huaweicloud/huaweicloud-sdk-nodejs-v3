import { InstanceConfig } from './InstanceConfig';


export class CreateScalingConfigOption {
    private 'scaling_configuration_name'?: string;
    private 'instance_config'?: InstanceConfig;
    private 'source_scaling_configuration_id'?: string;
    public constructor() { 
    }
    public withScalingConfigurationName(scalingConfigurationName: string): CreateScalingConfigOption {
        this['scaling_configuration_name'] = scalingConfigurationName;
        return this;
    }
    public set scalingConfigurationName(scalingConfigurationName: string  | undefined) {
        this['scaling_configuration_name'] = scalingConfigurationName;
    }
    public get scalingConfigurationName(): string | undefined {
        return this['scaling_configuration_name'];
    }
    public withInstanceConfig(instanceConfig: InstanceConfig): CreateScalingConfigOption {
        this['instance_config'] = instanceConfig;
        return this;
    }
    public set instanceConfig(instanceConfig: InstanceConfig  | undefined) {
        this['instance_config'] = instanceConfig;
    }
    public get instanceConfig(): InstanceConfig | undefined {
        return this['instance_config'];
    }
    public withSourceScalingConfigurationId(sourceScalingConfigurationId: string): CreateScalingConfigOption {
        this['source_scaling_configuration_id'] = sourceScalingConfigurationId;
        return this;
    }
    public set sourceScalingConfigurationId(sourceScalingConfigurationId: string  | undefined) {
        this['source_scaling_configuration_id'] = sourceScalingConfigurationId;
    }
    public get sourceScalingConfigurationId(): string | undefined {
        return this['source_scaling_configuration_id'];
    }
}