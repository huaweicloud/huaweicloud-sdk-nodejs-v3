import { PoolResp } from './PoolResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePoolResponse extends SdkResponse {
    public pool?: PoolResp;
    public constructor() { 
        super();
    }
    public withPool(pool: PoolResp): CreatePoolResponse {
        this['pool'] = pool;
        return this;
    }
}