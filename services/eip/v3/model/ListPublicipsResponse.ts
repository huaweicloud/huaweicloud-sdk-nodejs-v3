import { PageInfoOption } from './PageInfoOption';
import { PublicipSingleShowResp } from './PublicipSingleShowResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPublicipsResponse extends SdkResponse {
    private 'request_id'?: string;
    public publicips?: Array<PublicipSingleShowResp>;
    private 'page_info'?: PageInfoOption;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListPublicipsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPublicips(publicips: Array<PublicipSingleShowResp>): ListPublicipsResponse {
        this['publicips'] = publicips;
        return this;
    }
    public withPageInfo(pageInfo: PageInfoOption): ListPublicipsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoOption  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoOption | undefined {
        return this['page_info'];
    }
    public withTotalCount(totalCount: number): ListPublicipsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}