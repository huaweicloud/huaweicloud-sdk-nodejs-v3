import { ConfigurationsResult } from './ConfigurationsResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListParameterGroupTemplatesResponse extends SdkResponse {
    public count?: number;
    public configurations?: Array<ConfigurationsResult>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListParameterGroupTemplatesResponse {
        this['count'] = count;
        return this;
    }
    public withConfigurations(configurations: Array<ConfigurationsResult>): ListParameterGroupTemplatesResponse {
        this['configurations'] = configurations;
        return this;
    }
}