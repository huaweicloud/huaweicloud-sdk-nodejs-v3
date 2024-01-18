
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteScanJobResponse extends SdkResponse {
    public msg?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withMsg(msg: string): DeleteScanJobResponse {
        this['msg'] = msg;
        return this;
    }
    public withStatus(status: string): DeleteScanJobResponse {
        this['status'] = status;
        return this;
    }
}