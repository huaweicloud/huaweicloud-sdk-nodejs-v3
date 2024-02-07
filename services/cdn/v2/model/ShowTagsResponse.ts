import { TagMap } from './TagMap';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTagsResponse extends SdkResponse {
    public tags?: Array<TagMap>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<TagMap>): ShowTagsResponse {
        this['tags'] = tags;
        return this;
    }
}