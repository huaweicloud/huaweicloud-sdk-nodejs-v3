import { PoolResp } from './PoolResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePoolResponse extends SdkResponse {
    public pool?: PoolResp;
    public constructor() { 
        super();
    }
    public withPool(pool: PoolResp): UpdatePoolResponse {
        this['pool'] = pool;
        return this;
    }
}