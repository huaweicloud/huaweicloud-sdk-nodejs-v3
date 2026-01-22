import { ListReportHistoryRespData } from './ListReportHistoryRespData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListReportHistoryResponse extends SdkResponse {
    public data?: ListReportHistoryRespData;
    public constructor() { 
        super();
    }
    public withData(data: ListReportHistoryRespData): ListReportHistoryResponse {
        this['data'] = data;
        return this;
    }
}