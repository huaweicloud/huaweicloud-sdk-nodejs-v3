import { Tags } from './Tags';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceTagsResponse extends SdkResponse {
    public tags?: Array<Tags>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<Tags>): ShowInstanceTagsResponse {
        this['tags'] = tags;
        return this;
    }
}