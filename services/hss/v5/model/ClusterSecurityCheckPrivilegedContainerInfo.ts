

export class ClusterSecurityCheckPrivilegedContainerInfo {
    private 'container_name'?: string;
    private 'container_id'?: string;
    private 'container_status'?: ClusterSecurityCheckPrivilegedContainerInfoContainerStatusEnum | string;
    private 'pod_name'?: string;
    private 'host_name'?: string;
    private 'private_ip'?: string;
    private 'public_ip'?: string;
    private 'event_abstract'?: string;
    public constructor() { 
    }
    public withContainerName(containerName: string): ClusterSecurityCheckPrivilegedContainerInfo {
        this['container_name'] = containerName;
        return this;
    }
    public set containerName(containerName: string  | undefined) {
        this['container_name'] = containerName;
    }
    public get containerName(): string | undefined {
        return this['container_name'];
    }
    public withContainerId(containerId: string): ClusterSecurityCheckPrivilegedContainerInfo {
        this['container_id'] = containerId;
        return this;
    }
    public set containerId(containerId: string  | undefined) {
        this['container_id'] = containerId;
    }
    public get containerId(): string | undefined {
        return this['container_id'];
    }
    public withContainerStatus(containerStatus: ClusterSecurityCheckPrivilegedContainerInfoContainerStatusEnum | string): ClusterSecurityCheckPrivilegedContainerInfo {
        this['container_status'] = containerStatus;
        return this;
    }
    public set containerStatus(containerStatus: ClusterSecurityCheckPrivilegedContainerInfoContainerStatusEnum | string  | undefined) {
        this['container_status'] = containerStatus;
    }
    public get containerStatus(): ClusterSecurityCheckPrivilegedContainerInfoContainerStatusEnum | string | undefined {
        return this['container_status'];
    }
    public withPodName(podName: string): ClusterSecurityCheckPrivilegedContainerInfo {
        this['pod_name'] = podName;
        return this;
    }
    public set podName(podName: string  | undefined) {
        this['pod_name'] = podName;
    }
    public get podName(): string | undefined {
        return this['pod_name'];
    }
    public withHostName(hostName: string): ClusterSecurityCheckPrivilegedContainerInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withPrivateIp(privateIp: string): ClusterSecurityCheckPrivilegedContainerInfo {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withPublicIp(publicIp: string): ClusterSecurityCheckPrivilegedContainerInfo {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withEventAbstract(eventAbstract: string): ClusterSecurityCheckPrivilegedContainerInfo {
        this['event_abstract'] = eventAbstract;
        return this;
    }
    public set eventAbstract(eventAbstract: string  | undefined) {
        this['event_abstract'] = eventAbstract;
    }
    public get eventAbstract(): string | undefined {
        return this['event_abstract'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ClusterSecurityCheckPrivilegedContainerInfoContainerStatusEnum {
    RUNNING = 'running',
    TERMINATED = 'terminated'
}
