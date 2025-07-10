import { Empty } from './Empty';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteRepoMemberResponse extends SdkResponse {
    public error?: Error;
    public result?: Empty;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): DeleteRepoMemberResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: Empty): DeleteRepoMemberResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): DeleteRepoMemberResponse {
        this['status'] = status;
        return this;
    }
}