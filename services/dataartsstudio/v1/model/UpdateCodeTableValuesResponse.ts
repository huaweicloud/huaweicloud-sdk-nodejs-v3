import { UpdateCodeTableValuesResultData } from './UpdateCodeTableValuesResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateCodeTableValuesResponse extends SdkResponse {
    public data?: UpdateCodeTableValuesResultData;
    public constructor() { 
        super();
    }
    public withData(data: UpdateCodeTableValuesResultData): UpdateCodeTableValuesResponse {
        this['data'] = data;
        return this;
    }
}