import { RepoListInfoV2 } from './RepoListInfoV2';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAllRepositoryByTwoProjectIdResponse extends SdkResponse {
    public error?: Error;
    public result?: RepoListInfoV2;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): ShowAllRepositoryByTwoProjectIdResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: RepoListInfoV2): ShowAllRepositoryByTwoProjectIdResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ShowAllRepositoryByTwoProjectIdResponse {
        this['status'] = status;
        return this;
    }
}