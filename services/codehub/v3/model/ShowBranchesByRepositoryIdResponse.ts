import { BranchList } from './BranchList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBranchesByRepositoryIdResponse extends SdkResponse {
    public error?: Error;
    public result?: BranchList;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): ShowBranchesByRepositoryIdResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: BranchList): ShowBranchesByRepositoryIdResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ShowBranchesByRepositoryIdResponse {
        this['status'] = status;
        return this;
    }
}