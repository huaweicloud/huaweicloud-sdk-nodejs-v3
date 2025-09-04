
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddGeneralOtTemplateResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): AddGeneralOtTemplateResponse {
        this['body'] = body;
        return this;
    }
}