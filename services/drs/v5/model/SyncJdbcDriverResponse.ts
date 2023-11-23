
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SyncJdbcDriverResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): SyncJdbcDriverResponse {
        this['body'] = body;
        return this;
    }
}