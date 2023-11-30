import { DerivativeIndexVODetailData } from './DerivativeIndexVODetailData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDerivativeIndexByIdResponse extends SdkResponse {
    public data?: DerivativeIndexVODetailData;
    public constructor() { 
        super();
    }
    public withData(data: DerivativeIndexVODetailData): ShowDerivativeIndexByIdResponse {
        this['data'] = data;
        return this;
    }
}