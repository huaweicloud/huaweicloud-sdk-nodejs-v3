
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTagsResponse extends SdkResponse {
    public tags?: Array<any>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<any>): ShowTagsResponse {
        this['tags'] = tags;
        return this;
    }
}