import { CreateStandardTemplateResultData } from './CreateStandardTemplateResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateStandardTemplateResponse extends SdkResponse {
    public data?: CreateStandardTemplateResultData;
    public constructor() { 
        super();
    }
    public withData(data: CreateStandardTemplateResultData): CreateStandardTemplateResponse {
        this['data'] = data;
        return this;
    }
}