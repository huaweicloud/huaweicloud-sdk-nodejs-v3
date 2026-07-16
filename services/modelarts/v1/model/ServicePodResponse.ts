

export class ServicePodResponse {
    private 'pod_id'?: string;
    private 'pod_name'?: string;
    private 'pod_node_ip'?: string;
    private 'pod_node_name'?: string;
    private 'pod_role'?: string;
    public status?: string;
    private 'update_time'?: number;
    public constructor() { 
    }
    public withPodId(podId: string): ServicePodResponse {
        this['pod_id'] = podId;
        return this;
    }
    public set podId(podId: string  | undefined) {
        this['pod_id'] = podId;
    }
    public get podId(): string | undefined {
        return this['pod_id'];
    }
    public withPodName(podName: string): ServicePodResponse {
        this['pod_name'] = podName;
        return this;
    }
    public set podName(podName: string  | undefined) {
        this['pod_name'] = podName;
    }
    public get podName(): string | undefined {
        return this['pod_name'];
    }
    public withPodNodeIp(podNodeIp: string): ServicePodResponse {
        this['pod_node_ip'] = podNodeIp;
        return this;
    }
    public set podNodeIp(podNodeIp: string  | undefined) {
        this['pod_node_ip'] = podNodeIp;
    }
    public get podNodeIp(): string | undefined {
        return this['pod_node_ip'];
    }
    public withPodNodeName(podNodeName: string): ServicePodResponse {
        this['pod_node_name'] = podNodeName;
        return this;
    }
    public set podNodeName(podNodeName: string  | undefined) {
        this['pod_node_name'] = podNodeName;
    }
    public get podNodeName(): string | undefined {
        return this['pod_node_name'];
    }
    public withPodRole(podRole: string): ServicePodResponse {
        this['pod_role'] = podRole;
        return this;
    }
    public set podRole(podRole: string  | undefined) {
        this['pod_role'] = podRole;
    }
    public get podRole(): string | undefined {
        return this['pod_role'];
    }
    public withStatus(status: string): ServicePodResponse {
        this['status'] = status;
        return this;
    }
    public withUpdateTime(updateTime: number): ServicePodResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
}