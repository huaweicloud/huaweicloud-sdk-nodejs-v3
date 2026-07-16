import { InferTmsTag } from './InferTmsTag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInferServiceTagsResponse extends SdkResponse {
    public tags?: Array<InferTmsTag>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<InferTmsTag>): ShowInferServiceTagsResponse {
        this['tags'] = tags;
        return this;
    }
}