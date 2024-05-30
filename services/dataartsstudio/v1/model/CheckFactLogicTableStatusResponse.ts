import { CheckDimensionStatusResultData } from './CheckDimensionStatusResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckFactLogicTableStatusResponse extends SdkResponse {
    public data?: CheckDimensionStatusResultData;
    public constructor() { 
        super();
    }
    public withData(data: CheckDimensionStatusResultData): CheckFactLogicTableStatusResponse {
        this['data'] = data;
        return this;
    }
}