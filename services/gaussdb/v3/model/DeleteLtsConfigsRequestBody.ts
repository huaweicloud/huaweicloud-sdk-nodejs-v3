import { InstanceDeleteLtsConfig } from './InstanceDeleteLtsConfig';


export class DeleteLtsConfigsRequestBody {
    private 'log_configs'?: Array<InstanceDeleteLtsConfig>;
    public constructor(logConfigs?: Array<InstanceDeleteLtsConfig>) { 
        this['log_configs'] = logConfigs;
    }
    public withLogConfigs(logConfigs: Array<InstanceDeleteLtsConfig>): DeleteLtsConfigsRequestBody {
        this['log_configs'] = logConfigs;
        return this;
    }
    public set logConfigs(logConfigs: Array<InstanceDeleteLtsConfig>  | undefined) {
        this['log_configs'] = logConfigs;
    }
    public get logConfigs(): Array<InstanceDeleteLtsConfig> | undefined {
        return this['log_configs'];
    }
}