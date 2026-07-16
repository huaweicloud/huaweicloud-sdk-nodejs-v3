

export class ListInferDeploymentPodsRequest {
    public id?: string;
    private 'deployment_name'?: string;
    public name?: string;
    public status?: Array<string>;
    public limit?: number;
    public offset?: string;
    private 'pod_name'?: string;
    private 'pod_id'?: string;
    private 'pod_node_ip'?: string;
    private 'pod_node_name'?: string;
    public constructor(id?: string, deploymentName?: string, name?: string) { 
        this['id'] = id;
        this['deployment_name'] = deploymentName;
        this['name'] = name;
    }
    public withId(id: string): ListInferDeploymentPodsRequest {
        this['id'] = id;
        return this;
    }
    public withDeploymentName(deploymentName: string): ListInferDeploymentPodsRequest {
        this['deployment_name'] = deploymentName;
        return this;
    }
    public set deploymentName(deploymentName: string  | undefined) {
        this['deployment_name'] = deploymentName;
    }
    public get deploymentName(): string | undefined {
        return this['deployment_name'];
    }
    public withName(name: string): ListInferDeploymentPodsRequest {
        this['name'] = name;
        return this;
    }
    public withStatus(status: Array<string>): ListInferDeploymentPodsRequest {
        this['status'] = status;
        return this;
    }
    public withLimit(limit: number): ListInferDeploymentPodsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListInferDeploymentPodsRequest {
        this['offset'] = offset;
        return this;
    }
    public withPodName(podName: string): ListInferDeploymentPodsRequest {
        this['pod_name'] = podName;
        return this;
    }
    public set podName(podName: string  | undefined) {
        this['pod_name'] = podName;
    }
    public get podName(): string | undefined {
        return this['pod_name'];
    }
    public withPodId(podId: string): ListInferDeploymentPodsRequest {
        this['pod_id'] = podId;
        return this;
    }
    public set podId(podId: string  | undefined) {
        this['pod_id'] = podId;
    }
    public get podId(): string | undefined {
        return this['pod_id'];
    }
    public withPodNodeIp(podNodeIp: string): ListInferDeploymentPodsRequest {
        this['pod_node_ip'] = podNodeIp;
        return this;
    }
    public set podNodeIp(podNodeIp: string  | undefined) {
        this['pod_node_ip'] = podNodeIp;
    }
    public get podNodeIp(): string | undefined {
        return this['pod_node_ip'];
    }
    public withPodNodeName(podNodeName: string): ListInferDeploymentPodsRequest {
        this['pod_node_name'] = podNodeName;
        return this;
    }
    public set podNodeName(podNodeName: string  | undefined) {
        this['pod_node_name'] = podNodeName;
    }
    public get podNodeName(): string | undefined {
        return this['pod_node_name'];
    }
}