import { HtapDeleteLTSConfigRequestBodyLogConfigs } from './HtapDeleteLTSConfigRequestBodyLogConfigs';


export class HtapDeleteLTSConfigRequestBody {
    private 'log_configs'?: Array<HtapDeleteLTSConfigRequestBodyLogConfigs>;
    public constructor(logConfigs?: Array<HtapDeleteLTSConfigRequestBodyLogConfigs>) { 
        this['log_configs'] = logConfigs;
    }
    public withLogConfigs(logConfigs: Array<HtapDeleteLTSConfigRequestBodyLogConfigs>): HtapDeleteLTSConfigRequestBody {
        this['log_configs'] = logConfigs;
        return this;
    }
    public set logConfigs(logConfigs: Array<HtapDeleteLTSConfigRequestBodyLogConfigs>  | undefined) {
        this['log_configs'] = logConfigs;
    }
    public get logConfigs(): Array<HtapDeleteLTSConfigRequestBodyLogConfigs> | undefined {
        return this['log_configs'];
    }
}