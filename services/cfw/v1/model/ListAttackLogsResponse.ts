import { HttpQueryCfwAttackLogsResponseDTOData } from './HttpQueryCfwAttackLogsResponseDTOData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAttackLogsResponse extends SdkResponse {
    public data?: HttpQueryCfwAttackLogsResponseDTOData;
    public constructor() { 
        super();
    }
    public withData(data: HttpQueryCfwAttackLogsResponseDTOData): ListAttackLogsResponse {
        this['data'] = data;
        return this;
    }
}