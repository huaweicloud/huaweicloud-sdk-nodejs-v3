import { AssociateImagesInfo } from './AssociateImagesInfo';


export class RegistryImagesInfo {
    public id?: number;
    public namespace?: string;
    private 'image_name'?: string;
    private 'image_id'?: string;
    private 'image_digest'?: string;
    private 'image_version'?: string;
    private 'image_type'?: string;
    private 'registry_id'?: string;
    private 'registry_name'?: string;
    private 'registry_type'?: string;
    private 'latest_version'?: boolean;
    private 'scan_status'?: string;
    private 'scan_failed_desc'?: string;
    private 'scan_failed_code'?: string;
    private 'image_size'?: number;
    private 'latest_update_time'?: number;
    private 'latest_scan_time'?: number;
    private 'latest_sync_time'?: number;
    private 'vul_num'?: number;
    private 'unsafe_setting_num'?: number;
    private 'malicious_file_num'?: number;
    private 'domain_name'?: string;
    private 'shared_status'?: string;
    public scannable?: boolean;
    private 'is_multiple_arch'?: boolean;
    private 'instance_name'?: string;
    private 'instance_id'?: string;
    private 'instance_url'?: string;
    private 'severity_level'?: string;
    private 'association_images'?: Array<AssociateImagesInfo>;
    public constructor() { 
    }
    public withId(id: number): RegistryImagesInfo {
        this['id'] = id;
        return this;
    }
    public withNamespace(namespace: string): RegistryImagesInfo {
        this['namespace'] = namespace;
        return this;
    }
    public withImageName(imageName: string): RegistryImagesInfo {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageId(imageId: string): RegistryImagesInfo {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withImageDigest(imageDigest: string): RegistryImagesInfo {
        this['image_digest'] = imageDigest;
        return this;
    }
    public set imageDigest(imageDigest: string  | undefined) {
        this['image_digest'] = imageDigest;
    }
    public get imageDigest(): string | undefined {
        return this['image_digest'];
    }
    public withImageVersion(imageVersion: string): RegistryImagesInfo {
        this['image_version'] = imageVersion;
        return this;
    }
    public set imageVersion(imageVersion: string  | undefined) {
        this['image_version'] = imageVersion;
    }
    public get imageVersion(): string | undefined {
        return this['image_version'];
    }
    public withImageType(imageType: string): RegistryImagesInfo {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withRegistryId(registryId: string): RegistryImagesInfo {
        this['registry_id'] = registryId;
        return this;
    }
    public set registryId(registryId: string  | undefined) {
        this['registry_id'] = registryId;
    }
    public get registryId(): string | undefined {
        return this['registry_id'];
    }
    public withRegistryName(registryName: string): RegistryImagesInfo {
        this['registry_name'] = registryName;
        return this;
    }
    public set registryName(registryName: string  | undefined) {
        this['registry_name'] = registryName;
    }
    public get registryName(): string | undefined {
        return this['registry_name'];
    }
    public withRegistryType(registryType: string): RegistryImagesInfo {
        this['registry_type'] = registryType;
        return this;
    }
    public set registryType(registryType: string  | undefined) {
        this['registry_type'] = registryType;
    }
    public get registryType(): string | undefined {
        return this['registry_type'];
    }
    public withLatestVersion(latestVersion: boolean): RegistryImagesInfo {
        this['latest_version'] = latestVersion;
        return this;
    }
    public set latestVersion(latestVersion: boolean  | undefined) {
        this['latest_version'] = latestVersion;
    }
    public get latestVersion(): boolean | undefined {
        return this['latest_version'];
    }
    public withScanStatus(scanStatus: string): RegistryImagesInfo {
        this['scan_status'] = scanStatus;
        return this;
    }
    public set scanStatus(scanStatus: string  | undefined) {
        this['scan_status'] = scanStatus;
    }
    public get scanStatus(): string | undefined {
        return this['scan_status'];
    }
    public withScanFailedDesc(scanFailedDesc: string): RegistryImagesInfo {
        this['scan_failed_desc'] = scanFailedDesc;
        return this;
    }
    public set scanFailedDesc(scanFailedDesc: string  | undefined) {
        this['scan_failed_desc'] = scanFailedDesc;
    }
    public get scanFailedDesc(): string | undefined {
        return this['scan_failed_desc'];
    }
    public withScanFailedCode(scanFailedCode: string): RegistryImagesInfo {
        this['scan_failed_code'] = scanFailedCode;
        return this;
    }
    public set scanFailedCode(scanFailedCode: string  | undefined) {
        this['scan_failed_code'] = scanFailedCode;
    }
    public get scanFailedCode(): string | undefined {
        return this['scan_failed_code'];
    }
    public withImageSize(imageSize: number): RegistryImagesInfo {
        this['image_size'] = imageSize;
        return this;
    }
    public set imageSize(imageSize: number  | undefined) {
        this['image_size'] = imageSize;
    }
    public get imageSize(): number | undefined {
        return this['image_size'];
    }
    public withLatestUpdateTime(latestUpdateTime: number): RegistryImagesInfo {
        this['latest_update_time'] = latestUpdateTime;
        return this;
    }
    public set latestUpdateTime(latestUpdateTime: number  | undefined) {
        this['latest_update_time'] = latestUpdateTime;
    }
    public get latestUpdateTime(): number | undefined {
        return this['latest_update_time'];
    }
    public withLatestScanTime(latestScanTime: number): RegistryImagesInfo {
        this['latest_scan_time'] = latestScanTime;
        return this;
    }
    public set latestScanTime(latestScanTime: number  | undefined) {
        this['latest_scan_time'] = latestScanTime;
    }
    public get latestScanTime(): number | undefined {
        return this['latest_scan_time'];
    }
    public withLatestSyncTime(latestSyncTime: number): RegistryImagesInfo {
        this['latest_sync_time'] = latestSyncTime;
        return this;
    }
    public set latestSyncTime(latestSyncTime: number  | undefined) {
        this['latest_sync_time'] = latestSyncTime;
    }
    public get latestSyncTime(): number | undefined {
        return this['latest_sync_time'];
    }
    public withVulNum(vulNum: number): RegistryImagesInfo {
        this['vul_num'] = vulNum;
        return this;
    }
    public set vulNum(vulNum: number  | undefined) {
        this['vul_num'] = vulNum;
    }
    public get vulNum(): number | undefined {
        return this['vul_num'];
    }
    public withUnsafeSettingNum(unsafeSettingNum: number): RegistryImagesInfo {
        this['unsafe_setting_num'] = unsafeSettingNum;
        return this;
    }
    public set unsafeSettingNum(unsafeSettingNum: number  | undefined) {
        this['unsafe_setting_num'] = unsafeSettingNum;
    }
    public get unsafeSettingNum(): number | undefined {
        return this['unsafe_setting_num'];
    }
    public withMaliciousFileNum(maliciousFileNum: number): RegistryImagesInfo {
        this['malicious_file_num'] = maliciousFileNum;
        return this;
    }
    public set maliciousFileNum(maliciousFileNum: number  | undefined) {
        this['malicious_file_num'] = maliciousFileNum;
    }
    public get maliciousFileNum(): number | undefined {
        return this['malicious_file_num'];
    }
    public withDomainName(domainName: string): RegistryImagesInfo {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withSharedStatus(sharedStatus: string): RegistryImagesInfo {
        this['shared_status'] = sharedStatus;
        return this;
    }
    public set sharedStatus(sharedStatus: string  | undefined) {
        this['shared_status'] = sharedStatus;
    }
    public get sharedStatus(): string | undefined {
        return this['shared_status'];
    }
    public withScannable(scannable: boolean): RegistryImagesInfo {
        this['scannable'] = scannable;
        return this;
    }
    public withIsMultipleArch(isMultipleArch: boolean): RegistryImagesInfo {
        this['is_multiple_arch'] = isMultipleArch;
        return this;
    }
    public set isMultipleArch(isMultipleArch: boolean  | undefined) {
        this['is_multiple_arch'] = isMultipleArch;
    }
    public get isMultipleArch(): boolean | undefined {
        return this['is_multiple_arch'];
    }
    public withInstanceName(instanceName: string): RegistryImagesInfo {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withInstanceId(instanceId: string): RegistryImagesInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceUrl(instanceUrl: string): RegistryImagesInfo {
        this['instance_url'] = instanceUrl;
        return this;
    }
    public set instanceUrl(instanceUrl: string  | undefined) {
        this['instance_url'] = instanceUrl;
    }
    public get instanceUrl(): string | undefined {
        return this['instance_url'];
    }
    public withSeverityLevel(severityLevel: string): RegistryImagesInfo {
        this['severity_level'] = severityLevel;
        return this;
    }
    public set severityLevel(severityLevel: string  | undefined) {
        this['severity_level'] = severityLevel;
    }
    public get severityLevel(): string | undefined {
        return this['severity_level'];
    }
    public withAssociationImages(associationImages: Array<AssociateImagesInfo>): RegistryImagesInfo {
        this['association_images'] = associationImages;
        return this;
    }
    public set associationImages(associationImages: Array<AssociateImagesInfo>  | undefined) {
        this['association_images'] = associationImages;
    }
    public get associationImages(): Array<AssociateImagesInfo> | undefined {
        return this['association_images'];
    }
}