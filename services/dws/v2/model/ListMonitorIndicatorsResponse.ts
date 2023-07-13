import { IndicatorInfo } from './IndicatorInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMonitorIndicatorsResponse extends SdkResponse {
    public body?: Array<IndicatorInfo>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<IndicatorInfo>): ListMonitorIndicatorsResponse {
        this['body'] = body;
        return this;
    }
}