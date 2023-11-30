import { ReleaseResp } from './ReleaseResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowReleaseHistoryResponse extends SdkResponse {
    public body?: Array<ReleaseResp>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ReleaseResp>): ShowReleaseHistoryResponse {
        this['body'] = body;
        return this;
    }
}