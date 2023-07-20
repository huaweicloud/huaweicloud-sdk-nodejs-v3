import { CommonPoolDict } from './CommonPoolDict';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCommonPoolsResponse extends SdkResponse {
    private 'common_pools'?: Array<CommonPoolDict>;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withCommonPools(commonPools: Array<CommonPoolDict>): ListCommonPoolsResponse {
        this['common_pools'] = commonPools;
        return this;
    }
    public set commonPools(commonPools: Array<CommonPoolDict>  | undefined) {
        this['common_pools'] = commonPools;
    }
    public get commonPools(): Array<CommonPoolDict> | undefined {
        return this['common_pools'];
    }
    public withRequestId(requestId: string): ListCommonPoolsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}