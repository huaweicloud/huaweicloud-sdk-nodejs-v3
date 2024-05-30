import { CheckDimensionStatusResultData } from './CheckDimensionStatusResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckDimensionStatusResponse extends SdkResponse {
    public data?: CheckDimensionStatusResultData;
    public constructor() { 
        super();
    }
    public withData(data: CheckDimensionStatusResultData): CheckDimensionStatusResponse {
        this['data'] = data;
        return this;
    }
}