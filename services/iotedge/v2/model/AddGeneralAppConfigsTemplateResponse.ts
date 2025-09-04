
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddGeneralAppConfigsTemplateResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): AddGeneralAppConfigsTemplateResponse {
        this['body'] = body;
        return this;
    }
}