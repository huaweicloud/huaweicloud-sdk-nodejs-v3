import { CreateChLtsConfigRequestBodyLogConfigs } from './CreateChLtsConfigRequestBodyLogConfigs';


export class CreateChLtsConfigRequestBody {
    private 'log_configs'?: Array<CreateChLtsConfigRequestBodyLogConfigs>;
    public constructor(logConfigs?: Array<CreateChLtsConfigRequestBodyLogConfigs>) { 
        this['log_configs'] = logConfigs;
    }
    public withLogConfigs(logConfigs: Array<CreateChLtsConfigRequestBodyLogConfigs>): CreateChLtsConfigRequestBody {
        this['log_configs'] = logConfigs;
        return this;
    }
    public set logConfigs(logConfigs: Array<CreateChLtsConfigRequestBodyLogConfigs>  | undefined) {
        this['log_configs'] = logConfigs;
    }
    public get logConfigs(): Array<CreateChLtsConfigRequestBodyLogConfigs> | undefined {
        return this['log_configs'];
    }
}