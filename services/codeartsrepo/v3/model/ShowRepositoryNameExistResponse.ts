
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRepositoryNameExistResponse extends SdkResponse {
    public error?: Error;
    public result?: boolean;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): ShowRepositoryNameExistResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: boolean): ShowRepositoryNameExistResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ShowRepositoryNameExistResponse {
        this['status'] = status;
        return this;
    }
}