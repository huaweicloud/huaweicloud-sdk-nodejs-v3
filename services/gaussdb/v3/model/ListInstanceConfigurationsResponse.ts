import { ParameterConfigurationInfo } from './ParameterConfigurationInfo';
import { ParameterValuesInfo } from './ParameterValuesInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceConfigurationsResponse extends SdkResponse {
    public configurations?: ParameterConfigurationInfo;
    private 'total_count'?: number;
    private 'parameter_values'?: Array<ParameterValuesInfo>;
    public constructor() { 
        super();
    }
    public withConfigurations(configurations: ParameterConfigurationInfo): ListInstanceConfigurationsResponse {
        this['configurations'] = configurations;
        return this;
    }
    public withTotalCount(totalCount: number): ListInstanceConfigurationsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withParameterValues(parameterValues: Array<ParameterValuesInfo>): ListInstanceConfigurationsResponse {
        this['parameter_values'] = parameterValues;
        return this;
    }
    public set parameterValues(parameterValues: Array<ParameterValuesInfo>  | undefined) {
        this['parameter_values'] = parameterValues;
    }
    public get parameterValues(): Array<ParameterValuesInfo> | undefined {
        return this['parameter_values'];
    }
}