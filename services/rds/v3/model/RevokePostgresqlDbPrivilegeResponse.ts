
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RevokePostgresqlDbPrivilegeResponse extends SdkResponse {
    public resp?: string;
    public constructor() { 
        super();
    }
    public withResp(resp: string): RevokePostgresqlDbPrivilegeResponse {
        this['resp'] = resp;
        return this;
    }
}