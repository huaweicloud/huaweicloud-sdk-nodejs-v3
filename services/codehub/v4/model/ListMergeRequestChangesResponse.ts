import { SimpleMergeRequestChangesDto } from './SimpleMergeRequestChangesDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMergeRequestChangesResponse extends SdkResponse {
    public body?: Array<SimpleMergeRequestChangesDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<SimpleMergeRequestChangesDto>): ListMergeRequestChangesResponse {
        this['body'] = body;
        return this;
    }
}