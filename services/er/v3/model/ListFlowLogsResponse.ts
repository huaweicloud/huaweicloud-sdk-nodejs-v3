import { FlowLog } from './FlowLog';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFlowLogsResponse extends SdkResponse {
    private 'flow_logs'?: Array<FlowLog>;
    private 'request_id'?: string;
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