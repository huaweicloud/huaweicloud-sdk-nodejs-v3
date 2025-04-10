

export class ListAntiVirusTaskRequest {
    private 'enterprise_project_id'?: string;
    private 'task_name'?: string;
    public offset?: number;
    public limit?: number;
    private 'last_days'?: number;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    private 'task_status'?: string;
    private 'host_name'?: string;
    private 'private_ip'?: string;
    private 'public_ip'?: string;
    private 'whether_paid_task'?: boolean;
    private 'host_task_status'?: Array<string>;
    public constructor(offset?: number, limit?: number, whetherPaidTask?: boolean) { 
        this['offset'] = offset;
        this['limit'] = limit;
        this['whether_paid_task'] = whetherPaidTask;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAntiVirusTaskRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTaskName(taskName: string): ListAntiVirusTaskRequest {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withOffset(offset: number): ListAntiVirusTaskRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAntiVirusTaskRequest {
        this['limit'] = limit;
        return this;
    }
    public withLastDays(lastDays: number): ListAntiVirusTaskRequest {
        this['last_days'] = lastDays;
        return this;
    }
    public set lastDays(lastDays: number  | undefined) {
        this['last_days'] = lastDays;
    }
    public get lastDays(): number | undefined {
        return this['last_days'];
    }
    public withBeginTime(beginTime: string): ListAntiVirusTaskRequest {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ListAntiVirusTaskRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withTaskStatus(taskStatus: string): ListAntiVirusTaskRequest {
        this['task_status'] = taskStatus;
        return this;
    }
    public set taskStatus(taskStatus: string  | undefined) {
        this['task_status'] = taskStatus;
    }
    public get taskStatus(): string | undefined {
        return this['task_status'];
    }
    public withHostName(hostName: string): ListAntiVirusTaskRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withPrivateIp(privateIp: string): ListAntiVirusTaskRequest {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withPublicIp(publicIp: string): ListAntiVirusTaskRequest {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withWhetherPaidTask(whetherPaidTask: boolean): ListAntiVirusTaskRequest {
        this['whether_paid_task'] = whetherPaidTask;
        return this;
    }
    public set whetherPaidTask(whetherPaidTask: boolean  | undefined) {
        this['whether_paid_task'] = whetherPaidTask;
    }
    public get whetherPaidTask(): boolean | undefined {
        return this['whether_paid_task'];
    }
    public withHostTaskStatus(hostTaskStatus: Array<string>): ListAntiVirusTaskRequest {
        this['host_task_status'] = hostTaskStatus;
        return this;
    }
    public set hostTaskStatus(hostTaskStatus: Array<string>  | undefined) {
        this['host_task_status'] = hostTaskStatus;
    }
    public get hostTaskStatus(): Array<string> | undefined {
        return this['host_task_status'];
    }
}