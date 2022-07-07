import { MasterSlavePool } from './MasterSlavePool';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateMasterSlavePoolResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    public pool?: MasterSlavePool;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): CreateMasterSlavePoolResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withPool(pool: MasterSlavePool): CreateMasterSlavePoolResponse {
        this['pool'] = pool;
        return this;
    }
}