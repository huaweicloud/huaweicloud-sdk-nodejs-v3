import { CreateCodeTableResultData } from './CreateCodeTableResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateCodeTableResponse extends SdkResponse {
    public data?: CreateCodeTableResultData;
    public constructor() { 
        super();
    }
    public withData(data: CreateCodeTableResultData): UpdateCodeTableResponse {
        this['data'] = data;
        return this;
    }
}