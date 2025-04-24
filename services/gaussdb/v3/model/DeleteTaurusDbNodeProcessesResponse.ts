
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteTaurusDbNodeProcessesResponse extends SdkResponse {
    private 'processes_killed'?: Array<number>;
    private 'processes_not_found'?: Array<number>;
    public constructor() { 
        super();
    }
    public withProcessesKilled(processesKilled: Array<number>): DeleteTaurusDbNodeProcessesResponse {
        this['processes_killed'] = processesKilled;
        return this;
    }
    public set processesKilled(processesKilled: Array<number>  | undefined) {
        this['processes_killed'] = processesKilled;
    }
    public get processesKilled(): Array<number> | undefined {
        return this['processes_killed'];
    }
    public withProcessesNotFound(processesNotFound: Array<number>): DeleteTaurusDbNodeProcessesResponse {
        this['processes_not_found'] = processesNotFound;
        return this;
    }
    public set processesNotFound(processesNotFound: Array<number>  | undefined) {
        this['processes_not_found'] = processesNotFound;
    }
    public get processesNotFound(): Array<number> | undefined {
        return this['processes_not_found'];
    }
}