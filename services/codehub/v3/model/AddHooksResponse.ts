import { RepoHook } from './RepoHook';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddHooksResponse extends SdkResponse {
    public error?: Error;
    public result?: RepoHook;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): AddHooksResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: RepoHook): AddHooksResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): AddHooksResponse {
        this['status'] = status;
        return this;
    }
}