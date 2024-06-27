
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateClickHouseDatabaseUserPermissionResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): UpdateClickHouseDatabaseUserPermissionResponse {
        this['result'] = result;
        return this;
    }
}