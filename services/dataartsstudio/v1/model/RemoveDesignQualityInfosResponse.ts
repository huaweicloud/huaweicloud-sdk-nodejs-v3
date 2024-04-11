import { RemoveDesignQualityInfosResultData } from './RemoveDesignQualityInfosResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RemoveDesignQualityInfosResponse extends SdkResponse {
    public data?: RemoveDesignQualityInfosResultData;
    public constructor() { 
        super();
    }
    public withData(data: RemoveDesignQualityInfosResultData): RemoveDesignQualityInfosResponse {
        this['data'] = data;
        return this;
    }
}