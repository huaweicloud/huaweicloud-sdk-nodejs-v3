import { ParameterValuesInfo } from './ParameterValuesInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGaussDbInstanceConfigurationsResponse extends SdkResponse {
    public body?: Array<ParameterValuesInfo>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ParameterValuesInfo>): ListGaussDbInstanceConfigurationsResponse {
        this['body'] = body;
        return this;
    }
}