import { Pool } from './Pool';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePoolResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    public pool?: Pool;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): CreatePoolResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withPool(pool: Pool): CreatePoolResponse {
        this['pool'] = pool;
        return this;
    }
}