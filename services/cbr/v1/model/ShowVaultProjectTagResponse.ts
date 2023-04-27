import { TagsResp } from './TagsResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVaultProjectTagResponse extends SdkResponse {
    public tags?: Array<TagsResp>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<TagsResp>): ShowVaultProjectTagResponse {
        this['tags'] = tags;
        return this;
    }
}