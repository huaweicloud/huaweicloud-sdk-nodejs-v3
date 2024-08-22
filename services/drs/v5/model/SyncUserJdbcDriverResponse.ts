
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SyncUserJdbcDriverResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): SyncUserJdbcDriverResponse {
        this['body'] = body;
        return this;
    }
}