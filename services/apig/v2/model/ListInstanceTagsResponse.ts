import { TmsKeyValue } from './TmsKeyValue';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceTagsResponse extends SdkResponse {
    public tags?: Array<TmsKeyValue>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<TmsKeyValue>): ListInstanceTagsResponse {
        this['tags'] = tags;
        return this;
    }
}