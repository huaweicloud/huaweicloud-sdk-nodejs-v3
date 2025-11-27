import { SpeicialConfiguration } from './SpeicialConfiguration';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSpecialConfigurationResponse extends SdkResponse {
    public total?: number;
    public specialConfigurations?: Array<SpeicialConfiguration>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListSpecialConfigurationResponse {
        this['total'] = total;
        return this;
    }
    public withSpecialConfigurations(specialConfigurations: Array<SpeicialConfiguration>): ListSpecialConfigurationResponse {
        this['specialConfigurations'] = specialConfigurations;
        return this;
    }
}