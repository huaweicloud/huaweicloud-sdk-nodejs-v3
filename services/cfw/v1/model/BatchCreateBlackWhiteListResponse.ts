import { AddBlackWhiteListBatchVO } from './AddBlackWhiteListBatchVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCreateBlackWhiteListResponse extends SdkResponse {
    public data?: AddBlackWhiteListBatchVO;
    public constructor() { 
        super();
    }
    public withData(data: AddBlackWhiteListBatchVO): BatchCreateBlackWhiteListResponse {
        this['data'] = data;
        return this;
    }
}