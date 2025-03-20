import { ListDesignDataLayersResultData } from './ListDesignDataLayersResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDesignDataLayersResponse extends SdkResponse {
    public data?: ListDesignDataLayersResultData;
    public constructor() { 
        super();
    }
    public withData(data: ListDesignDataLayersResultData): ListDesignDataLayersResponse {
        this['data'] = data;
        return this;
    }
}