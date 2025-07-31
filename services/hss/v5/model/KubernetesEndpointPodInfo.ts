

export class KubernetesEndpointPodInfo {
    public id?: string;
    private 'endpoint_id'?: string;
    private 'pod_ip'?: string;
    private 'pod_name'?: string;
    public available?: boolean;
    public constructor() { 
    }
    public withId(id: string): KubernetesEndpointPodInfo {
        this['id'] = id;
        return this;
    }
    public withEndpointId(endpointId: string): KubernetesEndpointPodInfo {
        this['endpoint_id'] = endpointId;
        return this;
    }
    public set endpointId(endpointId: string  | undefined) {
        this['endpoint_id'] = endpointId;
    }
    public get endpointId(): string | undefined {
        return this['endpoint_id'];
    }
    public withPodIp(podIp: string): KubernetesEndpointPodInfo {
        this['pod_ip'] = podIp;
        return this;
    }
    public set podIp(podIp: string  | undefined) {
        this['pod_ip'] = podIp;
    }
    public get podIp(): string | undefined {
        return this['pod_ip'];
    }
    public withPodName(podName: string): KubernetesEndpointPodInfo {
        this['pod_name'] = podName;
        return this;
    }
    public set podName(podName: string  | undefined) {
        this['pod_name'] = podName;
    }
    public get podName(): string | undefined {
        return this['pod_name'];
    }
    public withAvailable(available: boolean): KubernetesEndpointPodInfo {
        this['available'] = available;
        return this;
    }
}