
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CancelSparkJobResponse extends SdkResponse {
    public msg?: string;
    public constructor() { 
        super();
    }
    public withMsg(msg: string): CancelSparkJobResponse {
        this['msg'] = msg;
        return this;
    }
}