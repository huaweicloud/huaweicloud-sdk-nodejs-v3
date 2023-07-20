import { UpdateConfigurationRspConfiguration } from './UpdateConfigurationRspConfiguration';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateConfigurationResponse extends SdkResponse {
    public configuration?: UpdateConfigurationRspConfiguration;
    public constructor() { 
        super();
    }
    public withConfiguration(configuration: UpdateConfigurationRspConfiguration): UpdateConfigurationResponse {
        this['configuration'] = configuration;
        return this;
    }
}