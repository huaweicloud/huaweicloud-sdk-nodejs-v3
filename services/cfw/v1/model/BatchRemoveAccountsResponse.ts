import { MultiAccountRespData } from './MultiAccountRespData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchRemoveAccountsResponse extends SdkResponse {
    public data?: MultiAccountRespData;
    public constructor() { 
        super();
    }
    public withData(data: MultiAccountRespData): BatchRemoveAccountsResponse {
        this['data'] = data;
        return this;
    }
}