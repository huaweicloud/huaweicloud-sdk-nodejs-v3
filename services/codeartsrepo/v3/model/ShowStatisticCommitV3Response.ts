import { CommitStatistic } from './CommitStatistic';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowStatisticCommitV3Response extends SdkResponse {
    public error?: Error;
    public result?: CommitStatistic;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): ShowStatisticCommitV3Response {
        this['error'] = error;
        return this;
    }
    public withResult(result: CommitStatistic): ShowStatisticCommitV3Response {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ShowStatisticCommitV3Response {
        this['status'] = status;
        return this;
    }
}