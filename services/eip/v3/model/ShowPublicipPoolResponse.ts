import { PublicipPoolShowResp } from './PublicipPoolShowResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPublicipPoolResponse extends SdkResponse {
    private 'publicip_pool'?: PublicipPoolShowResp | undefined;
    private 'request_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withPublicipPool(publicipPool: PublicipPoolShowResp): ShowPublicipPoolResponse {
        this['publicip_pool'] = publicipPool;
        return this;
    }
    public set publicipPool(publicipPool: PublicipPoolShowResp | undefined) {
        this['publicip_pool'] = publicipPool;
    }
    public get publicipPool() {
        return this['publicip_pool'];
    }
    public withRequestId(requestId: string): ShowPublicipPoolResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
}