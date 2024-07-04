

export class ListContainersRequest {
    private 'enterprise_project_id'?: string;
    private 'container_name'?: string;
    private 'pod_name'?: string;
    private 'image_name'?: string;
    private 'cluster_container'?: boolean;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListContainersRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withContainerName(containerName: string): ListContainersRequest {
        this['container_name'] = containerName;
        return this;
    }
    public set containerName(containerName: string  | undefined) {
        this['container_name'] = containerName;
    }
    public get containerName(): string | undefined {
        return this['container_name'];
    }
    public withPodName(podName: string): ListContainersRequest {
        this['pod_name'] = podName;
        return this;
    }
    public set podName(podName: string  | undefined) {
        this['pod_name'] = podName;
    }
    public get podName(): string | undefined {
        return this['pod_name'];
    }
    public withImageName(imageName: string): ListContainersRequest {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withClusterContainer(clusterContainer: boolean): ListContainersRequest {
        this['cluster_container'] = clusterContainer;
        return this;
    }
    public set clusterContainer(clusterContainer: boolean  | undefined) {
        this['cluster_container'] = clusterContainer;
    }
    public get clusterContainer(): boolean | undefined {
        return this['cluster_container'];
    }
    public withLimit(limit: number): ListContainersRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListContainersRequest {
        this['offset'] = offset;
        return this;
    }
}