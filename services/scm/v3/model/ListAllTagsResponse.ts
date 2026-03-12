import { ScsTag } from './ScsTag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAllTagsResponse extends SdkResponse {
    public tags?: Array<ScsTag>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<ScsTag>): ListAllTagsResponse {
        this['tags'] = tags;
        return this;
    }
}