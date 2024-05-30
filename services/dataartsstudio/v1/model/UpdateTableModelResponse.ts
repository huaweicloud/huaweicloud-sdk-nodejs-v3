import { CreateTableModelResultData } from './CreateTableModelResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateTableModelResponse extends SdkResponse {
    public data?: CreateTableModelResultData;
    public constructor() { 
        super();
    }
    public withData(data: CreateTableModelResultData): UpdateTableModelResponse {
        this['data'] = data;
        return this;
    }
}