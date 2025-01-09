
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRemoteConsoleAddressResponse extends SdkResponse {
    public type?: string;
    public url?: string;
    public protocol?: string;
    public constructor() { 
        super();
    }
    public withType(type: string): ShowRemoteConsoleAddressResponse {
        this['type'] = type;
        return this;
    }
    public withUrl(url: string): ShowRemoteConsoleAddressResponse {
        this['url'] = url;
        return this;
    }
    public withProtocol(protocol: string): ShowRemoteConsoleAddressResponse {
        this['protocol'] = protocol;
        return this;
    }
}