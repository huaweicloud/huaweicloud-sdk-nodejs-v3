import { PageInfoOption } from './PageInfoOption';
import { PublicipPoolShowResp } from './PublicipPoolShowResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPublicipPoolResponse extends SdkResponse {
    private 'publicip_pools'?: Array<PublicipPoolShowResp>;
    private 'request_id'?: string;
    private 'page_info'?: PageInfoOption;
    public constructor() { 
        super();
    }
    public withPublicipPools(publicipPools: Array<PublicipPoolShowResp>): ListPublicipPoolResponse {
        this['publicip_pools'] = publicipPools;
        return this;
    }
    public set publicipPools(publicipPools: Array<PublicipPoolShowResp>  | undefined) {
        this['publicip_pools'] = publicipPools;
    }
    public get publicipPools(): Array<PublicipPoolShowResp> | undefined {
        return this['publicip_pools'];
    }
    public withRequestId(requestId: string): ListPublicipPoolResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPageInfo(pageInfo: PageInfoOption): ListPublicipPoolResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoOption  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoOption | undefined {
        return this['page_info'];
    }
}