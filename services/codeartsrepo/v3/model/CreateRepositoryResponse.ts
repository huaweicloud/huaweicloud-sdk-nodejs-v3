import { Repository } from './Repository';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateRepositoryResponse extends SdkResponse {
    public error?: Error;
    public result?: Repository;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): CreateRepositoryResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: Repository): CreateRepositoryResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): CreateRepositoryResponse {
        this['status'] = status;
        return this;
    }
}