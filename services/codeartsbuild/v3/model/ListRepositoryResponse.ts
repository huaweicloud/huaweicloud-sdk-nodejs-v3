import { RepositoriesResult } from './RepositoriesResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRepositoryResponse extends SdkResponse {
    public status?: string;
    public error?: object;
    public result?: RepositoriesResult;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ListRepositoryResponse {
        this['status'] = status;
        return this;
    }
    public withError(error: object): ListRepositoryResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: RepositoriesResult): ListRepositoryResponse {
        this['result'] = result;
        return this;
    }
}