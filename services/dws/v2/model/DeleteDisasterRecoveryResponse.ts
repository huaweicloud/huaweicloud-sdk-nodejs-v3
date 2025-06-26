
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteDisasterRecoveryResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): DeleteDisasterRecoveryResponse {
        this['body'] = body;
        return this;
    }
}