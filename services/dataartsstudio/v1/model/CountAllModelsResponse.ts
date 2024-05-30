import { CountAllModelsResultData } from './CountAllModelsResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CountAllModelsResponse extends SdkResponse {
    public data?: CountAllModelsResultData;
    public constructor() { 
        super();
    }
    public withData(data: CountAllModelsResultData): CountAllModelsResponse {
        this['data'] = data;
        return this;
    }
}