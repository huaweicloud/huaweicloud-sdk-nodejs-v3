import { ShowRegionInfoResp } from './ShowRegionInfoResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRegionInfoResponse extends SdkResponse {
    public body?: Array<ShowRegionInfoResp>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ShowRegionInfoResp>): ShowRegionInfoResponse {
        this['body'] = body;
        return this;
    }
}