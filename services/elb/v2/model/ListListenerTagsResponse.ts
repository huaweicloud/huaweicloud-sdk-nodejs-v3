import { ListTag } from './ListTag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListListenerTagsResponse extends SdkResponse {
    public tags?: Array<ListTag>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<ListTag>): ListListenerTagsResponse {
        this['tags'] = tags;
        return this;
    }
}