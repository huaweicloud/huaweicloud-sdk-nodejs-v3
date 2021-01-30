import { Credential } from './Credential';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateTemporaryAccessKeyByTokenResponse extends SdkResponse {
    public credential?: Credential;
    public constructor() { 
        super();
    }
    public withCredential(credential: Credential): CreateTemporaryAccessKeyByTokenResponse {
        this['credential'] = credential;
        return this;
    }
}