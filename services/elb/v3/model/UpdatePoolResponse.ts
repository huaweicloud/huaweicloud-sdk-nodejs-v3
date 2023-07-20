import { Pool } from './Pool';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePoolResponse extends SdkResponse {
    private 'request_id'?: string;
    public pool?: Pool;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): UpdatePoolResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPool(pool: Pool): UpdatePoolResponse {
        this['pool'] = pool;
        return this;
    }
}