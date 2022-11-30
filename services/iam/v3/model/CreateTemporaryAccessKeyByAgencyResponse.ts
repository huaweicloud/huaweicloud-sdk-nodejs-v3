import { Credential } from './Credential';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateTemporaryAccessKeyByAgencyResponse extends SdkResponse {
    public credential?: Credential;
    public constructor() { 
        super();
    }
    public withCredential(credential: Credential): CreateTemporaryAccessKeyByAgencyResponse {
        this['credential'] = credential;
        return this;
    }
}