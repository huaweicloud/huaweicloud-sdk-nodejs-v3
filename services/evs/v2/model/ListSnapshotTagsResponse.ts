import { ListResourceTagsResponseBodyTags } from './ListResourceTagsResponseBodyTags';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSnapshotTagsResponse extends SdkResponse {
    public tags?: Array<ListResourceTagsResponseBodyTags>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<ListResourceTagsResponseBodyTags>): ListSnapshotTagsResponse {
        this['tags'] = tags;
        return this;
    }
}