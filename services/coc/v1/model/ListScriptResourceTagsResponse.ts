import { ListTagsResponse } from './ListTagsResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListScriptResourceTagsResponse extends SdkResponse {
    public data?: ListTagsResponse;
    public constructor() { 
        super();
    }
    public withData(data: ListTagsResponse): ListScriptResourceTagsResponse {
        this['data'] = data;
        return this;
    }
}