import { QueryResourceTagItem } from './QueryResourceTagItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceTagsResponse extends SdkResponse {
    public tags?: Array<QueryResourceTagItem>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<QueryResourceTagItem>): ListInstanceTagsResponse {
        this['tags'] = tags;
        return this;
    }
}