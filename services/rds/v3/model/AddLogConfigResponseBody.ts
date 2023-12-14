import { AddLogConfigs } from './AddLogConfigs';


export class AddLogConfigResponseBody {
    private 'log_configs'?: Array<AddLogConfigs>;
    public constructor(logConfigs?: Array<AddLogConfigs>) { 
        this['log_configs'] = logConfigs;
    }
    public withLogConfigs(logConfigs: Array<AddLogConfigs>): AddLogConfigResponseBody {
        this['log_configs'] = logConfigs;
        return this;
    }
    public set logConfigs(logConfigs: Array<AddLogConfigs>  | undefined) {
        this['log_configs'] = logConfigs;
    }
    public get logConfigs(): Array<AddLogConfigs> | undefined {
        return this['log_configs'];
    }
}