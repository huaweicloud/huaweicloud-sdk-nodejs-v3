import { ListLogsRespData } from './ListLogsRespData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLogsResponse extends SdkResponse {
    public data?: ListLogsRespData;
    public constructor() { 
        super();
    }
    public withData(data: ListLogsRespData): ListLogsResponse {
        this['data'] = data;
        return this;
    }
}