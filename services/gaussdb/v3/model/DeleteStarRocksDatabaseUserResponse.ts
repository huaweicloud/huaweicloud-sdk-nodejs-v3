
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteStarRocksDatabaseUserResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): DeleteStarRocksDatabaseUserResponse {
        this['result'] = result;
        return this;
    }
}