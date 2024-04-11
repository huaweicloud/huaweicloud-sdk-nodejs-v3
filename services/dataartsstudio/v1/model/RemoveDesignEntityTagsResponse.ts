import { TagsResultData } from './TagsResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RemoveDesignEntityTagsResponse extends SdkResponse {
    public data?: TagsResultData;
    public constructor() { 
        super();
    }
    public withData(data: TagsResultData): RemoveDesignEntityTagsResponse {
        this['data'] = data;
        return this;
    }
}