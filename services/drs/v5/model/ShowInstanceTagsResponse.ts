import { BatchResourceTag } from './BatchResourceTag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceTagsResponse extends SdkResponse {
    public tags?: Array<BatchResourceTag>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<BatchResourceTag>): ShowInstanceTagsResponse {
        this['tags'] = tags;
        return this;
    }
}