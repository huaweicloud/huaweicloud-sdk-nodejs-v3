
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateScalingConfigResponse extends SdkResponse {
    private 'scaling_configuration_id'?: string;
    public constructor() { 
        super();
    }
    public withScalingConfigurationId(scalingConfigurationId: string): CreateScalingConfigResponse {
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