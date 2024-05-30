import { ListTableModelsResultData } from './ListTableModelsResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTableModelsResponse extends SdkResponse {
    public data?: ListTableModelsResultData;
    public constructor() { 
        super();
    }
    public withData(data: ListTableModelsResultData): ListTableModelsResponse {
        this['data'] = data;
        return this;
    }
}