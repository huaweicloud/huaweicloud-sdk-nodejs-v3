
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateDatabaseUserInfoResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): UpdateDatabaseUserInfoResponse {
        this['body'] = body;
        return this;
    }
}