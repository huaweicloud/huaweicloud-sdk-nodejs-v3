import { ReleaseResp } from './ReleaseResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListReleasesResponse extends SdkResponse {
    public body?: Array<ReleaseResp>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ReleaseResp>): ListReleasesResponse {
        this['body'] = body;
        return this;
    }
}