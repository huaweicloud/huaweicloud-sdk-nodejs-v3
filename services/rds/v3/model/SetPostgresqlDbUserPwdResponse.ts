
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetPostgresqlDbUserPwdResponse extends SdkResponse {
    public resp?: string;
    public constructor() { 
        super();
    }
    public withResp(resp: string): SetPostgresqlDbUserPwdResponse {
        this['resp'] = resp;
        return this;
    }
}