
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowClusterUriResponse extends SdkResponse {
    public uri?: string;
    public constructor() { 
        super();
    }
    public withUri(uri: string): ShowClusterUriResponse {
        this['uri'] = uri;
        return this;
    }
}