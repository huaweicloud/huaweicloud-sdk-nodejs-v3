
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePostgresqlInstanceAliasResponse extends SdkResponse {
    public resp?: string;
    public constructor() { 
        super();
    }
    public withResp(resp: string): UpdatePostgresqlInstanceAliasResponse {
        this['resp'] = resp;
        return this;
    }
}