
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAuthorizationResponse extends SdkResponse {
    public authorization?: object;
    public constructor() { 
        super();
    }
    public withAuthorization(authorization: object): ShowAuthorizationResponse {
        this['authorization'] = authorization;
        return this;
    }
}