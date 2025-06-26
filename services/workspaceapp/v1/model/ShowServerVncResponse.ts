
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowServerVncResponse extends SdkResponse {
    public type?: string;
    public url?: string;
    public protocol?: string;
    public constructor() { 
        super();
    }
    public withType(type: string): ShowServerVncResponse {
        this['type'] = type;
        return this;
    }
    public withUrl(url: string): ShowServerVncResponse {
        this['url'] = url;
        return this;
    }
    public withProtocol(protocol: string): ShowServerVncResponse {
        this['protocol'] = protocol;
        return this;
    }
}