import { DomainTags } from './DomainTags';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDomainCaTagsResponse extends SdkResponse {
    public tags?: Array<DomainTags>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<DomainTags>): ListDomainCaTagsResponse {
        this['tags'] = tags;
        return this;
    }
}