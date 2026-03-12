import { DomainTags } from './DomainTags';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDomainCertTagsResponse extends SdkResponse {
    public tags?: Array<DomainTags>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<DomainTags>): ListDomainCertTagsResponse {
        this['tags'] = tags;
        return this;
    }
}