

export class ServiceInstanceResponse {
    private 'instance_name'?: string;
    public status?: string;
    public weight?: number;
    private 'pod_count'?: number;
    private 'running_pod_count'?: number;
    private 'update_at'?: number;
    public constructor() { 
    }
    public withInstanceName(instanceName: string): ServiceInstanceResponse {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withStatus(status: string): ServiceInstanceResponse {
        this['status'] = status;
        return this;
    }
    public withWeight(weight: number): ServiceInstanceResponse {
        this['weight'] = weight;
        return this;
    }
    public withPodCount(podCount: number): ServiceInstanceResponse {
        this['pod_count'] = podCount;
        return this;
    }
    public set podCount(podCount: number  | undefined) {
        this['pod_count'] = podCount;
    }
    public get podCount(): number | undefined {
        return this['pod_count'];
    }
    public withRunningPodCount(runningPodCount: number): ServiceInstanceResponse {
        this['running_pod_count'] = runningPodCount;
        return this;
    }
    public set runningPodCount(runningPodCount: number  | undefined) {
        this['running_pod_count'] = runningPodCount;
    }
    public get runningPodCount(): number | undefined {
        return this['running_pod_count'];
    }
    public withUpdateAt(updateAt: number): ServiceInstanceResponse {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: number  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): number | undefined {
        return this['update_at'];
    }
}