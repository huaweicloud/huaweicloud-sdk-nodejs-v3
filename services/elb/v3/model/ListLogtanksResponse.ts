import { Logtank } from './Logtank';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLogtanksResponse extends SdkResponse {
    public logtanks?: Array<Logtank>;
    private 'page_info'?: PageInfo | undefined;
    private 'request_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withLogtanks(logtanks: Array<Logtank>): ListLogtanksResponse {
        this['logtanks'] = logtanks;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListLogtanksResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo() {
        return this['page_info'];
    }
    public withRequestId(requestId: string): ListLogtanksResponse {
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