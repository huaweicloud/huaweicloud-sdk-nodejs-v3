import { DiskResp } from './DiskResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHostDiskResponse extends SdkResponse {
    public body?: Array<DiskResp>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<DiskResp>): ListHostDiskResponse {
        this['body'] = body;
        return this;
    }
}