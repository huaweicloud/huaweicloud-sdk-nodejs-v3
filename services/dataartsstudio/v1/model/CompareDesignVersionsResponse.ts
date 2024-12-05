import { CompareDesignVersionsResultData } from './CompareDesignVersionsResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CompareDesignVersionsResponse extends SdkResponse {
    public data?: CompareDesignVersionsResultData;
    public constructor() { 
        super();
    }
    public withData(data: CompareDesignVersionsResultData): CompareDesignVersionsResponse {
        this['data'] = data;
        return this;
    }
}