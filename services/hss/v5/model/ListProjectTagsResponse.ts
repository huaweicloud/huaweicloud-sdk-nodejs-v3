import { MultiValueTagInfo } from './MultiValueTagInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectTagsResponse extends SdkResponse {
    public tags?: Array<MultiValueTagInfo>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<MultiValueTagInfo>): ListProjectTagsResponse {
        this['tags'] = tags;
        return this;
    }
}