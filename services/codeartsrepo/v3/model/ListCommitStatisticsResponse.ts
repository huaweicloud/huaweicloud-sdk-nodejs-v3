import { RepoCommitStatistics } from './RepoCommitStatistics';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCommitStatisticsResponse extends SdkResponse {
    public error?: Error;
    public result?: RepoCommitStatistics;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): ListCommitStatisticsResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: RepoCommitStatistics): ListCommitStatisticsResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ListCommitStatisticsResponse {
        this['status'] = status;
        return this;
    }
}