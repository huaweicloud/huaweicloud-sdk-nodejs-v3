import { CountTableModelsResultData } from './CountTableModelsResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CountTableModelsResponse extends SdkResponse {
    public data?: CountTableModelsResultData;
    public constructor() { 
        super();
    }
    public withData(data: CountTableModelsResultData): CountTableModelsResponse {
        this['data'] = data;
        return this;
    }
}