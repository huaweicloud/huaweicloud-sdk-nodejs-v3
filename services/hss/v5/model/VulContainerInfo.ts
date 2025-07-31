

export class VulContainerInfo {
    private 'container_id'?: string;
    private 'container_name'?: string;
    private 'severity_level'?: string;
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    private 'image_id'?: string;
    private 'image_name'?: string;
    private 'image_version'?: string;
    private 'image_type'?: string;
    private 'image_org'?: string;
    private 'registry_type'?: string;
    private 'registry_name'?: string;
    private 'host_name'?: string;
    public status?: string;
    private 'host_ip'?: string;
    private 'private_ip'?: string;
    public remark?: string;
    private 'first_scan_time'?: number;
    private 'scan_time'?: number;
    public constructor() { 
    }
    public withContainerId(containerId: string): VulContainerInfo {
        this['container_id'] = containerId;
        return this;
    }
    public set containerId(containerId: string  | undefined) {
        this['container_id'] = containerId;
    }
    public get containerId(): string | undefined {
        return this['container_id'];
    }
    public withContainerName(containerName: string): VulContainerInfo {
        this['container_name'] = containerName;
        return this;
    }
    public set containerName(containerName: string  | undefined) {
        this['container_name'] = containerName;
    }
    public get containerName(): string | undefined {
        return this['container_name'];
    }
    public withSeverityLevel(severityLevel: string): VulContainerInfo {
        this['severity_level'] = severityLevel;
        return this;
    }
    public set severityLevel(severityLevel: string  | undefined) {
        this['severity_level'] = severityLevel;
    }
    public get severityLevel(): string | undefined {
        return this['severity_level'];
    }
    public withClusterId(clusterId: string): VulContainerInfo {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): VulContainerInfo {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withImageId(imageId: string): VulContainerInfo {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withImageName(imageName: string): VulContainerInfo {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageVersion(imageVersion: string): VulContainerInfo {
        this['image_version'] = imageVersion;
        return this;
    }
    public set imageVersion(imageVersion: string  | undefined) {
        this['image_version'] = imageVersion;
    }
    public get imageVersion(): string | undefined {
        return this['image_version'];
    }
    public withImageType(imageType: string): VulContainerInfo {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withImageOrg(imageOrg: string): VulContainerInfo {
        this['image_org'] = imageOrg;
        return this;
    }
    public set imageOrg(imageOrg: string  | undefined) {
        this['image_org'] = imageOrg;
    }
    public get imageOrg(): string | undefined {
        return this['image_org'];
    }
    public withRegistryType(registryType: string): VulContainerInfo {
        this['registry_type'] = registryType;
        return this;
    }
    public set registryType(registryType: string  | undefined) {
        this['registry_type'] = registryType;
    }
    public get registryType(): string | undefined {
        return this['registry_type'];
    }
    public withRegistryName(registryName: string): VulContainerInfo {
        this['registry_name'] = registryName;
        return this;
    }
    public set registryName(registryName: string  | undefined) {
        this['registry_name'] = registryName;
    }
    public get registryName(): string | undefined {
        return this['registry_name'];
    }
    public withHostName(hostName: string): VulContainerInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withStatus(status: string): VulContainerInfo {
        this['status'] = status;
        return this;
    }
    public withHostIp(hostIp: string): VulContainerInfo {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withPrivateIp(privateIp: string): VulContainerInfo {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withRemark(remark: string): VulContainerInfo {
        this['remark'] = remark;
        return this;
    }
    public withFirstScanTime(firstScanTime: number): VulContainerInfo {
        this['first_scan_time'] = firstScanTime;
        return this;
    }
    public set firstScanTime(firstScanTime: number  | undefined) {
        this['first_scan_time'] = firstScanTime;
    }
    public get firstScanTime(): number | undefined {
        return this['first_scan_time'];
    }
    public withScanTime(scanTime: number): VulContainerInfo {
        this['scan_time'] = scanTime;
        return this;
    }
    public set scanTime(scanTime: number  | undefined) {
        this['scan_time'] = scanTime;
    }
    public get scanTime(): number | undefined {
        return this['scan_time'];
    }
}