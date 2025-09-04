
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckJobInternalResponse extends SdkResponse {
    public result?: boolean;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: boolean): CheckJobInternalResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): CheckJobInternalResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): CheckJobInternalResponse {
        this['status'] = status;
        return this;
    }
}