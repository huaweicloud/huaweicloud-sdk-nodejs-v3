import { ResponseMergeRequestChanges } from './ResponseMergeRequestChanges';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMergeChangesResponse extends SdkResponse {
    public error?: Error;
    public result?: ResponseMergeRequestChanges;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): ListMergeChangesResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: ResponseMergeRequestChanges): ListMergeChangesResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ListMergeChangesResponse {
        this['status'] = status;
        return this;
    }
}