import { TagVo } from './TagVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowResourceTagResponse extends SdkResponse {
    public tags?: Array<TagVo>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<TagVo>): ShowResourceTagResponse {
        this['tags'] = tags;
        return this;
    }
}