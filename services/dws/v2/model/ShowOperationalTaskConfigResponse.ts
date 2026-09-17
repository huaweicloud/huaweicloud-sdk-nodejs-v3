import { OperationalTaskConfiguration } from './OperationalTaskConfiguration';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowOperationalTaskConfigResponse extends SdkResponse {
    public configuration?: OperationalTaskConfiguration;
    public constructor() { 
        super();
    }
    public withConfiguration(configuration: OperationalTaskConfiguration): ShowOperationalTaskConfigResponse {
        this['configuration'] = configuration;
        return this;
    }
}