import { CreateStandardTemplateResultData } from './CreateStandardTemplateResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateStandardTemplateResponse extends SdkResponse {
    public data?: CreateStandardTemplateResultData;
    public constructor() { 
        super();
    }
    public withData(data: CreateStandardTemplateResultData): UpdateStandardTemplateResponse {
        this['data'] = data;
        return this;
    }
}