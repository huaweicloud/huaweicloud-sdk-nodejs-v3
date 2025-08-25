import { ShowClusterAccessKeyListResponseBodyResult } from './ShowClusterAccessKeyListResponseBodyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowClusterAccessKeyListResponse extends SdkResponse {
    public result?: Array<ShowClusterAccessKeyListResponseBodyResult>;
    public constructor() { 
        super();
    }
    public withResult(result: Array<ShowClusterAccessKeyListResponseBodyResult>): ShowClusterAccessKeyListResponse {
        this['result'] = result;
        return this;
    }
}