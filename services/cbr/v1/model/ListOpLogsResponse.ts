import { OperationLog } from './OperationLog';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListOpLogsResponse extends SdkResponse {
    private 'operation_logs'?: Array<OperationLog>;
    public count?: number;
    public limit?: number;
    public offset?: number;
    public constructor() { 
        super();
    }
    public withOperationLogs(operationLogs: Array<OperationLog>): ListOpLogsResponse {
        this['operation_logs'] = operationLogs;
        return this;
    }
    public set operationLogs(operationLogs: Array<OperationLog>  | undefined) {
        this['operation_logs'] = operationLogs;
    }
    public get operationLogs(): Array<OperationLog> | undefined {
        return this['operation_logs'];
    }
    public withCount(count: number): ListOpLogsResponse {
        this['count'] = count;
        return this;
    }
    public withLimit(limit: number): ListOpLogsResponse {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListOpLogsResponse {
        this['offset'] = offset;
        return this;
    }
}