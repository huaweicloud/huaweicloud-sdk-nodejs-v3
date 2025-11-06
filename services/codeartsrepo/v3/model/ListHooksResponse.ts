import { RepoListHook } from './RepoListHook';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHooksResponse extends SdkResponse {
    public error?: Error;
    public result?: RepoListHook;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): ListHooksResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: RepoListHook): ListHooksResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ListHooksResponse {
        this['status'] = status;
        return this;
    }
}