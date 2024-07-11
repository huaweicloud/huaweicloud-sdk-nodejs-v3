
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetKernelPluginLicenseResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): SetKernelPluginLicenseResponse {
        this['body'] = body;
        return this;
    }
}