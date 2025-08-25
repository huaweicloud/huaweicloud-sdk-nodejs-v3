
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCcspClusterResponse extends SdkResponse {
    private 'task_id'?: string;
    private 'project_id'?: string;
    private 'domain_id'?: string;
    private 'task_details'?: Array<object>;
    private 'ccsp_id'?: string;
    private 'distributed_type'?: string;
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    private 'service_type'?: string;
    public type?: string;
    private 'instance_num'?: number;
    public status?: string;
    private 'progress_info'?: string;
    private 'vsm_num'?: number;
    private 'create_time'?: number;
    private 'shared_ccsp'?: boolean;
    private 'enterprise_project_id'?: string;
    public az?: string;
    public constructor() { 
        super();
    }
    public withTaskId(taskId: string): ShowCcspClusterResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withProjectId(projectId: string): ShowCcspClusterResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withDomainId(domainId: string): ShowCcspClusterResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withTaskDetails(taskDetails: Array<object>): ShowCcspClusterResponse {
        this['task_details'] = taskDetails;
        return this;
    }
    public set taskDetails(taskDetails: Array<object>  | undefined) {
        this['task_details'] = taskDetails;
    }
    public get taskDetails(): Array<object> | undefined {
        return this['task_details'];
    }
    public withCcspId(ccspId: string): ShowCcspClusterResponse {
        this['ccsp_id'] = ccspId;
        return this;
    }
    public set ccspId(ccspId: string  | undefined) {
        this['ccsp_id'] = ccspId;
    }
    public get ccspId(): string | undefined {
        return this['ccsp_id'];
    }
    public withDistributedType(distributedType: string): ShowCcspClusterResponse {
        this['distributed_type'] = distributedType;
        return this;
    }
    public set distributedType(distributedType: string  | undefined) {
        this['distributed_type'] = distributedType;
    }
    public get distributedType(): string | undefined {
        return this['distributed_type'];
    }
    public withClusterId(clusterId: string): ShowCcspClusterResponse {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): ShowCcspClusterResponse {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withServiceType(serviceType: string): ShowCcspClusterResponse {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): string | undefined {
        return this['service_type'];
    }
    public withType(type: string): ShowCcspClusterResponse {
        this['type'] = type;
        return this;
    }
    public withInstanceNum(instanceNum: number): ShowCcspClusterResponse {
        this['instance_num'] = instanceNum;
        return this;
    }
    public set instanceNum(instanceNum: number  | undefined) {
        this['instance_num'] = instanceNum;
    }
    public get instanceNum(): number | undefined {
        return this['instance_num'];
    }
    public withStatus(status: string): ShowCcspClusterResponse {
        this['status'] = status;
        return this;
    }
    public withProgressInfo(progressInfo: string): ShowCcspClusterResponse {
        this['progress_info'] = progressInfo;
        return this;
    }
    public set progressInfo(progressInfo: string  | undefined) {
        this['progress_info'] = progressInfo;
    }
    public get progressInfo(): string | undefined {
        return this['progress_info'];
    }
    public withVsmNum(vsmNum: number): ShowCcspClusterResponse {
        this['vsm_num'] = vsmNum;
        return this;
    }
    public set vsmNum(vsmNum: number  | undefined) {
        this['vsm_num'] = vsmNum;
    }
    public get vsmNum(): number | undefined {
        return this['vsm_num'];
    }
    public withCreateTime(createTime: number): ShowCcspClusterResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withSharedCcsp(sharedCcsp: boolean): ShowCcspClusterResponse {
        this['shared_ccsp'] = sharedCcsp;
        return this;
    }
    public set sharedCcsp(sharedCcsp: boolean  | undefined) {
        this['shared_ccsp'] = sharedCcsp;
    }
    public get sharedCcsp(): boolean | undefined {
        return this['shared_ccsp'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowCcspClusterResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withAz(az: string): ShowCcspClusterResponse {
        this['az'] = az;
        return this;
    }
}