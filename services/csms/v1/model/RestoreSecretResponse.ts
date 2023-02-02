import { Secret } from './Secret';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RestoreSecretResponse extends SdkResponse {
    public secret?: Secret;
    public constructor() { 
        super();
    }
    public withSecret(secret: Secret): RestoreSecretResponse {
        this['secret'] = secret;
        return this;
    }
}