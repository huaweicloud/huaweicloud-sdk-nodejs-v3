import { BranchResponse } from './BranchResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBranchesByRepositoryIdResponse extends SdkResponse {
    public error?: Error;
    public result?: BranchResponse;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): ListBranchesByRepositoryIdResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: BranchResponse): ListBranchesByRepositoryIdResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ListBranchesByRepositoryIdResponse {
        this['status'] = status;
        return this;
    }
}