
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateHttpsPasswordSettingResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): UpdateHttpsPasswordSettingResponse {
        this['body'] = body;
        return this;
    }
}