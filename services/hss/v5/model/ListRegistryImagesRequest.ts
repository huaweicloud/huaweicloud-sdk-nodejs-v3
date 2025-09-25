

export class ListRegistryImagesRequest {
    private 'enterprise_project_id'?: string;
    public namespace?: string;
    private 'image_name'?: string;
    private 'image_version'?: string;
    private 'registry_name'?: string;
    public offset?: number;
    private 'image_type'?: string;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    public limit?: number;
    private 'latest_version'?: boolean;
    private 'image_size'?: number;
    private 'scan_status'?: string;
    private 'start_latest_update_time'?: number;
    private 'end_latest_update_time'?: number;
    private 'start_latest_scan_time'?: number;
    private 'end_latest_scan_time'?: number;
    private 'start_latest_sync_time'?: number;
    private 'end_latest_sync_time'?: number;
    private 'has_malicious_file'?: boolean;
    private 'has_unsafe_setting'?: boolean;
    private 'has_vul'?: boolean;
    public risky?: boolean;
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'is_multarch'?: boolean;
    private 'severity_level'?: string;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListRegistryImagesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withNamespace(namespace: string): ListRegistryImagesRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withImageName(imageName: string): ListRegistryImagesRequest {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageVersion(imageVersion: string): ListRegistryImagesRequest {
        this['image_version'] = imageVersion;
        return this;
    }
    public set imageVersion(imageVersion: string  | undefined) {
        this['image_version'] = imageVersion;
    }
    public get imageVersion(): string | undefined {
        return this['image_version'];
    }
    public withRegistryName(registryName: string): ListRegistryImagesRequest {
        this['registry_name'] = registryName;
        return this;
    }
    public set registryName(registryName: string  | undefined) {
        this['registry_name'] = registryName;
    }
    public get registryName(): string | undefined {
        return this['registry_name'];
    }
    public withOffset(offset: number): ListRegistryImagesRequest {
        this['offset'] = offset;
        return this;
    }
    public withImageType(imageType: string): ListRegistryImagesRequest {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withSortKey(sortKey: string): ListRegistryImagesRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListRegistryImagesRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withLimit(limit: number): ListRegistryImagesRequest {
        this['limit'] = limit;
        return this;
    }
    public withLatestVersion(latestVersion: boolean): ListRegistryImagesRequest {
        this['latest_version'] = latestVersion;
        return this;
    }
    public set latestVersion(latestVersion: boolean  | undefined) {
        this['latest_version'] = latestVersion;
    }
    public get latestVersion(): boolean | undefined {
        return this['latest_version'];
    }
    public withImageSize(imageSize: number): ListRegistryImagesRequest {
        this['image_size'] = imageSize;
        return this;
    }
    public set imageSize(imageSize: number  | undefined) {
        this['image_size'] = imageSize;
    }
    public get imageSize(): number | undefined {
        return this['image_size'];
    }
    public withScanStatus(scanStatus: string): ListRegistryImagesRequest {
        this['scan_status'] = scanStatus;
        return this;
    }
    public set scanStatus(scanStatus: string  | undefined) {
        this['scan_status'] = scanStatus;
    }
    public get scanStatus(): string | undefined {
        return this['scan_status'];
    }
    public withStartLatestUpdateTime(startLatestUpdateTime: number): ListRegistryImagesRequest {
        this['start_latest_update_time'] = startLatestUpdateTime;
        return this;
    }
    public set startLatestUpdateTime(startLatestUpdateTime: number  | undefined) {
        this['start_latest_update_time'] = startLatestUpdateTime;
    }
    public get startLatestUpdateTime(): number | undefined {
        return this['start_latest_update_time'];
    }
    public withEndLatestUpdateTime(endLatestUpdateTime: number): ListRegistryImagesRequest {
        this['end_latest_update_time'] = endLatestUpdateTime;
        return this;
    }
    public set endLatestUpdateTime(endLatestUpdateTime: number  | undefined) {
        this['end_latest_update_time'] = endLatestUpdateTime;
    }
    public get endLatestUpdateTime(): number | undefined {
        return this['end_latest_update_time'];
    }
    public withStartLatestScanTime(startLatestScanTime: number): ListRegistryImagesRequest {
        this['start_latest_scan_time'] = startLatestScanTime;
        return this;
    }
    public set startLatestScanTime(startLatestScanTime: number  | undefined) {
        this['start_latest_scan_time'] = startLatestScanTime;
    }
    public get startLatestScanTime(): number | undefined {
        return this['start_latest_scan_time'];
    }
    public withEndLatestScanTime(endLatestScanTime: number): ListRegistryImagesRequest {
        this['end_latest_scan_time'] = endLatestScanTime;
        return this;
    }
    public set endLatestScanTime(endLatestScanTime: number  | undefined) {
        this['end_latest_scan_time'] = endLatestScanTime;
    }
    public get endLatestScanTime(): number | undefined {
        return this['end_latest_scan_time'];
    }
    public withStartLatestSyncTime(startLatestSyncTime: number): ListRegistryImagesRequest {
        this['start_latest_sync_time'] = startLatestSyncTime;
        return this;
    }
    public set startLatestSyncTime(startLatestSyncTime: number  | undefined) {
        this['start_latest_sync_time'] = startLatestSyncTime;
    }
    public get startLatestSyncTime(): number | undefined {
        return this['start_latest_sync_time'];
    }
    public withEndLatestSyncTime(endLatestSyncTime: number): ListRegistryImagesRequest {
        this['end_latest_sync_time'] = endLatestSyncTime;
        return this;
    }
    public set endLatestSyncTime(endLatestSyncTime: number  | undefined) {
        this['end_latest_sync_time'] = endLatestSyncTime;
    }
    public get endLatestSyncTime(): number | undefined {
        return this['end_latest_sync_time'];
    }
    public withHasMaliciousFile(hasMaliciousFile: boolean): ListRegistryImagesRequest {
        this['has_malicious_file'] = hasMaliciousFile;
        return this;
    }
    public set hasMaliciousFile(hasMaliciousFile: boolean  | undefined) {
        this['has_malicious_file'] = hasMaliciousFile;
    }
    public get hasMaliciousFile(): boolean | undefined {
        return this['has_malicious_file'];
    }
    public withHasUnsafeSetting(hasUnsafeSetting: boolean): ListRegistryImagesRequest {
        this['has_unsafe_setting'] = hasUnsafeSetting;
        return this;
    }
    public set hasUnsafeSetting(hasUnsafeSetting: boolean  | undefined) {
        this['has_unsafe_setting'] = hasUnsafeSetting;
    }
    public get hasUnsafeSetting(): boolean | undefined {
        return this['has_unsafe_setting'];
    }
    public withHasVul(hasVul: boolean): ListRegistryImagesRequest {
        this['has_vul'] = hasVul;
        return this;
    }
    public set hasVul(hasVul: boolean  | undefined) {
        this['has_vul'] = hasVul;
    }
    public get hasVul(): boolean | undefined {
        return this['has_vul'];
    }
    public withRisky(risky: boolean): ListRegistryImagesRequest {
        this['risky'] = risky;
        return this;
    }
    public withInstanceId(instanceId: string): ListRegistryImagesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): ListRegistryImagesRequest {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withIsMultarch(isMultarch: boolean): ListRegistryImagesRequest {
        this['is_multarch'] = isMultarch;
        return this;
    }
    public set isMultarch(isMultarch: boolean  | undefined) {
        this['is_multarch'] = isMultarch;
    }
    public get isMultarch(): boolean | undefined {
        return this['is_multarch'];
    }
    public withSeverityLevel(severityLevel: string): ListRegistryImagesRequest {
        this['severity_level'] = severityLevel;
        return this;
    }
    public set severityLevel(severityLevel: string  | undefined) {
        this['severity_level'] = severityLevel;
    }
    public get severityLevel(): string | undefined {
        return this['severity_level'];
    }
}