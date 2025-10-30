import { RetryTaskRequestBodyClusterScanInfo } from './RetryTaskRequestBodyClusterScanInfo';


export class RetryTaskRequestBody {
    private 'task_type'?: string;
    private 'cluster_scan_info'?: RetryTaskRequestBodyClusterScanInfo;
    public constructor(taskType?: string) { 
        this['task_type'] = taskType;
    }
    public withTaskType(taskType: string): RetryTaskRequestBody {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): string | undefined {
        return this['task_type'];
    }
    public withClusterScanInfo(clusterScanInfo: RetryTaskRequestBodyClusterScanInfo): RetryTaskRequestBody {
        this['cluster_scan_info'] = clusterScanInfo;
        return this;
    }
    public set clusterScanInfo(clusterScanInfo: RetryTaskRequestBodyClusterScanInfo  | undefined) {
        this['cluster_scan_info'] = clusterScanInfo;
    }
    public get clusterScanInfo(): RetryTaskRequestBodyClusterScanInfo | undefined {
        return this['cluster_scan_info'];
    }
}