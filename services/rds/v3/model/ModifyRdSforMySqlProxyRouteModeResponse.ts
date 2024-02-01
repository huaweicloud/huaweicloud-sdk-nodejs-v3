
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ModifyRdSforMySqlProxyRouteModeResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): ModifyRdSforMySqlProxyRouteModeResponse {
        this['result'] = result;
        return this;
    }
}