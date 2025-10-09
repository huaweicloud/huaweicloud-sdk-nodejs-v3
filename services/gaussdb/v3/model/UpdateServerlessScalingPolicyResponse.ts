import { CustomScalingConfig } from './CustomScalingConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateServerlessScalingPolicyResponse extends SdkResponse {
    private 'enlarge_step_size'?: string;
    private 'custom_scaling_config'?: CustomScalingConfig;
    public constructor() { 
        super();
    }
    public withEnlargeStepSize(enlargeStepSize: string): UpdateServerlessScalingPolicyResponse {
        this['enlarge_step_size'] = enlargeStepSize;
        return this;
    }
    public set enlargeStepSize(enlargeStepSize: string  | undefined) {
        this['enlarge_step_size'] = enlargeStepSize;
    }
    public get enlargeStepSize(): string | undefined {
        return this['enlarge_step_size'];
    }
    public withCustomScalingConfig(customScalingConfig: CustomScalingConfig): UpdateServerlessScalingPolicyResponse {
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