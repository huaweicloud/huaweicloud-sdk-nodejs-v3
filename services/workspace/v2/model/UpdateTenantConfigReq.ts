import { FunctionConfig } from './FunctionConfig';


export class UpdateTenantConfigReq {
    private 'function_config'?: FunctionConfig;
    public constructor() { 
    }
    public withFunctionConfig(functionConfig: FunctionConfig): UpdateTenantConfigReq {
        this['function_config'] = functionConfig;
        return this;
    }
    public set functionConfig(functionConfig: FunctionConfig  | undefined) {
        this['function_config'] = functionConfig;
    }
    public get functionConfig(): FunctionConfig | undefined {
        return this['function_config'];
    }
}