import { ListVersionAliasResult } from './ListVersionAliasResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVersionAliasesResponse extends SdkResponse {
    public body?: Array<ListVersionAliasResult>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ListVersionAliasResult>): ListVersionAliasesResponse {
        this['body'] = body;
        return this;
    }
}