import { KillProcessItem } from './KillProcessItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowKillProcessTaskResponse extends SdkResponse {
    public processes?: Array<KillProcessItem>;
    public constructor() { 
        super();
    }
    public withProcesses(processes: Array<KillProcessItem>): ShowKillProcessTaskResponse {
        this['processes'] = processes;
        return this;
    }
}