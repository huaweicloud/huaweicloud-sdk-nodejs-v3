import { ShowLogsCountRespData } from './ShowLogsCountRespData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLogsCountResponse extends SdkResponse {
    public data?: ShowLogsCountRespData;
    public constructor() { 
        super();
    }
    public withData(data: ShowLogsCountRespData): ShowLogsCountResponse {
        this['data'] = data;
        return this;
    }
}