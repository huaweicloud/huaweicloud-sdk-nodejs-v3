import { CreateTableModelResultData } from './CreateTableModelResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateTableModelResponse extends SdkResponse {
    public data?: CreateTableModelResultData;
    public constructor() { 
        super();
    }
    public withData(data: CreateTableModelResultData): CreateTableModelResponse {
        this['data'] = data;
        return this;
    }
}