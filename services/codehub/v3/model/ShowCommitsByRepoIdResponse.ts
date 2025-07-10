import { CommitList } from './CommitList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCommitsByRepoIdResponse extends SdkResponse {
    public error?: Error;
    public result?: CommitList;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): ShowCommitsByRepoIdResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: CommitList): ShowCommitsByRepoIdResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ShowCommitsByRepoIdResponse {
        this['status'] = status;
        return this;
    }
}