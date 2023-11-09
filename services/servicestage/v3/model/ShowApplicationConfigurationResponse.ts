import { ApplicationConfigConfiguration1 } from './ApplicationConfigConfiguration1';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowApplicationConfigurationResponse extends SdkResponse {
    public configuration?: Array<ApplicationConfigConfiguration1>;
    public constructor() { 
        super();
    }
    public withConfiguration(configuration: Array<ApplicationConfigConfiguration1>): ShowApplicationConfigurationResponse {
        this['configuration'] = configuration;
        return this;
    }
}