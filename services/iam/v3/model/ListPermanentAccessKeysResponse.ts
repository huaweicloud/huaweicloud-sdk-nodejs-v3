import { Credentials } from './Credentials';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPermanentAccessKeysResponse extends SdkResponse {
    public credentials?: Array<Credentials>;
    public constructor() { 
        super();
    }
    public withCredentials(credentials: Array<Credentials>): ListPermanentAccessKeysResponse {
        this['credentials'] = credentials;
        return this;
    }
}