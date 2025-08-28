import { LogicalProcessInfo } from './LogicalProcessInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLogicalProcessesResponse extends SdkResponse {
    private 'logical_processes'?: Array<LogicalProcessInfo>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withLogicalProcesses(logicalProcesses: Array<LogicalProcessInfo>): ShowLogicalProcessesResponse {
        this['logical_processes'] = logicalProcesses;
        return this;
    }
    public set logicalProcesses(logicalProcesses: Array<LogicalProcessInfo>  | undefined) {
        this['logical_processes'] = logicalProcesses;
    }
    public get logicalProcesses(): Array<LogicalProcessInfo> | undefined {
        return this['logical_processes'];
    }
    public withTotalCount(totalCount: number): ShowLogicalProcessesResponse {
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