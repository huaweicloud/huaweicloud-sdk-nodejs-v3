
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRepoIdResponse extends SdkResponse {
    public error?: Error;
    public result?: number;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): ShowRepoIdResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: number): ShowRepoIdResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ShowRepoIdResponse {
        this['status'] = status;
        return this;
    }
}