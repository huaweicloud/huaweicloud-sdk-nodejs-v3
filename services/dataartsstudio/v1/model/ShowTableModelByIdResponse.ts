import { CreateTableModelResultData } from './CreateTableModelResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTableModelByIdResponse extends SdkResponse {
    public data?: CreateTableModelResultData;
    public constructor() { 
        super();
    }
    public withData(data: CreateTableModelResultData): ShowTableModelByIdResponse {
        this['data'] = data;
        return this;
    }
}