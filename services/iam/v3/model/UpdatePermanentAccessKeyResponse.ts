import { UpdateCredentialResult } from './UpdateCredentialResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePermanentAccessKeyResponse extends SdkResponse {
    public credential?: UpdateCredentialResult;
    public constructor() { 
        super();
    }
    public withCredential(credential: UpdateCredentialResult): UpdatePermanentAccessKeyResponse {
        this['credential'] = credential;
        return this;
    }
}