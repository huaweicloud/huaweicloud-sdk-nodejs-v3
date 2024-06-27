import { DeleteChLtsConfigRequestBodyLogConfigs } from './DeleteChLtsConfigRequestBodyLogConfigs';


export class DeleteChLtsConfigRequestBody {
    private 'log_configs'?: Array<DeleteChLtsConfigRequestBodyLogConfigs>;
    public constructor(logConfigs?: Array<DeleteChLtsConfigRequestBodyLogConfigs>) { 
        this['log_configs'] = logConfigs;
    }
    public withLogConfigs(logConfigs: Array<DeleteChLtsConfigRequestBodyLogConfigs>): DeleteChLtsConfigRequestBody {
        this['log_configs'] = logConfigs;
        return this;
    }
    public set logConfigs(logConfigs: Array<DeleteChLtsConfigRequestBodyLogConfigs>  | undefined) {
        this['log_configs'] = logConfigs;
    }
    public get logConfigs(): Array<DeleteChLtsConfigRequestBodyLogConfigs> | undefined {
        return this['log_configs'];
    }
}