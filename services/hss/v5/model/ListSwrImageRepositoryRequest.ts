

export class ListSwrImageRepositoryRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public namespace?: string;
    private 'image_name'?: string;
    private 'image_version'?: string;
    private 'latest_version'?: boolean;
    public offset?: number;
    public limit?: number;
    private 'image_type'?: string;
    private 'scan_status'?: string;
    private 'instance_name'?: string;
    private 'image_size'?: number;
    private 'start_latest_update_time'?: number;
    private 'end_latest_update_time'?: number;
    private 'start_latest_scan_time'?: number;
    private 'end_latest_scan_time'?: number;
    private 'has_malicious_file'?: boolean;
    private 'has_unsafe_setting'?: boolean;
    private 'has_vul'?: boolean;
    private 'instance_id'?: string;
    public constructor(imageType?: string) { 
        this['image_type'] = imageType;
    }
    public withRegion(region: string): ListSwrImageRepositoryRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListSwrImageRepositoryRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withNamespace(namespace: string): ListSwrImageRepositoryRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withImageName(imageName: string): ListSwrImageRepositoryRequest {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageVersion(imageVersion: string): ListSwrImageRepositoryRequest {
        this['image_version'] = imageVersion;
        return this;
    }
    public set imageVersion(imageVersion: string  | undefined) {
        this['image_version'] = imageVersion;
    }
    public get imageVersion(): string | undefined {
        return this['image_version'];
    }
    public withLatestVersion(latestVersion: boolean): ListSwrImageRepositoryRequest {
        this['latest_version'] = latestVersion;
        return this;
    }
    public set latestVersion(latestVersion: boolean  | undefined) {
        this['latest_version'] = latestVersion;
    }
    public get latestVersion(): boolean | undefined {
        return this['latest_version'];
    }
    public withOffset(offset: number): ListSwrImageRepositoryRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSwrImageRepositoryRequest {
        this['limit'] = limit;
        return this;
    }
    public withImageType(imageType: string): ListSwrImageRepositoryRequest {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withScanStatus(scanStatus: string): ListSwrImageRepositoryRequest {
        this['scan_status'] = scanStatus;
        return this;
    }
    public set scanStatus(scanStatus: string  | undefined) {
        this['scan_status'] = scanStatus;
    }
    public get scanStatus(): string | undefined {
        return this['scan_status'];
    }
    public withInstanceName(instanceName: string): ListSwrImageRepositoryRequest {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withImageSize(imageSize: number): ListSwrImageRepositoryRequest {
        this['image_size'] = imageSize;
        return this;
    }
    public set imageSize(imageSize: number  | undefined) {
        this['image_size'] = imageSize;
    }
    public get imageSize(): number | undefined {
        return this['image_size'];
    }
    public withStartLatestUpdateTime(startLatestUpdateTime: number): ListSwrImageRepositoryRequest {
        this['start_latest_update_time'] = startLatestUpdateTime;
        return this;
    }
    public set startLatestUpdateTime(startLatestUpdateTime: number  | undefined) {
        this['start_latest_update_time'] = startLatestUpdateTime;
    }
    public get startLatestUpdateTime(): number | undefined {
        return this['start_latest_update_time'];
    }
    public withEndLatestUpdateTime(endLatestUpdateTime: number): ListSwrImageRepositoryRequest {
        this['end_latest_update_time'] = endLatestUpdateTime;
        return this;
    }
    public set endLatestUpdateTime(endLatestUpdateTime: number  | undefined) {
        this['end_latest_update_time'] = endLatestUpdateTime;
    }
    public get endLatestUpdateTime(): number | undefined {
        return this['end_latest_update_time'];
    }
    public withStartLatestScanTime(startLatestScanTime: number): ListSwrImageRepositoryRequest {
        this['start_latest_scan_time'] = startLatestScanTime;
        return this;
    }
    public set startLatestScanTime(startLatestScanTime: number  | undefined) {
        this['start_latest_scan_time'] = startLatestScanTime;
    }
    public get startLatestScanTime(): number | undefined {
        return this['start_latest_scan_time'];
    }
    public withEndLatestScanTime(endLatestScanTime: number): ListSwrImageRepositoryRequest {
        this['end_latest_scan_time'] = endLatestScanTime;
        return this;
    }
    public set endLatestScanTime(endLatestScanTime: number  | undefined) {
        this['end_latest_scan_time'] = endLatestScanTime;
    }
    public get endLatestScanTime(): number | undefined {
        return this['end_latest_scan_time'];
    }
    public withHasMaliciousFile(hasMaliciousFile: boolean): ListSwrImageRepositoryRequest {
        this['has_malicious_file'] = hasMaliciousFile;
        return this;
    }
    public set hasMaliciousFile(hasMaliciousFile: boolean  | undefined) {
        this['has_malicious_file'] = hasMaliciousFile;
    }
    public get hasMaliciousFile(): boolean | undefined {
        return this['has_malicious_file'];
    }
    public withHasUnsafeSetting(hasUnsafeSetting: boolean): ListSwrImageRepositoryRequest {
        this['has_unsafe_setting'] = hasUnsafeSetting;
        return this;
    }
    public set hasUnsafeSetting(hasUnsafeSetting: boolean  | undefined) {
        this['has_unsafe_setting'] = hasUnsafeSetting;
    }
    public get hasUnsafeSetting(): boolean | undefined {
        return this['has_unsafe_setting'];
    }
    public withHasVul(hasVul: boolean): ListSwrImageRepositoryRequest {
        this['has_vul'] = hasVul;
        return this;
    }
    public set hasVul(hasVul: boolean  | undefined) {
        this['has_vul'] = hasVul;
    }
    public get hasVul(): boolean | undefined {
        return this['has_vul'];
    }
    public withInstanceId(instanceId: string): ListSwrImageRepositoryRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
}