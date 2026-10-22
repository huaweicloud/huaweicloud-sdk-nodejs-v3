import { ListResourceTagsResponseBodyTags } from './ListResourceTagsResponseBodyTags';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSnapshotGroupTagsResponse extends SdkResponse {
    public tags?: Array<ListResourceTagsResponseBodyTags>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<ListResourceTagsResponseBodyTags>): ListSnapshotGroupTagsResponse {
        this['tags'] = tags;
        return this;
    }
}