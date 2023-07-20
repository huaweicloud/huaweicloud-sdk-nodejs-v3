import { ConfigurationResult } from './ConfigurationResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListParamGroupTemplatesResponse extends SdkResponse {
    public count?: number;
    public configurations?: Array<ConfigurationResult>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListParamGroupTemplatesResponse {
        this['count'] = count;
        return this;
    }
    public withConfigurations(configurations: Array<ConfigurationResult>): ListParamGroupTemplatesResponse {
        this['configurations'] = configurations;
        return this;
    }
}