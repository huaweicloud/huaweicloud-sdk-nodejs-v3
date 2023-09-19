import { ShowTagsTagsResp } from './ShowTagsTagsResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowClusterTagResponse extends SdkResponse {
    public tags?: Array<ShowTagsTagsResp>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<ShowTagsTagsResp>): ShowClusterTagResponse {
        this['tags'] = tags;
        return this;
    }
}