
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SwitchedPacketResponse extends SdkResponse {
    public status?: string;
    public error?: object;
    public result?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): SwitchedPacketResponse {
        this['status'] = status;
        return this;
    }
    public withError(error: object): SwitchedPacketResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: string): SwitchedPacketResponse {
        this['result'] = result;
        return this;
    }
}