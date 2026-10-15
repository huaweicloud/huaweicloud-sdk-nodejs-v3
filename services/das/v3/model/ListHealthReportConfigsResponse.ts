import { InstanceHealthReportConfigDto } from './InstanceHealthReportConfigDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHealthReportConfigsResponse extends SdkResponse {
    public configs?: Array<InstanceHealthReportConfigDto>;
    public constructor() { 
        super();
    }
    public withConfigs(configs: Array<InstanceHealthReportConfigDto>): ListHealthReportConfigsResponse {
        this['configs'] = configs;
        return this;
    }
}