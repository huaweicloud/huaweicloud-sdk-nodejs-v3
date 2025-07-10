import { CreateRepoMemberResult } from './CreateRepoMemberResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddRepoMembersResponse extends SdkResponse {
    public error?: Error;
    public result?: Array<CreateRepoMemberResult>;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): AddRepoMembersResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: Array<CreateRepoMemberResult>): AddRepoMembersResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): AddRepoMembersResponse {
        this['status'] = status;
        return this;
    }
}