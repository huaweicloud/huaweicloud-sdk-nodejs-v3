import { CustomizeResourceTag } from './CustomizeResourceTag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetCustomizeTagsResponse extends SdkResponse {
    public tags?: Array<CustomizeResourceTag>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<CustomizeResourceTag>): GetCustomizeTagsResponse {
        this['tags'] = tags;
        return this;
    }
}