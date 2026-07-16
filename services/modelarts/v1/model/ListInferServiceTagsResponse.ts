import { CombineInferTmsTags } from './CombineInferTmsTags';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInferServiceTagsResponse extends SdkResponse {
    public tags?: Array<CombineInferTmsTags>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<CombineInferTmsTags>): ListInferServiceTagsResponse {
        this['tags'] = tags;
        return this;
    }
}