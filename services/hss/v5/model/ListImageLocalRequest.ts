

export class ListImageLocalRequest {
    private 'enterprise_project_id'?: string;
    private 'image_name'?: string;
    private 'image_version'?: string;
    public offset?: number;
    public limit?: number;
    private 'scan_status'?: string;
    private 'local_image_type'?: string;
    private 'image_size'?: number;
    private 'start_latest_update_time'?: number;
    private 'end_latest_update_time'?: number;
    private 'start_latest_scan_time'?: number;
    private 'end_latest_scan_time'?: number;
    private 'has_vul'?: boolean;
    private 'host_name'?: string;
    private 'host_id'?: string;
    private 'host_ip'?: string;
    private 'container_id'?: string;
    private 'container_name'?: string;
    private 'pod_id'?: string;
    private 'pod_name'?: string;
    private 'app_name'?: string;
    private 'has_container'?: boolean;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListImageLocalRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withImageName(imageName: string): ListImageLocalRequest {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageVersion(imageVersion: string): ListImageLocalRequest {
        this['image_version'] = imageVersion;
        return this;
    }
    public set imageVersion(imageVersion: string  | undefined) {
        this['image_version'] = imageVersion;
    }
    public get imageVersion(): string | undefined {
        return this['image_version'];
    }
    public withOffset(offset: number): ListImageLocalRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListImageLocalRequest {
        this['limit'] = limit;
        return this;
    }
    public withScanStatus(scanStatus: string): ListImageLocalRequest {
        this['scan_status'] = scanStatus;
        return this;
    }
    public set scanStatus(scanStatus: string  | undefined) {
        this['scan_status'] = scanStatus;
    }
    public get scanStatus(): string | undefined {
        return this['scan_status'];
    }
    public withLocalImageType(localImageType: string): ListImageLocalRequest {
        this['local_image_type'] = localImageType;
        return this;
    }
    public set localImageType(localImageType: string  | undefined) {
        this['local_image_type'] = localImageType;
    }
    public get localImageType(): string | undefined {
        return this['local_image_type'];
    }
    public withImageSize(imageSize: number): ListImageLocalRequest {
        this['image_size'] = imageSize;
        return this;
    }
    public set imageSize(imageSize: number  | undefined) {
        this['image_size'] = imageSize;
    }
    public get imageSize(): number | undefined {
        return this['image_size'];
    }
    public withStartLatestUpdateTime(startLatestUpdateTime: number): ListImageLocalRequest {
        this['start_latest_update_time'] = startLatestUpdateTime;
        return this;
    }
    public set startLatestUpdateTime(startLatestUpdateTime: number  | undefined) {
        this['start_latest_update_time'] = startLatestUpdateTime;
    }
    public get startLatestUpdateTime(): number | undefined {
        return this['start_latest_update_time'];
    }
    public withEndLatestUpdateTime(endLatestUpdateTime: number): ListImageLocalRequest {
        this['end_latest_update_time'] = endLatestUpdateTime;
        return this;
    }
    public set endLatestUpdateTime(endLatestUpdateTime: number  | undefined) {
        this['end_latest_update_time'] = endLatestUpdateTime;
    }
    public get endLatestUpdateTime(): number | undefined {
        return this['end_latest_update_time'];
    }
    public withStartLatestScanTime(startLatestScanTime: number): ListImageLocalRequest {
        this['start_latest_scan_time'] = startLatestScanTime;
        return this;
    }
    public set startLatestScanTime(startLatestScanTime: number  | undefined) {
        this['start_latest_scan_time'] = startLatestScanTime;
    }
    public get startLatestScanTime(): number | undefined {
        return this['start_latest_scan_time'];
    }
    public withEndLatestScanTime(endLatestScanTime: number): ListImageLocalRequest {
        this['end_latest_scan_time'] = endLatestScanTime;
        return this;
    }
    public set endLatestScanTime(endLatestScanTime: number  | undefined) {
        this['end_latest_scan_time'] = endLatestScanTime;
    }
    public get endLatestScanTime(): number | undefined {
        return this['end_latest_scan_time'];
    }
    public withHasVul(hasVul: boolean): ListImageLocalRequest {
        this['has_vul'] = hasVul;
        return this;
    }
    public set hasVul(hasVul: boolean  | undefined) {
        this['has_vul'] = hasVul;
    }
    public get hasVul(): boolean | undefined {
        return this['has_vul'];
    }
    public withHostName(hostName: string): ListImageLocalRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostId(hostId: string): ListImageLocalRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostIp(hostIp: string): ListImageLocalRequest {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withContainerId(containerId: string): ListImageLocalRequest {
        this['container_id'] = containerId;
        return this;
    }
    public set containerId(containerId: string  | undefined) {
        this['container_id'] = containerId;
    }
    public get containerId(): string | undefined {
        return this['container_id'];
    }
    public withContainerName(containerName: string): ListImageLocalRequest {
        this['container_name'] = containerName;
        return this;
    }
    public set containerName(containerName: string  | undefined) {
        this['container_name'] = containerName;
    }
    public get containerName(): string | undefined {
        return this['container_name'];
    }
    public withPodId(podId: string): ListImageLocalRequest {
        this['pod_id'] = podId;
        return this;
    }
    public set podId(podId: string  | undefined) {
        this['pod_id'] = podId;
    }
    public get podId(): string | undefined {
        return this['pod_id'];
    }
    public withPodName(podName: string): ListImageLocalRequest {
        this['pod_name'] = podName;
        return this;
    }
    public set podName(podName: string  | undefined) {
        this['pod_name'] = podName;
    }
    public get podName(): string | undefined {
        return this['pod_name'];
    }
    public withAppName(appName: string): ListImageLocalRequest {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withHasContainer(hasContainer: boolean): ListImageLocalRequest {
        this['has_container'] = hasContainer;
        return this;
    }
    public set hasContainer(hasContainer: boolean  | undefined) {
        this['has_container'] = hasContainer;
    }
    public get hasContainer(): boolean | undefined {
        return this['has_container'];
    }
}