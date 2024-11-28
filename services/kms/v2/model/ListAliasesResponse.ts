import { ListAliasResponseBody } from './ListAliasResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAliasesResponse extends SdkResponse {
    public body?: Array<ListAliasResponseBody>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ListAliasResponseBody>): ListAliasesResponse {
        this['body'] = body;
        return this;
    }
}