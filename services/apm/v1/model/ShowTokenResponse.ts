
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTokenResponse extends SdkResponse {
    public token?: string;
    public constructor() { 
        super();
    }
    public withToken(token: string): ShowTokenResponse {
        this['token'] = token;
        return this;
    }
}