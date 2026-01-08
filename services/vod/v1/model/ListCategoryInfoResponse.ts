import { QueryCategoryInfoRsp } from './QueryCategoryInfoRsp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCategoryInfoResponse extends SdkResponse {
    public body?: Array<QueryCategoryInfoRsp>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<QueryCategoryInfoRsp>): ListCategoryInfoResponse {
        this['body'] = body;
        return this;
    }
}