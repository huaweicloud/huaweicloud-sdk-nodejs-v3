

export class ShowK8sPodDetailRequest {
    private 'enterprise_project_id'?: string;
    private 'pod_name'?: string;
    public constructor(podName?: string) { 
        this['pod_name'] = podName;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowK8sPodDetailRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withPodName(podName: string): ShowK8sPodDetailRequest {
        this['pod_name'] = podName;
        return this;
    }
    public set podName(podName: string  | undefined) {
        this['pod_name'] = podName;
    }
    public get podName(): string | undefined {
        return this['pod_name'];
    }
}