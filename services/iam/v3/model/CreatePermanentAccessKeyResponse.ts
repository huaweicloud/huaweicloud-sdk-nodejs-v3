import { CreateCredentialResult } from './CreateCredentialResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePermanentAccessKeyResponse extends SdkResponse {
    public credential?: CreateCredentialResult;
    public constructor() { 
        super();
    }
    public withCredential(credential: CreateCredentialResult): CreatePermanentAccessKeyResponse {
        this['credential'] = credential;
        return this;
    }
}