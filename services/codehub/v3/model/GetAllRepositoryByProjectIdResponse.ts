import { RepoListInfo } from './RepoListInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetAllRepositoryByProjectIdResponse extends SdkResponse {
    public error?: Error;
    public result?: RepoListInfo;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): GetAllRepositoryByProjectIdResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: RepoListInfo): GetAllRepositoryByProjectIdResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): GetAllRepositoryByProjectIdResponse {
        this['status'] = status;
        return this;
    }
}