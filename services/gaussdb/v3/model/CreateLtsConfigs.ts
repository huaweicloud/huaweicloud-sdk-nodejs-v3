import { InstanceSaveLtsConfig } from './InstanceSaveLtsConfig';


export class CreateLtsConfigs {
    private 'log_configs'?: Array<InstanceSaveLtsConfig>;
    public constructor(logConfigs?: Array<InstanceSaveLtsConfig>) { 
        this['log_configs'] = logConfigs;
    }
    public withLogConfigs(logConfigs: Array<InstanceSaveLtsConfig>): CreateLtsConfigs {
        this['log_configs'] = logConfigs;
        return this;
    }
    public set logConfigs(logConfigs: Array<InstanceSaveLtsConfig>  | undefined) {
        this['log_configs'] = logConfigs;
    }
    public get logConfigs(): Array<InstanceSaveLtsConfig> | undefined {
        return this['log_configs'];
    }
}