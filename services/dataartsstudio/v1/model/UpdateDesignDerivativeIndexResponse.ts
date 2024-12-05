import { UpdateDesignDerivativeIndexResultData } from './UpdateDesignDerivativeIndexResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateDesignDerivativeIndexResponse extends SdkResponse {
    public data?: UpdateDesignDerivativeIndexResultData;
    public constructor() { 
        super();
    }
    public withData(data: UpdateDesignDerivativeIndexResultData): UpdateDesignDerivativeIndexResponse {
        this['data'] = data;
        return this;
    }
}