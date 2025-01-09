import { Tags } from './Tags';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectTagsResponse extends SdkResponse {
    public tags?: Array<Tags>;
    public totalCount?: number;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<Tags>): ListProjectTagsResponse {
        this['tags'] = tags;
        return this;
    }
    public withTotalCount(totalCount: number): ListProjectTagsResponse {
        this['totalCount'] = totalCount;
        return this;
    }
}