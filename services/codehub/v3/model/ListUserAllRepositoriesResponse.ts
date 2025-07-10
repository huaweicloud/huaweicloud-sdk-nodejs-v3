import { RepoListInfoV2 } from './RepoListInfoV2';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUserAllRepositoriesResponse extends SdkResponse {
    public error?: Error;
    public result?: RepoListInfoV2;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): ListUserAllRepositoriesResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: RepoListInfoV2): ListUserAllRepositoriesResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ListUserAllRepositoriesResponse {
        this['status'] = status;
        return this;
    }
}