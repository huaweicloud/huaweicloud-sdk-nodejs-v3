import { PoolTag } from './PoolTag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCreatePoolTagsResponse extends SdkResponse {
    public tags?: Array<PoolTag>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<PoolTag>): BatchCreatePoolTagsResponse {
        this['tags'] = tags;
        return this;
    }
}