import { AuthorizationVI } from './AuthorizationVI';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePasswordAuthResponse extends SdkResponse {
    public authorization?: AuthorizationVI;
    public constructor() { 
        super();
    }
    public withAuthorization(authorization: AuthorizationVI): CreatePasswordAuthResponse {
        this['authorization'] = authorization;
        return this;
    }
}