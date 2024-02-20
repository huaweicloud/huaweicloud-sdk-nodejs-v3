
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class HangUpKillAllClientsResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): HangUpKillAllClientsResponse {
        this['body'] = body;
        return this;
    }
}