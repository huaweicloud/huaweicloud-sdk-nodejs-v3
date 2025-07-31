

export class ProcessEventResourceResponseInfo {
    private 'domain_id'?: string;
    private 'project_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'region_name'?: string;
    private 'vpc_id'?: string;
    private 'cloud_id'?: string;
    private 'vm_name'?: string;
    private 'vm_uuid'?: string;
    private 'container_id'?: string;
    private 'image_id'?: string;
    private 'image_name'?: string;
    private 'host_attr'?: string;
    public service?: string;
    private 'micro_service'?: string;
    private 'sys_arch'?: string;
    private 'os_bit'?: string;
    private 'os_type'?: string;
    private 'os_name'?: string;
    private 'host_name'?: string;
    private 'host_ip'?: string;
    private 'public_ip'?: string;
    private 'host_id'?: string;
    private 'pod_uid'?: string;
    private 'pod_name'?: string;
    public namespace?: string;
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    private 'asset_value'?: string;
    private 'container_status'?: string;
    private 'os_version'?: string;
    private 'agent_version'?: string;
    public constructor() { 
    }
    public withDomainId(domainId: string): ProcessEventResourceResponseInfo {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withProjectId(projectId: string): ProcessEventResourceResponseInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ProcessEventResourceResponseInfo {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withRegionName(regionName: string): ProcessEventResourceResponseInfo {
        this['region_name'] = regionName;
        return this;
    }
    public set regionName(regionName: string  | undefined) {
        this['region_name'] = regionName;
    }
    public get regionName(): string | undefined {
        return this['region_name'];
    }
    public withVpcId(vpcId: string): ProcessEventResourceResponseInfo {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withCloudId(cloudId: string): ProcessEventResourceResponseInfo {
        this['cloud_id'] = cloudId;
        return this;
    }
    public set cloudId(cloudId: string  | undefined) {
        this['cloud_id'] = cloudId;
    }
    public get cloudId(): string | undefined {
        return this['cloud_id'];
    }
    public withVmName(vmName: string): ProcessEventResourceResponseInfo {
        this['vm_name'] = vmName;
        return this;
    }
    public set vmName(vmName: string  | undefined) {
        this['vm_name'] = vmName;
    }
    public get vmName(): string | undefined {
        return this['vm_name'];
    }
    public withVmUuid(vmUuid: string): ProcessEventResourceResponseInfo {
        this['vm_uuid'] = vmUuid;
        return this;
    }
    public set vmUuid(vmUuid: string  | undefined) {
        this['vm_uuid'] = vmUuid;
    }
    public get vmUuid(): string | undefined {
        return this['vm_uuid'];
    }
    public withContainerId(containerId: string): ProcessEventResourceResponseInfo {
        this['container_id'] = containerId;
        return this;
    }
    public set containerId(containerId: string  | undefined) {
        this['container_id'] = containerId;
    }
    public get containerId(): string | undefined {
        return this['container_id'];
    }
    public withImageId(imageId: string): ProcessEventResourceResponseInfo {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withImageName(imageName: string): ProcessEventResourceResponseInfo {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withHostAttr(hostAttr: string): ProcessEventResourceResponseInfo {
        this['host_attr'] = hostAttr;
        return this;
    }
    public set hostAttr(hostAttr: string  | undefined) {
        this['host_attr'] = hostAttr;
    }
    public get hostAttr(): string | undefined {
        return this['host_attr'];
    }
    public withService(service: string): ProcessEventResourceResponseInfo {
        this['service'] = service;
        return this;
    }
    public withMicroService(microService: string): ProcessEventResourceResponseInfo {
        this['micro_service'] = microService;
        return this;
    }
    public set microService(microService: string  | undefined) {
        this['micro_service'] = microService;
    }
    public get microService(): string | undefined {
        return this['micro_service'];
    }
    public withSysArch(sysArch: string): ProcessEventResourceResponseInfo {
        this['sys_arch'] = sysArch;
        return this;
    }
    public set sysArch(sysArch: string  | undefined) {
        this['sys_arch'] = sysArch;
    }
    public get sysArch(): string | undefined {
        return this['sys_arch'];
    }
    public withOsBit(osBit: string): ProcessEventResourceResponseInfo {
        this['os_bit'] = osBit;
        return this;
    }
    public set osBit(osBit: string  | undefined) {
        this['os_bit'] = osBit;
    }
    public get osBit(): string | undefined {
        return this['os_bit'];
    }
    public withOsType(osType: string): ProcessEventResourceResponseInfo {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withOsName(osName: string): ProcessEventResourceResponseInfo {
        this['os_name'] = osName;
        return this;
    }
    public set osName(osName: string  | undefined) {
        this['os_name'] = osName;
    }
    public get osName(): string | undefined {
        return this['os_name'];
    }
    public withHostName(hostName: string): ProcessEventResourceResponseInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostIp(hostIp: string): ProcessEventResourceResponseInfo {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withPublicIp(publicIp: string): ProcessEventResourceResponseInfo {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withHostId(hostId: string): ProcessEventResourceResponseInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withPodUid(podUid: string): ProcessEventResourceResponseInfo {
        this['pod_uid'] = podUid;
        return this;
    }
    public set podUid(podUid: string  | undefined) {
        this['pod_uid'] = podUid;
    }
    public get podUid(): string | undefined {
        return this['pod_uid'];
    }
    public withPodName(podName: string): ProcessEventResourceResponseInfo {
        this['pod_name'] = podName;
        return this;
    }
    public set podName(podName: string  | undefined) {
        this['pod_name'] = podName;
    }
    public get podName(): string | undefined {
        return this['pod_name'];
    }
    public withNamespace(namespace: string): ProcessEventResourceResponseInfo {
        this['namespace'] = namespace;
        return this;
    }
    public withClusterId(clusterId: string): ProcessEventResourceResponseInfo {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): ProcessEventResourceResponseInfo {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withAssetValue(assetValue: string): ProcessEventResourceResponseInfo {
        this['asset_value'] = assetValue;
        return this;
    }
    public set assetValue(assetValue: string  | undefined) {
        this['asset_value'] = assetValue;
    }
    public get assetValue(): string | undefined {
        return this['asset_value'];
    }
    public withContainerStatus(containerStatus: string): ProcessEventResourceResponseInfo {
        this['container_status'] = containerStatus;
        return this;
    }
    public set containerStatus(containerStatus: string  | undefined) {
        this['container_status'] = containerStatus;
    }
    public get containerStatus(): string | undefined {
        return this['container_status'];
    }
    public withOsVersion(osVersion: string): ProcessEventResourceResponseInfo {
        this['os_version'] = osVersion;
        return this;
    }
    public set osVersion(osVersion: string  | undefined) {
        this['os_version'] = osVersion;
    }
    public get osVersion(): string | undefined {
        return this['os_version'];
    }
    public withAgentVersion(agentVersion: string): ProcessEventResourceResponseInfo {
        this['agent_version'] = agentVersion;
        return this;
    }
    public set agentVersion(agentVersion: string  | undefined) {
        this['agent_version'] = agentVersion;
    }
    public get agentVersion(): string | undefined {
        return this['agent_version'];
    }
}