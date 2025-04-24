import { TaurusDbProcessInfo } from './TaurusDbProcessInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTaurusDbNodeProcessesResponse extends SdkResponse {
    public processes?: Array<TaurusDbProcessInfo>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withProcesses(processes: Array<TaurusDbProcessInfo>): ListTaurusDbNodeProcessesResponse {
        this['processes'] = processes;
        return this;
    }
    public withTotalCount(totalCount: number): ListTaurusDbNodeProcessesResponse {
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