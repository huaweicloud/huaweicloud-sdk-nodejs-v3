import { SSHKeyDto } from './SSHKeyDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUserKeysResponse extends SdkResponse {
    public keys?: Array<SSHKeyDto>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withKeys(keys: Array<SSHKeyDto>): ListUserKeysResponse {
        this['keys'] = keys;
        return this;
    }
    public withTotal(total: number): ListUserKeysResponse {
        this['total'] = total;
        return this;
    }
}