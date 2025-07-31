import { CreateTaskRequestBodyClusterScanInfo } from './CreateTaskRequestBodyClusterScanInfo';
import { CreateTaskRequestBodyIacScanInfo } from './CreateTaskRequestBodyIacScanInfo';


export class CreateTaskRequestBody {
    private 'task_type'?: string;
    private 'cluster_scan_info'?: CreateTaskRequestBodyClusterScanInfo;
    private 'iac_scan_info'?: CreateTaskRequestBodyIacScanInfo;
    public constructor(taskType?: string) { 
        this['task_type'] = taskType;
    }
    public withTaskType(taskType: string): CreateTaskRequestBody {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): string | undefined {
        return this['task_type'];
    }
    public withClusterScanInfo(clusterScanInfo: CreateTaskRequestBodyClusterScanInfo): CreateTaskRequestBody {
        this['cluster_scan_info'] = clusterScanInfo;
        return this;
    }
    public set clusterScanInfo(clusterScanInfo: CreateTaskRequestBodyClusterScanInfo  | undefined) {
        this['cluster_scan_info'] = clusterScanInfo;
    }
    public get clusterScanInfo(): CreateTaskRequestBodyClusterScanInfo | undefined {
        return this['cluster_scan_info'];
    }
    public withIacScanInfo(iacScanInfo: CreateTaskRequestBodyIacScanInfo): CreateTaskRequestBody {
        this['iac_scan_info'] = iacScanInfo;
        return this;
    }
    public set iacScanInfo(iacScanInfo: CreateTaskRequestBodyIacScanInfo  | undefined) {
        this['iac_scan_info'] = iacScanInfo;
    }
    public get iacScanInfo(): CreateTaskRequestBodyIacScanInfo | undefined {
        return this['iac_scan_info'];
    }
}