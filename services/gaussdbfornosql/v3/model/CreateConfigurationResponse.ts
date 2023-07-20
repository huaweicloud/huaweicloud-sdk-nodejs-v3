import { CreateConfigurationResult } from './CreateConfigurationResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateConfigurationResponse extends SdkResponse {
    public configuration?: CreateConfigurationResult;
    public constructor() { 
        super();
    }
    public withConfiguration(configuration: CreateConfigurationResult): CreateConfigurationResponse {
        this['configuration'] = configuration;
        return this;
    }
}