import { TmsTag } from './TmsTag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTrainJobTagsResponse extends SdkResponse {
    public tags?: Array<TmsTag>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<TmsTag>): ShowTrainJobTagsResponse {
        this['tags'] = tags;
        return this;
    }
}