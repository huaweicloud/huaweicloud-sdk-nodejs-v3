import { SupportLinksResp } from './SupportLinksResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSupportLinksResponse extends SdkResponse {
    public body?: Array<SupportLinksResp>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<SupportLinksResp>): ListSupportLinksResponse {
        this['body'] = body;
        return this;
    }
}