import { ApplicationQueryResponseData } from './ApplicationQueryResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApplicationsResponse extends SdkResponse {
    public data?: Array<ApplicationQueryResponseData>;
    public constructor() { 
        super();
    }
    public withData(data: Array<ApplicationQueryResponseData>): ListApplicationsResponse {
        this['data'] = data;
        return this;
    }
}