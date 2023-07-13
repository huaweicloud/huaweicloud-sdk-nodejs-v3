import { Secret } from './Secret';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UploadSecretBlobResponse extends SdkResponse {
    public secret?: Secret;
    public constructor() { 
        super();
    }
    public withSecret(secret: Secret): UploadSecretBlobResponse {
        this['secret'] = secret;
        return this;
    }
}