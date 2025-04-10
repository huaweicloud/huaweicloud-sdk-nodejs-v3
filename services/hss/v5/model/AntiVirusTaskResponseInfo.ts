import { AntiVirusTaskHostResponseInfo } from './AntiVirusTaskHostResponseInfo';


export class AntiVirusTaskResponseInfo {
    private 'task_id'?: string;
    private 'task_name'?: string;
    private 'scan_type'?: string;
    private 'start_type'?: string;
    public action?: string;
    private 'start_time'?: number;
    private 'task_status'?: string;
    private 'host_num'?: number;
    private 'success_host_num'?: number;
    private 'fail_host_num'?: number;
    private 'cancel_host_num'?: number;
    private 'host_info_list'?: Array<AntiVirusTaskHostResponseInfo>;
    public rescan?: boolean;
    private 'whether_paid_task'?: boolean;
    public constructor() { 
    }
    public withTaskId(taskId: string): AntiVirusTaskResponseInfo {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTaskName(taskName: string): AntiVirusTaskResponseInfo {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withScanType(scanType: string): AntiVirusTaskResponseInfo {
        this['scan_type'] = scanType;
        return this;
    }
    public set scanType(scanType: string  | undefined) {
        this['scan_type'] = scanType;
    }
    public get scanType(): string | undefined {
        return this['scan_type'];
    }
    public withStartType(startType: string): AntiVirusTaskResponseInfo {
        this['start_type'] = startType;
        return this;
    }
    public set startType(startType: string  | undefined) {
        this['start_type'] = startType;
    }
    public get startType(): string | undefined {
        return this['start_type'];
    }
    public withAction(action: string): AntiVirusTaskResponseInfo {
        this['action'] = action;
        return this;
    }
    public withStartTime(startTime: number): AntiVirusTaskResponseInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withTaskStatus(taskStatus: string): AntiVirusTaskResponseInfo {
        this['task_status'] = taskStatus;
        return this;
    }
    public set taskStatus(taskStatus: string  | undefined) {
        this['task_status'] = taskStatus;
    }
    public get taskStatus(): string | undefined {
        return this['task_status'];
    }
    public withHostNum(hostNum: number): AntiVirusTaskResponseInfo {
        this['host_num'] = hostNum;
        return this;
    }
    public set hostNum(hostNum: number  | undefined) {
        this['host_num'] = hostNum;
    }
    public get hostNum(): number | undefined {
        return this['host_num'];
    }
    public withSuccessHostNum(successHostNum: number): AntiVirusTaskResponseInfo {
        this['success_host_num'] = successHostNum;
        return this;
    }
    public set successHostNum(successHostNum: number  | undefined) {
        this['success_host_num'] = successHostNum;
    }
    public get successHostNum(): number | undefined {
        return this['success_host_num'];
    }
    public withFailHostNum(failHostNum: number): AntiVirusTaskResponseInfo {
        this['fail_host_num'] = failHostNum;
        return this;
    }
    public set failHostNum(failHostNum: number  | undefined) {
        this['fail_host_num'] = failHostNum;
    }
    public get failHostNum(): number | undefined {
        return this['fail_host_num'];
    }
    public withCancelHostNum(cancelHostNum: number): AntiVirusTaskResponseInfo {
        this['cancel_host_num'] = cancelHostNum;
        return this;
    }
    public set cancelHostNum(cancelHostNum: number  | undefined) {
        this['cancel_host_num'] = cancelHostNum;
    }
    public get cancelHostNum(): number | undefined {
        return this['cancel_host_num'];
    }
    public withHostInfoList(hostInfoList: Array<AntiVirusTaskHostResponseInfo>): AntiVirusTaskResponseInfo {
        this['host_info_list'] = hostInfoList;
        return this;
    }
    public set hostInfoList(hostInfoList: Array<AntiVirusTaskHostResponseInfo>  | undefined) {
        this['host_info_list'] = hostInfoList;
    }
    public get hostInfoList(): Array<AntiVirusTaskHostResponseInfo> | undefined {
        return this['host_info_list'];
    }
    public withRescan(rescan: boolean): AntiVirusTaskResponseInfo {
        this['rescan'] = rescan;
        return this;
    }
    public withWhetherPaidTask(whetherPaidTask: boolean): AntiVirusTaskResponseInfo {
        this['whether_paid_task'] = whetherPaidTask;
        return this;
    }
    public set whetherPaidTask(whetherPaidTask: boolean  | undefined) {
        this['whether_paid_task'] = whetherPaidTask;
    }
    public get whetherPaidTask(): boolean | undefined {
        return this['whether_paid_task'];
    }
}