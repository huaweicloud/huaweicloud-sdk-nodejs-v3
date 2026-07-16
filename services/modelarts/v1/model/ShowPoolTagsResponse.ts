import { PoolTag } from './PoolTag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPoolTagsResponse extends SdkResponse {
    public tags?: Array<PoolTag>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<PoolTag>): ShowPoolTagsResponse {
        this['tags'] = tags;
        return this;
    }
}