
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddScanJobResponse extends SdkResponse {
    public msg?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withMsg(msg: string): AddScanJobResponse {
        this['msg'] = msg;
        return this;
    }
    public withStatus(status: string): AddScanJobResponse {
        this['status'] = status;
        return this;
    }
}