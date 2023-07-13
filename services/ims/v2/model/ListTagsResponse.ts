
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTagsResponse extends SdkResponse {
    public tags?: Array<string>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<string>): ListTagsResponse {
        this['tags'] = tags;
        return this;
    }
}