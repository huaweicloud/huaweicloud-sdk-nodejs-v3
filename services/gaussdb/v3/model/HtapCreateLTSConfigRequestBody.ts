import { HtapCreateLTSConfigRequestBodyLogConfigs } from './HtapCreateLTSConfigRequestBodyLogConfigs';


export class HtapCreateLTSConfigRequestBody {
    private 'log_configs'?: Array<HtapCreateLTSConfigRequestBodyLogConfigs>;
    public constructor(logConfigs?: Array<HtapCreateLTSConfigRequestBodyLogConfigs>) { 
        this['log_configs'] = logConfigs;
    }
    public withLogConfigs(logConfigs: Array<HtapCreateLTSConfigRequestBodyLogConfigs>): HtapCreateLTSConfigRequestBody {
        this['log_configs'] = logConfigs;
        return this;
    }
    public set logConfigs(logConfigs: Array<HtapCreateLTSConfigRequestBodyLogConfigs>  | undefined) {
        this['log_configs'] = logConfigs;
    }
    public get logConfigs(): Array<HtapCreateLTSConfigRequestBodyLogConfigs> | undefined {
        return this['log_configs'];
    }
}