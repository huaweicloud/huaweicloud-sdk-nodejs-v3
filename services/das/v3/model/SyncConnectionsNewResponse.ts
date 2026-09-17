
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SyncConnectionsNewResponse extends SdkResponse {
    public msg?: string;
    public constructor() { 
        super();
    }
    public withMsg(msg: string): SyncConnectionsNewResponse {
        this['msg'] = msg;
        return this;
    }
}