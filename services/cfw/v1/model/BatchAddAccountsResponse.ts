import { MultiAccountRespData } from './MultiAccountRespData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchAddAccountsResponse extends SdkResponse {
    public data?: MultiAccountRespData;
    public constructor() { 
        super();
    }
    public withData(data: MultiAccountRespData): BatchAddAccountsResponse {
        this['data'] = data;
        return this;
    }
}