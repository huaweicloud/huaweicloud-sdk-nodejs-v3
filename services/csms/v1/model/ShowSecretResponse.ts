import { Secret } from './Secret';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSecretResponse extends SdkResponse {
    public secret?: Secret;
    public constructor() { 
        super();
    }
    public withSecret(secret: Secret): ShowSecretResponse {
        this['secret'] = secret;
        return this;
    }
}