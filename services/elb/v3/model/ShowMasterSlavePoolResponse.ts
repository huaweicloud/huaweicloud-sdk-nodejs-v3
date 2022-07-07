import { MasterSlavePool } from './MasterSlavePool';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMasterSlavePoolResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    public pool?: MasterSlavePool;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ShowMasterSlavePoolResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withPool(pool: MasterSlavePool): ShowMasterSlavePoolResponse {
        this['pool'] = pool;
        return this;
    }
}