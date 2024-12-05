import { DeleteResultData } from './DeleteResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteDesignDimensionLogicTableResponse extends SdkResponse {
    public data?: DeleteResultData;
    public constructor() { 
        super();
    }
    public withData(data: DeleteResultData): DeleteDesignDimensionLogicTableResponse {
        this['data'] = data;
        return this;
    }
}