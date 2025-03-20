import { FlowLog } from './FlowLog';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFlowLogsResponse extends SdkResponse {
    private 'flow_logs'?: Array<FlowLog>;
    private 'request_id'?: string;
    private 'total_count'?: number;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withFlowLogs(flowLogs: Array<FlowLog>): ListFlowLogsResponse {
        this['flow_logs'] = flowLogs;
        return this;
    }
    public set flowLogs(flowLogs: Array<FlowLog>  | undefined) {
        this['flow_logs'] = flowLogs;
    }
    public get flowLogs(): Array<FlowLog> | undefined {
        return this['flow_logs'];
    }
    public withRequestId(requestId: string): ListFlowLogsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withTotalCount(totalCount: number): ListFlowLogsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withPageInfo(pageInfo: PageInfo): ListFlowLogsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}