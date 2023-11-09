import { ApplicationListConfigConfiguration1 } from './ApplicationListConfigConfiguration1';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowApplicationConfigurationResponse extends SdkResponse {
    public configuration?: Array<ApplicationListConfigConfiguration1>;
    public constructor() { 
        super();
    }
    public withConfiguration(configuration: Array<ApplicationListConfigConfiguration1>): ShowApplicationConfigurationResponse {
        this['configuration'] = configuration;
        return this;
    }
}