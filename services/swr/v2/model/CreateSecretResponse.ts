import { AuthInfo } from './AuthInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSecretResponse extends SdkResponse {
    public auths?: { [key: string]: AuthInfo; };
    public constructor() { 
        super();
    }
    public withAuths(auths: { [key: string]: AuthInfo; }): CreateSecretResponse {
        this['auths'] = auths;
        return this;
    }
}