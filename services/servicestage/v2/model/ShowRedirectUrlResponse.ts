
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRedirectUrlResponse extends SdkResponse {
    public url?: string;
    public constructor() { 
        super();
    }
    public withUrl(url: string): ShowRedirectUrlResponse {
        this['url'] = url;
        return this;
    }
}