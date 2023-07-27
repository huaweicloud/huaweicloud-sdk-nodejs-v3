import { TmsKeyValues } from './TmsKeyValues';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectInstanceTagsResponse extends SdkResponse {
    public tags?: Array<TmsKeyValues>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<TmsKeyValues>): ListProjectInstanceTagsResponse {
        this['tags'] = tags;
        return this;
    }
}