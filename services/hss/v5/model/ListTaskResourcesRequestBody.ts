import { ListTaskResourcesRequestBodyClusterScanInfo } from './ListTaskResourcesRequestBodyClusterScanInfo';
import { ListTaskResourcesRequestBodyIacScanInfo } from './ListTaskResourcesRequestBodyIacScanInfo';


export class ListTaskResourcesRequestBody {
    private 'task_type'?: string;
    private 'cluster_scan_info'?: ListTaskResourcesRequestBodyClusterScanInfo;
    private 'iac_scan_info'?: ListTaskResourcesRequestBodyIacScanInfo;
    public constructor(taskType?: string) { 
        this['task_type'] = taskType;
    }
    public withTaskType(taskType: string): ListTaskResourcesRequestBody {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): string | undefined {
        return this['task_type'];
    }
    public withClusterScanInfo(clusterScanInfo: ListTaskResourcesRequestBodyClusterScanInfo): ListTaskResourcesRequestBody {
        this['cluster_scan_info'] = clusterScanInfo;
        return this;
    }
    public set clusterScanInfo(clusterScanInfo: ListTaskResourcesRequestBodyClusterScanInfo  | undefined) {
        this['cluster_scan_info'] = clusterScanInfo;
    }
    public get clusterScanInfo(): ListTaskResourcesRequestBodyClusterScanInfo | undefined {
        return this['cluster_scan_info'];
    }
    public withIacScanInfo(iacScanInfo: ListTaskResourcesRequestBodyIacScanInfo): ListTaskResourcesRequestBody {
        this['iac_scan_info'] = iacScanInfo;
        return this;
    }
    public set iacScanInfo(iacScanInfo: ListTaskResourcesRequestBodyIacScanInfo  | undefined) {
        this['iac_scan_info'] = iacScanInfo;
    }
    public get iacScanInfo(): ListTaskResourcesRequestBodyIacScanInfo | undefined {
        return this['iac_scan_info'];
    }
}