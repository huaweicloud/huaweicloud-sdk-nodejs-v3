import { TagResponse } from './TagResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectSecretsTagsResponse extends SdkResponse {
    public tags?: Array<TagResponse>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<TagResponse>): ListProjectSecretsTagsResponse {
        this['tags'] = tags;
        return this;
    }
}