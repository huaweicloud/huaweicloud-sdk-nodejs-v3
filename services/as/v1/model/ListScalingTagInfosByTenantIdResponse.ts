import { TagsMultiValue } from './TagsMultiValue';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListScalingTagInfosByTenantIdResponse extends SdkResponse {
    public tags?: Array<TagsMultiValue>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<TagsMultiValue>): ListScalingTagInfosByTenantIdResponse {
        this['tags'] = tags;
        return this;
    }
}