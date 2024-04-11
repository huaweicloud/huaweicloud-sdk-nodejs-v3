import { UpdateDesignTableQualityResultData } from './UpdateDesignTableQualityResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateDesignTableQualityResponse extends SdkResponse {
    public data?: UpdateDesignTableQualityResultData;
    public constructor() { 
        super();
    }
    public withData(data: UpdateDesignTableQualityResultData): UpdateDesignTableQualityResponse {
        this['data'] = data;
        return this;
    }
}