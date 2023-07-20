

export class BatchDeleteScalingConfigOption {
    private 'scaling_configuration_id'?: Array<string>;
    public constructor(scalingConfigurationId?: Array<string>) { 
        this['scaling_configuration_id'] = scalingConfigurationId;
    }
    public withScalingConfigurationId(scalingConfigurationId: Array<string>): BatchDeleteScalingConfigOption {
        this['scaling_configuration_id'] = scalingConfigurationId;
        return this;
    }
    public set scalingConfigurationId(scalingConfigurationId: Array<string>  | undefined) {
        this['scaling_configuration_id'] = scalingConfigurationId;
    }
    public get scalingConfigurationId(): Array<string> | undefined {
        return this['scaling_configuration_id'];
    }
}