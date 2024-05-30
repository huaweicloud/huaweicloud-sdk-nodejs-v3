import { CreateCodeTableResultData } from './CreateCodeTableResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateCodeTableResponse extends SdkResponse {
    public data?: CreateCodeTableResultData;
    public constructor() { 
        super();
    }
    public withData(data: CreateCodeTableResultData): CreateCodeTableResponse {
        this['data'] = data;
        return this;
    }
}