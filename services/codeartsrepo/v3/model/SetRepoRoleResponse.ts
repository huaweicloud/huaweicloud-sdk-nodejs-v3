import { Empty } from './Empty';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetRepoRoleResponse extends SdkResponse {
    public error?: Error;
    public result?: Empty;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): SetRepoRoleResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: Empty): SetRepoRoleResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): SetRepoRoleResponse {
        this['status'] = status;
        return this;
    }
}