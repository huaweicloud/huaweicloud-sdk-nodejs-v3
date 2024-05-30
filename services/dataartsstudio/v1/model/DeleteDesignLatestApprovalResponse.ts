import { DeleteResultData } from './DeleteResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteDesignLatestApprovalResponse extends SdkResponse {
    public data?: DeleteResultData;
    public constructor() { 
        super();
    }
    public withData(data: DeleteResultData): DeleteDesignLatestApprovalResponse {
        this['data'] = data;
        return this;
    }
}