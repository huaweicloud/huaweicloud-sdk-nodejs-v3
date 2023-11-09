import { AuthorizationVI } from './AuthorizationVI';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePersonalAuthResponse extends SdkResponse {
    public authorization?: AuthorizationVI;
    public constructor() { 
        super();
    }
    public withAuthorization(authorization: AuthorizationVI): CreatePersonalAuthResponse {
        this['authorization'] = authorization;
        return this;
    }
}