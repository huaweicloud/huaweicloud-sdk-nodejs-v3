
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteUserJdbcDriverResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): DeleteUserJdbcDriverResponse {
        this['body'] = body;
        return this;
    }
}