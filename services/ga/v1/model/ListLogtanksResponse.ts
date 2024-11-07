import { LogtankDetail } from './LogtankDetail';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLogtanksResponse extends SdkResponse {
    public logtanks?: Array<LogtankDetail>;
    private 'page_info'?: PageInfo;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withLogtanks(logtanks: Array<LogtankDetail>): ListLogtanksResponse {
        this['logtanks'] = logtanks;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListLogtanksResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withRequestId(requestId: string): ListLogtanksResponse {
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