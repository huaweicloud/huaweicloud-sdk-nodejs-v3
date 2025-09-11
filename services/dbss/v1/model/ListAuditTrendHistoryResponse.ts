import { TrendStatusResponse } from './TrendStatusResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAuditTrendHistoryResponse extends SdkResponse {
    public body?: Array<TrendStatusResponse>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<TrendStatusResponse>): ListAuditTrendHistoryResponse {
        this['body'] = body;
        return this;
    }
}