import { Process } from './Process';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProcessesResponse extends SdkResponse {
    public processes?: Array<Process>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withProcesses(processes: Array<Process>): ListProcessesResponse {
        this['processes'] = processes;
        return this;
    }
    public withCount(count: number): ListProcessesResponse {
        this['count'] = count;
        return this;
    }
}