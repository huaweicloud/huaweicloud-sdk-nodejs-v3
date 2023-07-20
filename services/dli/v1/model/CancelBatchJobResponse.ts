
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CancelBatchJobResponse extends SdkResponse {
    public msg?: string;
    public constructor() { 
        super();
    }
    public withMsg(msg: string): CancelBatchJobResponse {
        this['msg'] = msg;
        return this;
    }
}