import { HistoryStreamInfo } from './HistoryStreamInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHistoryStreamsResponse extends SdkResponse {
    private 'history_stream_list'?: Array<HistoryStreamInfo> | undefined;
    public total?: number;
    private 'X-Request-Id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withHistoryStreamList(historyStreamList: Array<HistoryStreamInfo>): ListHistoryStreamsResponse {
        this['history_stream_list'] = historyStreamList;
        return this;
    }
    public set historyStreamList(historyStreamList: Array<HistoryStreamInfo> | undefined) {
        this['history_stream_list'] = historyStreamList;
    }
    public get historyStreamList() {
        return this['history_stream_list'];
    }
    public withTotal(total: number): ListHistoryStreamsResponse {
        this['total'] = total;
        return this;
    }
    public withXRequestId(xRequestId: string): ListHistoryStreamsResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-Request-Id'];
    }
}