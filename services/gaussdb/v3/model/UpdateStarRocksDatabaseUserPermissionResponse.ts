
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateStarRocksDatabaseUserPermissionResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): UpdateStarRocksDatabaseUserPermissionResponse {
        this['result'] = result;
        return this;
    }
}