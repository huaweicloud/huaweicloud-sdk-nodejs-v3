import { DatabaseUsageInfoResp } from './DatabaseUsageInfoResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDatabaseInfosResponse extends SdkResponse {
    public body?: Array<DatabaseUsageInfoResp>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<DatabaseUsageInfoResp>): ListDatabaseInfosResponse {
        this['body'] = body;
        return this;
    }
}