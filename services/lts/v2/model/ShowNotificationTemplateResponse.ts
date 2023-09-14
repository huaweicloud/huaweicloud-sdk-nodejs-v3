
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowNotificationTemplateResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): ShowNotificationTemplateResponse {
        this['body'] = body;
        return this;
    }
}