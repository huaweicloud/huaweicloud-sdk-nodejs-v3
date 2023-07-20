
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPredefinedTagsResponse extends SdkResponse {
    public tags?: Array<Array<object>>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<Array<object>>): ListPredefinedTagsResponse {
        this['tags'] = tags;
        return this;
    }
}