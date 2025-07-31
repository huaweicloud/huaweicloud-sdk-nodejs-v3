import { ListTasksRequestBodyClusterScanInfo } from './ListTasksRequestBodyClusterScanInfo';
import { ListTasksRequestBodyIacScanInfo } from './ListTasksRequestBodyIacScanInfo';


export class ListTasksRequestBody {
    private 'task_type'?: string;
    private 'task_id'?: string;
    private 'task_name'?: string;
    private 'start_create_time'?: number;
    private 'end_create_time'?: number;
    private 'trigger_type'?: string;
    private 'task_status'?: string;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    private 'cluster_scan_info'?: ListTasksRequestBodyClusterScanInfo;
    private 'iac_scan_info'?: ListTasksRequestBodyIacScanInfo;
    public constructor(taskType?: string) { 
        this['task_type'] = taskType;
    }
    public withTaskType(taskType: string): ListTasksRequestBody {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): string | undefined {
        return this['task_type'];
    }
    public withTaskId(taskId: string): ListTasksRequestBody {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTaskName(taskName: string): ListTasksRequestBody {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withStartCreateTime(startCreateTime: number): ListTasksRequestBody {
        this['start_create_time'] = startCreateTime;
        return this;
    }
    public set startCreateTime(startCreateTime: number  | undefined) {
        this['start_create_time'] = startCreateTime;
    }
    public get startCreateTime(): number | undefined {
        return this['start_create_time'];
    }
    public withEndCreateTime(endCreateTime: number): ListTasksRequestBody {
        this['end_create_time'] = endCreateTime;
        return this;
    }
    public set endCreateTime(endCreateTime: number  | undefined) {
        this['end_create_time'] = endCreateTime;
    }
    public get endCreateTime(): number | undefined {
        return this['end_create_time'];
    }
    public withTriggerType(triggerType: string): ListTasksRequestBody {
        this['trigger_type'] = triggerType;
        return this;
    }
    public set triggerType(triggerType: string  | undefined) {
        this['trigger_type'] = triggerType;
    }
    public get triggerType(): string | undefined {
        return this['trigger_type'];
    }
    public withTaskStatus(taskStatus: string): ListTasksRequestBody {
        this['task_status'] = taskStatus;
        return this;
    }
    public set taskStatus(taskStatus: string  | undefined) {
        this['task_status'] = taskStatus;
    }
    public get taskStatus(): string | undefined {
        return this['task_status'];
    }
    public withSortKey(sortKey: string): ListTasksRequestBody {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListTasksRequestBody {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withClusterScanInfo(clusterScanInfo: ListTasksRequestBodyClusterScanInfo): ListTasksRequestBody {
        this['cluster_scan_info'] = clusterScanInfo;
        return this;
    }
    public set clusterScanInfo(clusterScanInfo: ListTasksRequestBodyClusterScanInfo  | undefined) {
        this['cluster_scan_info'] = clusterScanInfo;
    }
    public get clusterScanInfo(): ListTasksRequestBodyClusterScanInfo | undefined {
        return this['cluster_scan_info'];
    }
    public withIacScanInfo(iacScanInfo: ListTasksRequestBodyIacScanInfo): ListTasksRequestBody {
        this['iac_scan_info'] = iacScanInfo;
        return this;
    }
    public set iacScanInfo(iacScanInfo: ListTasksRequestBodyIacScanInfo  | undefined) {
        this['iac_scan_info'] = iacScanInfo;
    }
    public get iacScanInfo(): ListTasksRequestBodyIacScanInfo | undefined {
        return this['iac_scan_info'];
    }
}