import { TagsResultData } from './TagsResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddDesignEntityTagsResponse extends SdkResponse {
    public data?: TagsResultData;
    public constructor() { 
        super();
    }
    public withData(data: TagsResultData): AddDesignEntityTagsResponse {
        this['data'] = data;
        return this;
    }
}