import { DeleteLogConfigs } from './DeleteLogConfigs';


export class DeleteLogConfigResponseBody {
    private 'log_configs'?: Array<DeleteLogConfigs>;
    public constructor(logConfigs?: Array<DeleteLogConfigs>) { 
        this['log_configs'] = logConfigs;
    }
    public withLogConfigs(logConfigs: Array<DeleteLogConfigs>): DeleteLogConfigResponseBody {
        this['log_configs'] = logConfigs;
        return this;
    }
    public set logConfigs(logConfigs: Array<DeleteLogConfigs>  | undefined) {
        this['log_configs'] = logConfigs;
    }
    public get logConfigs(): Array<DeleteLogConfigs> | undefined {
        return this['log_configs'];
    }
}