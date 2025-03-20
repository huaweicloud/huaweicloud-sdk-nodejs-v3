import { ListDesignDataLayersResultData } from './ListDesignDataLayersResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateDesignDataLayersResponse extends SdkResponse {
    public data?: ListDesignDataLayersResultData;
    public constructor() { 
        super();
    }
    public withData(data: ListDesignDataLayersResultData): UpdateDesignDataLayersResponse {
        this['data'] = data;
        return this;
    }
}