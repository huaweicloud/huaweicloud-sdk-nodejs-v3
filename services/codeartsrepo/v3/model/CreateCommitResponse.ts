import { CreateCommitResponseBody } from './CreateCommitResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateCommitResponse extends SdkResponse {
    public error?: Error;
    public result?: CreateCommitResponseBody;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): CreateCommitResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: CreateCommitResponseBody): CreateCommitResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): CreateCommitResponse {
        this['status'] = status;
        return this;
    }
}