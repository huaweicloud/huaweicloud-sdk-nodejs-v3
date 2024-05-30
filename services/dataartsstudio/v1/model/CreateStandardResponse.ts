import { CreateStandardResultData } from './CreateStandardResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateStandardResponse extends SdkResponse {
    public data?: CreateStandardResultData;
    public constructor() { 
        super();
    }
    public withData(data: CreateStandardResultData): CreateStandardResponse {
        this['data'] = data;
        return this;
    }
}