import { ParamGroupInfoResult } from './ParamGroupInfoResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateConfigurationResponse extends SdkResponse {
    public configuration?: ParamGroupInfoResult;
    public constructor() { 
        super();
    }
    public withConfiguration(configuration: ParamGroupInfoResult): CreateConfigurationResponse {
        this['configuration'] = configuration;
        return this;
    }
}