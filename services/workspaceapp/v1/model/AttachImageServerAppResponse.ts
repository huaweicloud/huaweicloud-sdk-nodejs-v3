
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AttachImageServerAppResponse extends SdkResponse {
    public uri?: string;
    public constructor() { 
        super();
    }
    public withUri(uri: string): AttachImageServerAppResponse {
        this['uri'] = uri;
        return this;
    }
}