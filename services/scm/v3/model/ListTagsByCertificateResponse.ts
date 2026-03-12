import { ScsResourceTag } from './ScsResourceTag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTagsByCertificateResponse extends SdkResponse {
    public tags?: Array<ScsResourceTag>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<ScsResourceTag>): ListTagsByCertificateResponse {
        this['tags'] = tags;
        return this;
    }
}