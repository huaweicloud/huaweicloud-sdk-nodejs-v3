
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRepositoryStatusResponse extends SdkResponse {
    public error?: Error;
    public result?: number;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): ListRepositoryStatusResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: number): ListRepositoryStatusResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ListRepositoryStatusResponse {
        this['status'] = status;
        return this;
    }
}