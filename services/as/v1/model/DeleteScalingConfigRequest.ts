

export class DeleteScalingConfigRequest {
    private 'scaling_configuration_id'?: string;
    public constructor(scalingConfigurationId?: string) { 
        this['scaling_configuration_id'] = scalingConfigurationId;
    }
    public withScalingConfigurationId(scalingConfigurationId: string): DeleteScalingConfigRequest {
        this['scaling_configuration_id'] = scalingConfigurationId;
        return this;
    }
    public set scalingConfigurationId(scalingConfigurationId: string  | undefined) {
        this['scaling_configuration_id'] = scalingConfigurationId;
    }
    public get scalingConfigurationId(): string | undefined {
        return this['scaling_configuration_id'];
    }
}