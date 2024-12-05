import { CreateDesignDerivativeIndexResultData } from './CreateDesignDerivativeIndexResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDesignDerivativeIndexResponse extends SdkResponse {
    public data?: CreateDesignDerivativeIndexResultData;
    public constructor() { 
        super();
    }
    public withData(data: CreateDesignDerivativeIndexResultData): CreateDesignDerivativeIndexResponse {
        this['data'] = data;
        return this;
    }
}