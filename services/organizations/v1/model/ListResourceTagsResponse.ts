import { TagsDTO } from './TagsDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListResourceTagsResponse extends SdkResponse {
    public tags?: Array<TagsDTO>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<TagsDTO>): ListResourceTagsResponse {
        this['tags'] = tags;
        return this;
    }
}