import { RelatedCommitListVo } from './RelatedCommitListVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRelatedCommitsResponse extends SdkResponse {
    public error?: Error;
    public result?: RelatedCommitListVo;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): ListRelatedCommitsResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: RelatedCommitListVo): ListRelatedCommitsResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ListRelatedCommitsResponse {
        this['status'] = status;
        return this;
    }
}