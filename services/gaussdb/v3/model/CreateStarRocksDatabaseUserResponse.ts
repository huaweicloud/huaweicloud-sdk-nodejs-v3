
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateStarRocksDatabaseUserResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): CreateStarRocksDatabaseUserResponse {
        this['result'] = result;
        return this;
    }
}