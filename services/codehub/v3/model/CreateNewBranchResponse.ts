import { AddProtectResponse } from './AddProtectResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateNewBranchResponse extends SdkResponse {
    public error?: Error;
    public result?: AddProtectResponse;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): CreateNewBranchResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: AddProtectResponse): CreateNewBranchResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): CreateNewBranchResponse {
        this['status'] = status;
        return this;
    }
}