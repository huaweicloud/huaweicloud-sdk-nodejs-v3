import { CommitList } from './CommitList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCommitsByBranchResponse extends SdkResponse {
    public error?: Error;
    public result?: CommitList;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): ShowCommitsByBranchResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: CommitList): ShowCommitsByBranchResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ShowCommitsByBranchResponse {
        this['status'] = status;
        return this;
    }
}