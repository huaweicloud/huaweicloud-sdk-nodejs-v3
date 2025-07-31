import { ListTasksResponseInfoClusterScanInfo } from './ListTasksResponseInfoClusterScanInfo';
import { ListTasksResponseInfoIacScanInfo } from './ListTasksResponseInfoIacScanInfo';


export class ListTasksResponseInfoDataList {
    private 'task_id'?: string;
    private 'task_type'?: string;
    private 'task_name'?: string;
    private 'trigger_type'?: string;
    private 'task_status'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'estimated_time'?: number;
    private 'cluster_scan_info'?: ListTasksResponseInfoClusterScanInfo;
    private 'iac_scan_info'?: ListTasksResponseInfoIacScanInfo;
    public constructor() { 
    }
    public withTaskId(taskId: string): ListTasksResponseInfoDataList {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTaskType(taskType: string): ListTasksResponseInfoDataList {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): string | undefined {
        return this['task_type'];
    }
    public withTaskName(taskName: string): ListTasksResponseInfoDataList {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withTriggerType(triggerType: string): ListTasksResponseInfoDataList {
        this['trigger_type'] = triggerType;
        return this;
    }
    public set triggerType(triggerType: string  | undefined) {
        this['trigger_type'] = triggerType;
    }
    public get triggerType(): string | undefined {
        return this['trigger_type'];
    }
    public withTaskStatus(taskStatus: string): ListTasksResponseInfoDataList {
        this['task_status'] = taskStatus;
        return this;
    }
    public set taskStatus(taskStatus: string  | undefined) {
        this['task_status'] = taskStatus;
    }
    public get taskStatus(): string | undefined {
        return this['task_status'];
    }
    public withStartTime(startTime: number): ListTasksResponseInfoDataList {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListTasksResponseInfoDataList {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withEstimatedTime(estimatedTime: number): ListTasksResponseInfoDataList {
        this['estimated_time'] = estimatedTime;
        return this;
    }
    public set estimatedTime(estimatedTime: number  | undefined) {
        this['estimated_time'] = estimatedTime;
    }
    public get estimatedTime(): number | undefined {
        return this['estimated_time'];
    }
    public withClusterScanInfo(clusterScanInfo: ListTasksResponseInfoClusterScanInfo): ListTasksResponseInfoDataList {
        this['cluster_scan_info'] = clusterScanInfo;
        return this;
    }
    public set clusterScanInfo(clusterScanInfo: ListTasksResponseInfoClusterScanInfo  | undefined) {
        this['cluster_scan_info'] = clusterScanInfo;
    }
    public get clusterScanInfo(): ListTasksResponseInfoClusterScanInfo | undefined {
        return this['cluster_scan_info'];
    }
    public withIacScanInfo(iacScanInfo: ListTasksResponseInfoIacScanInfo): ListTasksResponseInfoDataList {
        this['iac_scan_info'] = iacScanInfo;
        return this;
    }
    public set iacScanInfo(iacScanInfo: ListTasksResponseInfoIacScanInfo  | undefined) {
        this['iac_scan_info'] = iacScanInfo;
    }
    public get iacScanInfo(): ListTasksResponseInfoIacScanInfo | undefined {
        return this['iac_scan_info'];
    }
}