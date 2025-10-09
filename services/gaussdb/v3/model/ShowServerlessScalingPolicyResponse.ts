import { CustomScalingConfig } from './CustomScalingConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowServerlessScalingPolicyResponse extends SdkResponse {
    private 'enlarge_step_size'?: string;
    private 'custom_scaling_config'?: CustomScalingConfig;
    public constructor() { 
        super();
    }
    public withEnlargeStepSize(enlargeStepSize: string): ShowServerlessScalingPolicyResponse {
        this['enlarge_step_size'] = enlargeStepSize;
        return this;
    }
    public set enlargeStepSize(enlargeStepSize: string  | undefined) {
        this['enlarge_step_size'] = enlargeStepSize;
    }
    public get enlargeStepSize(): string | undefined {
        return this['enlarge_step_size'];
    }
    public withCustomScalingConfig(customScalingConfig: CustomScalingConfig): ShowServerlessScalingPolicyResponse {
        this['custom_scaling_config'] = customScalingConfig;
        return this;
    }
    public set customScalingConfig(customScalingConfig: CustomScalingConfig  | undefined) {
        this['custom_scaling_config'] = customScalingConfig;
    }
    public get customScalingConfig(): CustomScalingConfig | undefined {
        return this['custom_scaling_config'];
    }
}