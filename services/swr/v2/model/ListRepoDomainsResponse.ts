import { ShowRepoDomainsResponse } from './ShowRepoDomainsResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRepoDomainsResponse extends SdkResponse {
    public body?: Array<ShowRepoDomainsResponse>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ShowRepoDomainsResponse>): ListRepoDomainsResponse {
        this['body'] = body;
        return this;
    }
}