import { HttpQueryCfwFlowLogsResponseDTOData } from './HttpQueryCfwFlowLogsResponseDTOData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFlowLogsResponse extends SdkResponse {
    public data?: HttpQueryCfwFlowLogsResponseDTOData;
    public constructor() { 
        super();
    }
    public withData(data: HttpQueryCfwFlowLogsResponseDTOData): ListFlowLogsResponse {
        this['data'] = data;
        return this;
    }
}