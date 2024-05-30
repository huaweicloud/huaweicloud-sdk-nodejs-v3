import { CreateCodeTableResultData } from './CreateCodeTableResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCodeTableByIdResponse extends SdkResponse {
    public data?: CreateCodeTableResultData;
    public constructor() { 
        super();
    }
    public withData(data: CreateCodeTableResultData): ShowCodeTableByIdResponse {
        this['data'] = data;
        return this;
    }
}