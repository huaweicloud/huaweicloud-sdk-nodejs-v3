
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNotificationTemplateResponse extends SdkResponse {
    public template?: string;
    public constructor() { 
        super();
    }
    public withTemplate(template: string): ListNotificationTemplateResponse {
        this['template'] = template;
        return this;
    }
}