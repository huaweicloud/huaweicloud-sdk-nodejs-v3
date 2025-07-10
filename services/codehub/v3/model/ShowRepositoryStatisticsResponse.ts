import { RepoStatisticsLaunch } from './RepoStatisticsLaunch';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRepositoryStatisticsResponse extends SdkResponse {
    public error?: Error;
    public result?: RepoStatisticsLaunch;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): ShowRepositoryStatisticsResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: RepoStatisticsLaunch): ShowRepositoryStatisticsResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ShowRepositoryStatisticsResponse {
        this['status'] = status;
        return this;
    }
}