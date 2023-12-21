import { CbsGetSpecInfo } from './CbsGetSpecInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSpecificationsResponse extends SdkResponse {
    public body?: Array<CbsGetSpecInfo>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<CbsGetSpecInfo>): ListSpecificationsResponse {
        this['body'] = body;
        return this;
    }
}