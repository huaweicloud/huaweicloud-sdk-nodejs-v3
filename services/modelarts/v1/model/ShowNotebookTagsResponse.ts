import { CombineTmsTags } from './CombineTmsTags';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowNotebookTagsResponse extends SdkResponse {
    public tags?: Array<CombineTmsTags>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<CombineTmsTags>): ShowNotebookTagsResponse {
        this['tags'] = tags;
        return this;
    }
}