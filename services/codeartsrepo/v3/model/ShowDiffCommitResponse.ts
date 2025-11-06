import { DiffCommitInfo } from './DiffCommitInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDiffCommitResponse extends SdkResponse {
    public error?: Error;
    public result?: Array<DiffCommitInfo>;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): ShowDiffCommitResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: Array<DiffCommitInfo>): ShowDiffCommitResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ShowDiffCommitResponse {
        this['status'] = status;
        return this;
    }
}