import { TagsBody } from './TagsBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNatGatewayTagResponse extends SdkResponse {
    public tags?: Array<TagsBody>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<TagsBody>): ListNatGatewayTagResponse {
        this['tags'] = tags;
        return this;
    }
}