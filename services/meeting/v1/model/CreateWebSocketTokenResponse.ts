
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateWebSocketTokenResponse extends SdkResponse {
    public webSocketToken?: string;
    public constructor() { 
        super();
    }
    public withWebSocketToken(webSocketToken: string): CreateWebSocketTokenResponse {
        this['webSocketToken'] = webSocketToken;
        return this;
    }
}