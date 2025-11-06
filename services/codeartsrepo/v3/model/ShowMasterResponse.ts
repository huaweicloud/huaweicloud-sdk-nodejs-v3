
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMasterResponse extends SdkResponse {
    public error?: Error;
    public result?: boolean;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): ShowMasterResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: boolean): ShowMasterResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ShowMasterResponse {
        this['status'] = status;
        return this;
    }
}