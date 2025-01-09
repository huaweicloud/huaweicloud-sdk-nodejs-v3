import { FunctionConfig } from './FunctionConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTenantConfigsResponse extends SdkResponse {
    private 'function_configs'?: Array<FunctionConfig>;
    public constructor() { 
        super();
    }
    public withFunctionConfigs(functionConfigs: Array<FunctionConfig>): ListTenantConfigsResponse {
        this['function_configs'] = functionConfigs;
        return this;
    }
    public set functionConfigs(functionConfigs: Array<FunctionConfig>  | undefined) {
        this['function_configs'] = functionConfigs;
    }
    public get functionConfigs(): Array<FunctionConfig> | undefined {
        return this['function_configs'];
    }
}