import { ConfigurationSummary2 } from './ConfigurationSummary2';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateGaussMySqlConfigurationResponse extends SdkResponse {
    public configurations?: ConfigurationSummary2;
    public constructor() { 
        super();
    }
    public withConfigurations(configurations: ConfigurationSummary2): CreateGaussMySqlConfigurationResponse {
        this['configurations'] = configurations;
        return this;
    }
}