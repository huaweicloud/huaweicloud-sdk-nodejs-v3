import { UpdateScalingConfigOption } from './UpdateScalingConfigOption';


export class UpdateScalingConfigRequest {
    private 'scaling_configuration_id'?: string;
    public body?: UpdateScalingConfigOption;
    public constructor(scalingConfigurationId?: string) { 
        this['scaling_configuration_id'] = scalingConfigurationId;
    }
    public withScalingConfigurationId(scalingConfigurationId: string): UpdateScalingConfigRequest {
        this['scaling_configuration_id'] = scalingConfigurationId;
        return this;
    }
    public set scalingConfigurationId(scalingConfigurationId: string  | undefined) {
        this['scaling_configuration_id'] = scalingConfigurationId;
    }
    public get scalingConfigurationId(): string | undefined {
        return this['scaling_configuration_id'];
    }
    public withBody(body: UpdateScalingConfigOption): UpdateScalingConfigRequest {
        this['body'] = body;
        return this;
    }
}