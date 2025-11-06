import { MergeResult } from './MergeResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMergeRequestResponse extends SdkResponse {
    public error?: Error;
    public result?: MergeResult;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): ListMergeRequestResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: MergeResult): ListMergeRequestResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ListMergeRequestResponse {
        this['status'] = status;
        return this;
    }
}