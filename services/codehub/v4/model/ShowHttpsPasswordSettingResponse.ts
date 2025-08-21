
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHttpsPasswordSettingResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): ShowHttpsPasswordSettingResponse {
        this['body'] = body;
        return this;
    }
}