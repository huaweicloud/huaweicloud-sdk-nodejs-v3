import { BaremetalServerTag } from './BaremetalServerTag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBaremetalServerTagsResponse extends SdkResponse {
    public tags?: Array<BaremetalServerTag>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<BaremetalServerTag>): ShowBaremetalServerTagsResponse {
        this['tags'] = tags;
        return this;
    }
}