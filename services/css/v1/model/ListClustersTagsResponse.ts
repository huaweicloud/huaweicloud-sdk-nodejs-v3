import { ShowAllTagsTagsResp } from './ShowAllTagsTagsResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClustersTagsResponse extends SdkResponse {
    public tags?: Array<ShowAllTagsTagsResp>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<ShowAllTagsTagsResp>): ListClustersTagsResponse {
        this['tags'] = tags;
        return this;
    }
}