
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteRepositoryResponse extends SdkResponse {
    public error?: Error;
    public result?: boolean;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): DeleteRepositoryResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: boolean): DeleteRepositoryResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): DeleteRepositoryResponse {
        this['status'] = status;
        return this;
    }
}