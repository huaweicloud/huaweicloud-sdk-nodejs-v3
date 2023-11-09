import { AuthorizationVI } from './AuthorizationVI';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateOAuthResponse extends SdkResponse {
    public authorization?: AuthorizationVI;
    public constructor() { 
        super();
    }
    public withAuthorization(authorization: AuthorizationVI): CreateOAuthResponse {
        this['authorization'] = authorization;
        return this;
    }
}