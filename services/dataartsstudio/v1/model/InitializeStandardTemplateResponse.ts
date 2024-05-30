import { InitializeStandardTemplateResultData } from './InitializeStandardTemplateResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class InitializeStandardTemplateResponse extends SdkResponse {
    public data?: InitializeStandardTemplateResultData;
    public constructor() { 
        super();
    }
    public withData(data: InitializeStandardTemplateResultData): InitializeStandardTemplateResponse {
        this['data'] = data;
        return this;
    }
}