import { CheckDimensionStatusResultData } from './CheckDimensionStatusResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDesignOperationResultResponse extends SdkResponse {
    public data?: CheckDimensionStatusResultData;
    public constructor() { 
        super();
    }
    public withData(data: CheckDimensionStatusResultData): ShowDesignOperationResultResponse {
        this['data'] = data;
        return this;
    }
}