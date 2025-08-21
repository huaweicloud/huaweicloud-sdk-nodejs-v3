import { ListReportProfilesRespData } from './ListReportProfilesRespData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListReportProfilesResponse extends SdkResponse {
    public data?: ListReportProfilesRespData;
    public constructor() { 
        super();
    }
    public withData(data: ListReportProfilesRespData): ListReportProfilesResponse {
        this['data'] = data;
        return this;
    }
}