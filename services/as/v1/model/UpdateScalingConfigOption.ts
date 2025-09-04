import { UpdateInstanceConfig } from './UpdateInstanceConfig';


export class UpdateScalingConfigOption {
    private 'instance_config'?: UpdateInstanceConfig;
    public constructor(instanceConfig?: UpdateInstanceConfig) { 
        this['instance_config'] = instanceConfig;
    }
    public withInstanceConfig(instanceConfig: UpdateInstanceConfig): UpdateScalingConfigOption {
        this['instance_config'] = instanceConfig;
        return this;
    }
    public set instanceConfig(instanceConfig: UpdateInstanceConfig  | undefined) {
        this['instance_config'] = instanceConfig;
    }
    public get instanceConfig(): UpdateInstanceConfig | undefined {
        return this['instance_config'];
    }
}