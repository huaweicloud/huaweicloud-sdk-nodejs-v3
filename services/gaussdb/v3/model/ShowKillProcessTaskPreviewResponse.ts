import { ProcessDetail } from './ProcessDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowKillProcessTaskPreviewResponse extends SdkResponse {
    private 'total_count'?: number;
    public processes?: Array<ProcessDetail>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ShowKillProcessTaskPreviewResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withProcesses(processes: Array<ProcessDetail>): ShowKillProcessTaskPreviewResponse {
        this['processes'] = processes;
        return this;
    }
}