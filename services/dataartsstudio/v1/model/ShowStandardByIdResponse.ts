import { ShowStandardByIdResultData } from './ShowStandardByIdResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowStandardByIdResponse extends SdkResponse {
    public data?: ShowStandardByIdResultData;
    public constructor() { 
        super();
    }
    public withData(data: ShowStandardByIdResultData): ShowStandardByIdResponse {
        this['data'] = data;
        return this;
    }
}