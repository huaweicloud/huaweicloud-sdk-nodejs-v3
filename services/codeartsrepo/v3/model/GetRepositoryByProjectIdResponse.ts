import { RepoInfo } from './RepoInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetRepositoryByProjectIdResponse extends SdkResponse {
    public error?: Error;
    public result?: RepoInfo;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): GetRepositoryByProjectIdResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: RepoInfo): GetRepositoryByProjectIdResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): GetRepositoryByProjectIdResponse {
        this['status'] = status;
        return this;
    }
}