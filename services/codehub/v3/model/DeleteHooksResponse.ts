
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteHooksResponse extends SdkResponse {
    public error?: Error;
    public result?: object;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): DeleteHooksResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: object): DeleteHooksResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): DeleteHooksResponse {
        this['status'] = status;
        return this;
    }
}