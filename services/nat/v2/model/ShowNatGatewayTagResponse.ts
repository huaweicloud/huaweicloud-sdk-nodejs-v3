import { TagBody } from './TagBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowNatGatewayTagResponse extends SdkResponse {
    public tags?: Array<TagBody>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<TagBody>): ShowNatGatewayTagResponse {
        this['tags'] = tags;
        return this;
    }
}