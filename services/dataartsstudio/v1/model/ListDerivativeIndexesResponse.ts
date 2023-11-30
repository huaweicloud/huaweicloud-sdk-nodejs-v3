import { DerivativeIndexVOSearchResultData } from './DerivativeIndexVOSearchResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDerivativeIndexesResponse extends SdkResponse {
    public data?: DerivativeIndexVOSearchResultData;
    public constructor() { 
        super();
    }
    public withData(data: DerivativeIndexVOSearchResultData): ListDerivativeIndexesResponse {
        this['data'] = data;
        return this;
    }
}