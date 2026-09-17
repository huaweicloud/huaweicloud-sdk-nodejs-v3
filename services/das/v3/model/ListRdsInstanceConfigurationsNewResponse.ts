import { ConfigurationParameterDto } from './ConfigurationParameterDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRdsInstanceConfigurationsNewResponse extends SdkResponse {
    public body?: Array<ConfigurationParameterDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ConfigurationParameterDto>): ListRdsInstanceConfigurationsNewResponse {
        this['body'] = body;
        return this;
    }
}