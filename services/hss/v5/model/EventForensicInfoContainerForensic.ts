

export class EventForensicInfoContainerForensic {
    private 'container_id'?: string;
    private 'container_status'?: string;
    private 'pod_uid'?: string;
    private 'pod_name'?: string;
    public namespace?: string;
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    private 'image_id'?: string;
    private 'image_name'?: string;
    public priviledged?: boolean;
    private 'pid_mode'?: string;
    private 'ipc_mode'?: string;
    private 'network_mode'?: string;
    private 'publish_allports'?: boolean;
    public capabilities?: string;
    private 'security_opts'?: string;
    public ports?: string;
    public mounts?: string;
    private 'sys_call'?: string;
    private 'container_name'?: string;
    public constructor() { 
    }
    public withContainerId(containerId: string): EventForensicInfoContainerForensic {
        this['container_id'] = containerId;
        return this;
    }
    public set containerId(containerId: string  | undefined) {
        this['container_id'] = containerId;
    }
    public get containerId(): string | undefined {
        return this['container_id'];
    }
    public withContainerStatus(containerStatus: string): EventForensicInfoContainerForensic {
        this['container_status'] = containerStatus;
        return this;
    }
    public set containerStatus(containerStatus: string  | undefined) {
        this['container_status'] = containerStatus;
    }
    public get containerStatus(): string | undefined {
        return this['container_status'];
    }
    public withPodUid(podUid: string): EventForensicInfoContainerForensic {
        this['pod_uid'] = podUid;
        return this;
    }
    public set podUid(podUid: string  | undefined) {
        this['pod_uid'] = podUid;
    }
    public get podUid(): string | undefined {
        return this['pod_uid'];
    }
    public withPodName(podName: string): EventForensicInfoContainerForensic {
        this['pod_name'] = podName;
        return this;
    }
    public set podName(podName: string  | undefined) {
        this['pod_name'] = podName;
    }
    public get podName(): string | undefined {
        return this['pod_name'];
    }
    public withNamespace(namespace: string): EventForensicInfoContainerForensic {
        this['namespace'] = namespace;
        return this;
    }
    public withClusterId(clusterId: string): EventForensicInfoContainerForensic {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): EventForensicInfoContainerForensic {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withImageId(imageId: string): EventForensicInfoContainerForensic {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withImageName(imageName: string): EventForensicInfoContainerForensic {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withPriviledged(priviledged: boolean): EventForensicInfoContainerForensic {
        this['priviledged'] = priviledged;
        return this;
    }
    public withPidMode(pidMode: string): EventForensicInfoContainerForensic {
        this['pid_mode'] = pidMode;
        return this;
    }
    public set pidMode(pidMode: string  | undefined) {
        this['pid_mode'] = pidMode;
    }
    public get pidMode(): string | undefined {
        return this['pid_mode'];
    }
    public withIpcMode(ipcMode: string): EventForensicInfoContainerForensic {
        this['ipc_mode'] = ipcMode;
        return this;
    }
    public set ipcMode(ipcMode: string  | undefined) {
        this['ipc_mode'] = ipcMode;
    }
    public get ipcMode(): string | undefined {
        return this['ipc_mode'];
    }
    public withNetworkMode(networkMode: string): EventForensicInfoContainerForensic {
        this['network_mode'] = networkMode;
        return this;
    }
    public set networkMode(networkMode: string  | undefined) {
        this['network_mode'] = networkMode;
    }
    public get networkMode(): string | undefined {
        return this['network_mode'];
    }
    public withPublishAllports(publishAllports: boolean): EventForensicInfoContainerForensic {
        this['publish_allports'] = publishAllports;
        return this;
    }
    public set publishAllports(publishAllports: boolean  | undefined) {
        this['publish_allports'] = publishAllports;
    }
    public get publishAllports(): boolean | undefined {
        return this['publish_allports'];
    }
    public withCapabilities(capabilities: string): EventForensicInfoContainerForensic {
        this['capabilities'] = capabilities;
        return this;
    }
    public withSecurityOpts(securityOpts: string): EventForensicInfoContainerForensic {
        this['security_opts'] = securityOpts;
        return this;
    }
    public set securityOpts(securityOpts: string  | undefined) {
        this['security_opts'] = securityOpts;
    }
    public get securityOpts(): string | undefined {
        return this['security_opts'];
    }
    public withPorts(ports: string): EventForensicInfoContainerForensic {
        this['ports'] = ports;
        return this;
    }
    public withMounts(mounts: string): EventForensicInfoContainerForensic {
        this['mounts'] = mounts;
        return this;
    }
    public withSysCall(sysCall: string): EventForensicInfoContainerForensic {
        this['sys_call'] = sysCall;
        return this;
    }
    public set sysCall(sysCall: string  | undefined) {
        this['sys_call'] = sysCall;
    }
    public get sysCall(): string | undefined {
        return this['sys_call'];
    }
    public withContainerName(containerName: string): EventForensicInfoContainerForensic {
        this['container_name'] = containerName;
        return this;
    }
    public set containerName(containerName: string  | undefined) {
        this['container_name'] = containerName;
    }
    public get containerName(): string | undefined {
        return this['container_name'];
    }
}