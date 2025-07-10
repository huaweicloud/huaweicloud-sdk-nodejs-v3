import { CommitStatistic } from './CommitStatistic';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowStatisticCommitResponse extends SdkResponse {
    public error?: Error;
    public result?: CommitStatistic;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): ShowStatisticCommitResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: CommitStatistic): ShowStatisticCommitResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ShowStatisticCommitResponse {
        this['status'] = status;
        return this;
    }
}