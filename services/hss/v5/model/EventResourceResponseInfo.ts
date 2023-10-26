

export class EventResourceResponseInfo {
    private 'domain_id'?: string;
    private 'project_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'region_name'?: string;
    private 'vpc_id'?: string;
    private 'cloud_id'?: string;
    private 'vm_name'?: string;
    private 'vm_uuid'?: string;
    private 'container_id'?: string;
    private 'container_status'?: string;
    private 'pod_uid'?: string;
    private 'pod_name'?: string;
    public namespace?: string;
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    private 'image_id'?: string;
    private 'image_name'?: string;
    private 'host_attr'?: string;
    public service?: string;
    private 'micro_service'?: string;
    private 'sys_arch'?: string;
    private 'os_bit'?: string;
    private 'os_type'?: string;
    private 'os_name'?: string;
    private 'os_version'?: string;
    public constructor() { 
    }
    public withDomainId(domainId: string): EventResourceResponseInfo {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withProjectId(projectId: string): EventResourceResponseInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): EventResourceResponseInfo {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withRegionName(regionName: string): EventResourceResponseInfo {
        this['region_name'] = regionName;
        return this;
    }
    public set regionName(regionName: string  | undefined) {
        this['region_name'] = regionName;
    }
    public get regionName(): string | undefined {
        return this['region_name'];
    }
    public withVpcId(vpcId: string): EventResourceResponseInfo {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withCloudId(cloudId: string): EventResourceResponseInfo {
        this['cloud_id'] = cloudId;
        return this;
    }
    public set cloudId(cloudId: string  | undefined) {
        this['cloud_id'] = cloudId;
    }
    public get cloudId(): string | undefined {
        return this['cloud_id'];
    }
    public withVmName(vmName: string): EventResourceResponseInfo {
        this['vm_name'] = vmName;
        return this;
    }
    public set vmName(vmName: string  | undefined) {
        this['vm_name'] = vmName;
    }
    public get vmName(): string | undefined {
        return this['vm_name'];
    }
    public withVmUuid(vmUuid: string): EventResourceResponseInfo {
        this['vm_uuid'] = vmUuid;
        return this;
    }
    public set vmUuid(vmUuid: string  | undefined) {
        this['vm_uuid'] = vmUuid;
    }
    public get vmUuid(): string | undefined {
        return this['vm_uuid'];
    }
    public withContainerId(containerId: string): EventResourceResponseInfo {
        this['container_id'] = containerId;
        return this;
    }
    public set containerId(containerId: string  | undefined) {
        this['container_id'] = containerId;
    }
    public get containerId(): string | undefined {
        return this['container_id'];
    }
    public withContainerStatus(containerStatus: string): EventResourceResponseInfo {
        this['container_status'] = containerStatus;
        return this;
    }
    public set containerStatus(containerStatus: string  | undefined) {
        this['container_status'] = containerStatus;
    }
    public get containerStatus(): string | undefined {
        return this['container_status'];
    }
    public withPodUid(podUid: string): EventResourceResponseInfo {
        this['pod_uid'] = podUid;
        return this;
    }
    public set podUid(podUid: string  | undefined) {
        this['pod_uid'] = podUid;
    }
    public get podUid(): string | undefined {
        return this['pod_uid'];
    }
    public withPodName(podName: string): EventResourceResponseInfo {
        this['pod_name'] = podName;
        return this;
    }
    public set podName(podName: string  | undefined) {
        this['pod_name'] = podName;
    }
    public get podName(): string | undefined {
        return this['pod_name'];
    }
    public withNamespace(namespace: string): EventResourceResponseInfo {
        this['namespace'] = namespace;
        return this;
    }
    public withClusterId(clusterId: string): EventResourceResponseInfo {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): EventResourceResponseInfo {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withImageId(imageId: string): EventResourceResponseInfo {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withImageName(imageName: string): EventResourceResponseInfo {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withHostAttr(hostAttr: string): EventResourceResponseInfo {
        this['host_attr'] = hostAttr;
        return this;
    }
    public set hostAttr(hostAttr: string  | undefined) {
        this['host_attr'] = hostAttr;
    }
    public get hostAttr(): string | undefined {
        return this['host_attr'];
    }
    public withService(service: string): EventResourceResponseInfo {
        this['service'] = service;
        return this;
    }
    public withMicroService(microService: string): EventResourceResponseInfo {
        this['micro_service'] = microService;
        return this;
    }
    public set microService(microService: string  | undefined) {
        this['micro_service'] = microService;
    }
    public get microService(): string | undefined {
        return this['micro_service'];
    }
    public withSysArch(sysArch: string): EventResourceResponseInfo {
        this['sys_arch'] = sysArch;
        return this;
    }
    public set sysArch(sysArch: string  | undefined) {
        this['sys_arch'] = sysArch;
    }
    public get sysArch(): string | undefined {
        return this['sys_arch'];
    }
    public withOsBit(osBit: string): EventResourceResponseInfo {
        this['os_bit'] = osBit;
        return this;
    }
    public set osBit(osBit: string  | undefined) {
        this['os_bit'] = osBit;
    }
    public get osBit(): string | undefined {
        return this['os_bit'];
    }
    public withOsType(osType: string): EventResourceResponseInfo {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withOsName(osName: string): EventResourceResponseInfo {
        this['os_name'] = osName;
        return this;
    }
    public set osName(osName: string  | undefined) {
        this['os_name'] = osName;
    }
    public get osName(): string | undefined {
        return this['os_name'];
    }
    public withOsVersion(osVersion: string): EventResourceResponseInfo {
        this['os_version'] = osVersion;
        return this;
    }
    public set osVersion(osVersion: string  | undefined) {
        this['os_version'] = osVersion;
    }
    public get osVersion(): string | undefined {
        return this['os_version'];
    }
}