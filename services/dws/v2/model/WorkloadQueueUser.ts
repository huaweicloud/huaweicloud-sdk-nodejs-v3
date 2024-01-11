import { OccupyResource } from './OccupyResource';


export class WorkloadQueueUser {
    private 'user_name'?: string;
    private 'occupy_resource_list'?: Array<OccupyResource>;
    private 'exec_result'?: number;
    private 'exec_log'?: string;
    public constructor(userName?: string, occupyResourceList?: Array<OccupyResource>) { 
        this['user_name'] = userName;
        this['occupy_resource_list'] = occupyResourceList;
    }
    public withUserName(userName: string): WorkloadQueueUser {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withOccupyResourceList(occupyResourceList: Array<OccupyResource>): WorkloadQueueUser {
        this['occupy_resource_list'] = occupyResourceList;
        return this;
    }
    public set occupyResourceList(occupyResourceList: Array<OccupyResource>  | undefined) {
        this['occupy_resource_list'] = occupyResourceList;
    }
    public get occupyResourceList(): Array<OccupyResource> | undefined {
        return this['occupy_resource_list'];
    }
    public withExecResult(execResult: number): WorkloadQueueUser {
        this['exec_result'] = execResult;
        return this;
    }
    public set execResult(execResult: number  | undefined) {
        this['exec_result'] = execResult;
    }
    public get execResult(): number | undefined {
        return this['exec_result'];
    }
    public withExecLog(execLog: string): WorkloadQueueUser {
        this['exec_log'] = execLog;
        return this;
    }
    public set execLog(execLog: string  | undefined) {
        this['exec_log'] = execLog;
    }
    public get execLog(): string | undefined {
        return this['exec_log'];
    }
}