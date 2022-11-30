import { ResourceTagResp } from './ResourceTagResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPublicipTagsResponse extends SdkResponse {
    public tags?: Array<ResourceTagResp>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<ResourceTagResp>): ShowPublicipTagsResponse {
        this['tags'] = tags;
        return this;
    }
}