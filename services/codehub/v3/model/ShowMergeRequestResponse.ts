import { MergeInfoResult } from './MergeInfoResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMergeRequestResponse extends SdkResponse {
    public error?: Error;
    public result?: MergeInfoResult;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): ShowMergeRequestResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: MergeInfoResult): ShowMergeRequestResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ShowMergeRequestResponse {
        this['status'] = status;
        return this;
    }
}