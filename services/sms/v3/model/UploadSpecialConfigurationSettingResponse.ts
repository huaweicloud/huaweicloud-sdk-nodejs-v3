
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UploadSpecialConfigurationSettingResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): UploadSpecialConfigurationSettingResponse {
        this['body'] = body;
        return this;
    }
}