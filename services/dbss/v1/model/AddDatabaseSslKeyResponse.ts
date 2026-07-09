
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddDatabaseSslKeyResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): AddDatabaseSslKeyResponse {
        this['result'] = result;
        return this;
    }
}