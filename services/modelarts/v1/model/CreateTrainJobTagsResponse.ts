import { TmsTagResp } from './TmsTagResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateTrainJobTagsResponse extends SdkResponse {
    public tags?: Array<TmsTagResp>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<TmsTagResp>): CreateTrainJobTagsResponse {
        this['tags'] = tags;
        return this;
    }
}