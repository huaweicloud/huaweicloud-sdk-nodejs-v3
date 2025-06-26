
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateInstanceWebhookResponse extends SdkResponse {
    public id?: number;
    public constructor() { 
        super();
    }
    public withId(id: number): CreateInstanceWebhookResponse {
        this['id'] = id;
        return this;
    }
}