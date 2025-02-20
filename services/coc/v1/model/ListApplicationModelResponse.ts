import { ApplicationModelQueryResponseData } from './ApplicationModelQueryResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApplicationModelResponse extends SdkResponse {
    public data?: ApplicationModelQueryResponseData;
    public constructor() { 
        super();
    }
    public withData(data: ApplicationModelQueryResponseData): ListApplicationModelResponse {
        this['data'] = data;
        return this;
    }
}