import { DeleteResultData } from './DeleteResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteDesignFactLogicTableResponse extends SdkResponse {
    public data?: DeleteResultData;
    public constructor() { 
        super();
    }
    public withData(data: DeleteResultData): DeleteDesignFactLogicTableResponse {
        this['data'] = data;
        return this;
    }
}