import { PoolTag } from './PoolTag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeletePoolTagsResponse extends SdkResponse {
    public tags?: Array<PoolTag>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<PoolTag>): BatchDeletePoolTagsResponse {
        this['tags'] = tags;
        return this;
    }
}