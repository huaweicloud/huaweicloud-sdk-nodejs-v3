
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateStarRocksDatabaseUserPasswordResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): UpdateStarRocksDatabaseUserPasswordResponse {
        this['result'] = result;
        return this;
    }
}