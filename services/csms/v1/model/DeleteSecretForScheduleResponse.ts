import { Secret } from './Secret';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteSecretForScheduleResponse extends SdkResponse {
    public secret?: Secret;
    public constructor() { 
        super();
    }
    public withSecret(secret: Secret): DeleteSecretForScheduleResponse {
        this['secret'] = secret;
        return this;
    }
}