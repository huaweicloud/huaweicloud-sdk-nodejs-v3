

export class VulAffectImagesResponseInfo {
    private 'image_id'?: string;
    private 'image_name'?: string;
    private 'vul_id'?: string;
    private 'repair_necessity'?: string;
    private 'container_num'?: number;
    private 'image_digest'?: string;
    private 'image_version'?: string;
    private 'agent_id'?: string;
    public status?: string;
    private 'first_scan_time'?: string;
    private 'latest_scan_time'?: string;
    private 'image_type'?: string;
    private 'image_size'?: string;
    public organization?: string;
    private 'registry_type'?: string;
    private 'registry_name'?: string;
    private 'is_multi_arch'?: string;
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    public constructor() { 
    }
    public withImageId(imageId: string): VulAffectImagesResponseInfo {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withImageName(imageName: string): VulAffectImagesResponseInfo {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withVulId(vulId: string): VulAffectImagesResponseInfo {
        this['vul_id'] = vulId;
        return this;
    }
    public set vulId(vulId: string  | undefined) {
        this['vul_id'] = vulId;
    }
    public get vulId(): string | undefined {
        return this['vul_id'];
    }
    public withRepairNecessity(repairNecessity: string): VulAffectImagesResponseInfo {
        this['repair_necessity'] = repairNecessity;
        return this;
    }
    public set repairNecessity(repairNecessity: string  | undefined) {
        this['repair_necessity'] = repairNecessity;
    }
    public get repairNecessity(): string | undefined {
        return this['repair_necessity'];
    }
    public withContainerNum(containerNum: number): VulAffectImagesResponseInfo {
        this['container_num'] = containerNum;
        return this;
    }
    public set containerNum(containerNum: number  | undefined) {
        this['container_num'] = containerNum;
    }
    public get containerNum(): number | undefined {
        return this['container_num'];
    }
    public withImageDigest(imageDigest: string): VulAffectImagesResponseInfo {
        this['image_digest'] = imageDigest;
        return this;
    }
    public set imageDigest(imageDigest: string  | undefined) {
        this['image_digest'] = imageDigest;
    }
    public get imageDigest(): string | undefined {
        return this['image_digest'];
    }
    public withImageVersion(imageVersion: string): VulAffectImagesResponseInfo {
        this['image_version'] = imageVersion;
        return this;
    }
    public set imageVersion(imageVersion: string  | undefined) {
        this['image_version'] = imageVersion;
    }
    public get imageVersion(): string | undefined {
        return this['image_version'];
    }
    public withAgentId(agentId: string): VulAffectImagesResponseInfo {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withStatus(status: string): VulAffectImagesResponseInfo {
        this['status'] = status;
        return this;
    }
    public withFirstScanTime(firstScanTime: string): VulAffectImagesResponseInfo {
        this['first_scan_time'] = firstScanTime;
        return this;
    }
    public set firstScanTime(firstScanTime: string  | undefined) {
        this['first_scan_time'] = firstScanTime;
    }
    public get firstScanTime(): string | undefined {
        return this['first_scan_time'];
    }
    public withLatestScanTime(latestScanTime: string): VulAffectImagesResponseInfo {
        this['latest_scan_time'] = latestScanTime;
        return this;
    }
    public set latestScanTime(latestScanTime: string  | undefined) {
        this['latest_scan_time'] = latestScanTime;
    }
    public get latestScanTime(): string | undefined {
        return this['latest_scan_time'];
    }
    public withImageType(imageType: string): VulAffectImagesResponseInfo {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withImageSize(imageSize: string): VulAffectImagesResponseInfo {
        this['image_size'] = imageSize;
        return this;
    }
    public set imageSize(imageSize: string  | undefined) {
        this['image_size'] = imageSize;
    }
    public get imageSize(): string | undefined {
        return this['image_size'];
    }
    public withOrganization(organization: string): VulAffectImagesResponseInfo {
        this['organization'] = organization;
        return this;
    }
    public withRegistryType(registryType: string): VulAffectImagesResponseInfo {
        this['registry_type'] = registryType;
        return this;
    }
    public set registryType(registryType: string  | undefined) {
        this['registry_type'] = registryType;
    }
    public get registryType(): string | undefined {
        return this['registry_type'];
    }
    public withRegistryName(registryName: string): VulAffectImagesResponseInfo {
        this['registry_name'] = registryName;
        return this;
    }
    public set registryName(registryName: string  | undefined) {
        this['registry_name'] = registryName;
    }
    public get registryName(): string | undefined {
        return this['registry_name'];
    }
    public withIsMultiArch(isMultiArch: string): VulAffectImagesResponseInfo {
        this['is_multi_arch'] = isMultiArch;
        return this;
    }
    public set isMultiArch(isMultiArch: string  | undefined) {
        this['is_multi_arch'] = isMultiArch;
    }
    public get isMultiArch(): string | undefined {
        return this['is_multi_arch'];
    }
    public withClusterId(clusterId: string): VulAffectImagesResponseInfo {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): VulAffectImagesResponseInfo {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
}