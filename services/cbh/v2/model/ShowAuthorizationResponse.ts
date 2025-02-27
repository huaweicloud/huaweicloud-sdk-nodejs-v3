import { AgencyAuthorizeInfoRsp } from './AgencyAuthorizeInfoRsp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAuthorizationResponse extends SdkResponse {
    public authorization?: AgencyAuthorizeInfoRsp;
    public constructor() { 
        super();
    }
    public withAuthorization(authorization: AgencyAuthorizeInfoRsp): ShowAuthorizationResponse {
        this['authorization'] = authorization;
        return this;
    }
}