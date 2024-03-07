
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SwitchSqlLimitResponse extends SdkResponse {
    public resp?: string;
    public constructor() { 
        super();
    }
    public withResp(resp: string): SwitchSqlLimitResponse {
        this['resp'] = resp;
        return this;
    }
}