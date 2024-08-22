
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UploadUserJdbcDriverResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): UploadUserJdbcDriverResponse {
        this['body'] = body;
        return this;
    }
}