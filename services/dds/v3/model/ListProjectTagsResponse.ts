import { QueryProjectTagItem } from './QueryProjectTagItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectTagsResponse extends SdkResponse {
    public tags?: Array<QueryProjectTagItem>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<QueryProjectTagItem>): ListProjectTagsResponse {
        this['tags'] = tags;
        return this;
    }
}