import { TagResp } from './TagResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPredefinedTagResponse extends SdkResponse {
    public tags?: Array<TagResp>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<TagResp>): ListPredefinedTagResponse {
        this['tags'] = tags;
        return this;
    }
}