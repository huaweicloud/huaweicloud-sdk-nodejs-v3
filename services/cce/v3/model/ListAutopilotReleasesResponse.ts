import { ReleaseResp } from './ReleaseResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAutopilotReleasesResponse extends SdkResponse {
    public body?: Array<ReleaseResp>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ReleaseResp>): ListAutopilotReleasesResponse {
        this['body'] = body;
        return this;
    }
}