import { QueryCategoryRsp } from './QueryCategoryRsp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAssetCategoryResponse extends SdkResponse {
    public body?: Array<QueryCategoryRsp>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<QueryCategoryRsp>): ListAssetCategoryResponse {
        this['body'] = body;
        return this;
    }
}