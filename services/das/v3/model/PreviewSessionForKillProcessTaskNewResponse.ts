import { ProcessSessionInfo } from './ProcessSessionInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class PreviewSessionForKillProcessTaskNewResponse extends SdkResponse {
    public processes?: Array<ProcessSessionInfo>;
    private 'data_sync_time'?: number;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withProcesses(processes: Array<ProcessSessionInfo>): PreviewSessionForKillProcessTaskNewResponse {
        this['processes'] = processes;
        return this;
    }
    public withDataSyncTime(dataSyncTime: number): PreviewSessionForKillProcessTaskNewResponse {
        this['data_sync_time'] = dataSyncTime;
        return this;
    }
    public set dataSyncTime(dataSyncTime: number  | undefined) {
        this['data_sync_time'] = dataSyncTime;
    }
    public get dataSyncTime(): number | undefined {
        return this['data_sync_time'];
    }
    public withTotalCount(totalCount: number): PreviewSessionForKillProcessTaskNewResponse {
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