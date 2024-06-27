
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateClickHouseDatabaseUserPasswordResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): UpdateClickHouseDatabaseUserPasswordResponse {
        this['result'] = result;
        return this;
    }
}