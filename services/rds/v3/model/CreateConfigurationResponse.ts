import { ConfigurationSummaryForCreate } from './ConfigurationSummaryForCreate';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateConfigurationResponse extends SdkResponse {
    public configuration?: ConfigurationSummaryForCreate;
    public constructor() { 
        super();
    }
    public withConfiguration(configuration: ConfigurationSummaryForCreate): CreateConfigurationResponse {
        this['configuration'] = configuration;
        return this;
    }
}