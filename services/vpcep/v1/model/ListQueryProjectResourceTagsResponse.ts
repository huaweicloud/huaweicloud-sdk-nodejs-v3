import { TagValuesList } from './TagValuesList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListQueryProjectResourceTagsResponse extends SdkResponse {
    public tags?: Array<TagValuesList>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<TagValuesList>): ListQueryProjectResourceTagsResponse {
        this['tags'] = tags;
        return this;
    }
}