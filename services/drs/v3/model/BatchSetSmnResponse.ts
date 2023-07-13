import { ImportSmnResp } from './ImportSmnResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchSetSmnResponse extends SdkResponse {
    public results?: Array<ImportSmnResp>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withResults(results: Array<ImportSmnResp>): BatchSetSmnResponse {
        this['results'] = results;
        return this;
    }
    public withCount(count: number): BatchSetSmnResponse {
        this['count'] = count;
        return this;
    }
}