import { Secret } from './Secret';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSecretResponse extends SdkResponse {
    public secret?: Secret;
    public constructor() { 
        super();
    }
    public withSecret(secret: Secret): CreateSecretResponse {
        this['secret'] = secret;
        return this;
    }
}