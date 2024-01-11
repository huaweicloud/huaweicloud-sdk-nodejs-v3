import { ParameterConfig } from './ParameterConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListJobParametersResponse extends SdkResponse {
    public count?: number;
    private 'parameter_config_list'?: Array<ParameterConfig>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListJobParametersResponse {
        this['count'] = count;
        return this;
    }
    public withParameterConfigList(parameterConfigList: Array<ParameterConfig>): ListJobParametersResponse {
        this['parameter_config_list'] = parameterConfigList;
        return this;
    }
    public set parameterConfigList(parameterConfigList: Array<ParameterConfig>  | undefined) {
        this['parameter_config_list'] = parameterConfigList;
    }
    public get parameterConfigList(): Array<ParameterConfig> | undefined {
        return this['parameter_config_list'];
    }
}