import { CustomScalingConfig } from './CustomScalingConfig';


export class ServerlessScalingPolicy {
    private 'enlarge_step_size'?: string;
    private 'custom_scaling_config'?: CustomScalingConfig;
    public constructor() { 
    }
    public withEnlargeStepSize(enlargeStepSize: string): ServerlessScalingPolicy {
        this['enlarge_step_size'] = enlargeStepSize;
        return this;
    }
    public set enlargeStepSize(enlargeStepSize: string  | undefined) {
        this['enlarge_step_size'] = enlargeStepSize;
    }
    public get enlargeStepSize(): string | undefined {
        return this['enlarge_step_size'];
    }
    public withCustomScalingConfig(customScalingConfig: CustomScalingConfig): ServerlessScalingPolicy {
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