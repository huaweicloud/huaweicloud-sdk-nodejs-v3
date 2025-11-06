import { CommitInfo } from './CommitInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCommitsResponse extends SdkResponse {
    public error?: Error;
    public result?: Array<CommitInfo>;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): ListCommitsResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: Array<CommitInfo>): ListCommitsResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ListCommitsResponse {
        this['status'] = status;
        return this;
    }
}