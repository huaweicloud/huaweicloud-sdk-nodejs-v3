import { ListInstanceTagsResult } from './ListInstanceTagsResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceTagsResponse extends SdkResponse {
    public tags?: Array<ListInstanceTagsResult>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<ListInstanceTagsResult>): ListInstanceTagsResponse {
        this['tags'] = tags;
        return this;
    }
}