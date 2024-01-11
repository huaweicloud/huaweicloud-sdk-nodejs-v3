import { ListJobHistoryParameter } from './ListJobHistoryParameter';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListJobHistoryParametersResponse extends SdkResponse {
    public count?: number;
    private 'parameter_history_config_list'?: Array<ListJobHistoryParameter>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListJobHistoryParametersResponse {
        this['count'] = count;
        return this;
    }
    public withParameterHistoryConfigList(parameterHistoryConfigList: Array<ListJobHistoryParameter>): ListJobHistoryParametersResponse {
        this['parameter_history_config_list'] = parameterHistoryConfigList;
        return this;
    }
    public set parameterHistoryConfigList(parameterHistoryConfigList: Array<ListJobHistoryParameter>  | undefined) {
        this['parameter_history_config_list'] = parameterHistoryConfigList;
    }
    public get parameterHistoryConfigList(): Array<ListJobHistoryParameter> | undefined {
        return this['parameter_history_config_list'];
    }
}