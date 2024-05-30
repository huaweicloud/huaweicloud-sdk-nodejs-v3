import { ShowStandardTemplateResultData } from './ShowStandardTemplateResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowStandardTemplateResponse extends SdkResponse {
    public data?: ShowStandardTemplateResultData;
    public constructor() { 
        super();
    }
    public withData(data: ShowStandardTemplateResultData): ShowStandardTemplateResponse {
        this['data'] = data;
        return this;
    }
}