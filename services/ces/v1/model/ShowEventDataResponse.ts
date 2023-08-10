import { EventDataInfo } from './EventDataInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowEventDataResponse extends SdkResponse {
    public datapoints?: Array<EventDataInfo>;
    public constructor() { 
        super();
    }
    public withDatapoints(datapoints: Array<EventDataInfo>): ShowEventDataResponse {
        this['datapoints'] = datapoints;
        return this;
    }
}