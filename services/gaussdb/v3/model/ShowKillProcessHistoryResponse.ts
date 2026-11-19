import { KillProcessHistoryItem } from './KillProcessHistoryItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowKillProcessHistoryResponse extends SdkResponse {
    private 'total_count'?: number;
    public processes?: Array<KillProcessHistoryItem>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ShowKillProcessHistoryResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withProcesses(processes: Array<KillProcessHistoryItem>): ShowKillProcessHistoryResponse {
        this['processes'] = processes;
        return this;
    }
}