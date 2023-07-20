import { OnlineInfo } from './OnlineInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLiveStreamsOnlineResponse extends SdkResponse {
    private 'total_page'?: number;
    private 'total_num'?: number;
    public offset?: number;
    public limit?: number;
    private 'request_id'?: string;
    public streams?: Array<OnlineInfo>;
    public constructor() { 
        super();
    }
    public withTotalPage(totalPage: number): ListLiveStreamsOnlineResponse {
        this['total_page'] = totalPage;
        return this;
    }
    public set totalPage(totalPage: number  | undefined) {
        this['total_page'] = totalPage;
    }
    public get totalPage(): number | undefined {
        return this['total_page'];
    }
    public withTotalNum(totalNum: number): ListLiveStreamsOnlineResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withOffset(offset: number): ListLiveStreamsOnlineResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListLiveStreamsOnlineResponse {
        this['limit'] = limit;
        return this;
    }
    public withRequestId(requestId: string): ListLiveStreamsOnlineResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withStreams(streams: Array<OnlineInfo>): ListLiveStreamsOnlineResponse {
        this['streams'] = streams;
        return this;
    }
}