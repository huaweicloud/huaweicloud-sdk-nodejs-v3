import { InstanceTag } from './InstanceTag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceTagsResponse extends SdkResponse {
    public tags?: Array<InstanceTag>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<InstanceTag>): ListInstanceTagsResponse {
        this['tags'] = tags;
        return this;
    }
}