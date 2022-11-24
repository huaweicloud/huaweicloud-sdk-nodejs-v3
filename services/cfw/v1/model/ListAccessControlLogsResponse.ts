import { HttpQueryCfwAccessControllerLogsResponseDTOData } from './HttpQueryCfwAccessControllerLogsResponseDTOData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAccessControlLogsResponse extends SdkResponse {
    public data?: HttpQueryCfwAccessControllerLogsResponseDTOData;
    public constructor() { 
        super();
    }
    public withData(data: HttpQueryCfwAccessControllerLogsResponseDTOData): ListAccessControlLogsResponse {
        this['data'] = data;
        return this;
    }
}