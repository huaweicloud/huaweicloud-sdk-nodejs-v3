import { ScalingConfiguration } from './ScalingConfiguration';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowScalingConfigResponse extends SdkResponse {
    private 'scaling_configuration'?: ScalingConfiguration;
    public constructor() { 
        super();
    }
    public withScalingConfiguration(scalingConfiguration: ScalingConfiguration): ShowScalingConfigResponse {
        this['scaling_configuration'] = scalingConfiguration;
        return this;
    }
    public set scalingConfiguration(scalingConfiguration: ScalingConfiguration  | undefined) {
        this['scaling_configuration'] = scalingConfiguration;
    }
    public get scalingConfiguration(): ScalingConfiguration | undefined {
        return this['scaling_configuration'];
    }
}