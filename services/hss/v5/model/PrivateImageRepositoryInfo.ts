import { AssociateImages } from './AssociateImages';


export class PrivateImageRepositoryInfo {
    public id?: number;
    public namespace?: string;
    private 'image_name'?: string;
    private 'image_id'?: string;
    private 'image_digest'?: string;
    private 'image_version'?: string;
    private 'image_type'?: string;
    private 'latest_version'?: boolean;
    private 'scan_status'?: string;
    private 'image_size'?: number;
    private 'latest_update_time'?: number;
    private 'latest_scan_time'?: number;
    private 'vul_num'?: number;
    private 'unsafe_setting_num'?: number;
    private 'malicious_file_num'?: number;
    private 'domain_name'?: string;
    private 'shared_status'?: string;
    public scanable?: boolean;
    private 'association_images'?: Array<AssociateImages>;
    public constructor() { 
    }
    public withId(id: number): PrivateImageRepositoryInfo {
        this['id'] = id;
        return this;
    }
    public withNamespace(namespace: string): PrivateImageRepositoryInfo {
        this['namespace'] = namespace;
        return this;
    }
    public withImageName(imageName: string): PrivateImageRepositoryInfo {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageId(imageId: string): PrivateImageRepositoryInfo {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withImageDigest(imageDigest: string): PrivateImageRepositoryInfo {
        this['image_digest'] = imageDigest;
        return this;
    }
    public set imageDigest(imageDigest: string  | undefined) {
        this['image_digest'] = imageDigest;
    }
    public get imageDigest(): string | undefined {
        return this['image_digest'];
    }
    public withImageVersion(imageVersion: string): PrivateImageRepositoryInfo {
        this['image_version'] = imageVersion;
        return this;
    }
    public set imageVersion(imageVersion: string  | undefined) {
        this['image_version'] = imageVersion;
    }
    public get imageVersion(): string | undefined {
        return this['image_version'];
    }
    public withImageType(imageType: string): PrivateImageRepositoryInfo {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withLatestVersion(latestVersion: boolean): PrivateImageRepositoryInfo {
        this['latest_version'] = latestVersion;
        return this;
    }
    public set latestVersion(latestVersion: boolean  | undefined) {
        this['latest_version'] = latestVersion;
    }
    public get latestVersion(): boolean | undefined {
        return this['latest_version'];
    }
    public withScanStatus(scanStatus: string): PrivateImageRepositoryInfo {
        this['scan_status'] = scanStatus;
        return this;
    }
    public set scanStatus(scanStatus: string  | undefined) {
        this['scan_status'] = scanStatus;
    }
    public get scanStatus(): string | undefined {
        return this['scan_status'];
    }
    public withImageSize(imageSize: number): PrivateImageRepositoryInfo {
        this['image_size'] = imageSize;
        return this;
    }
    public set imageSize(imageSize: number  | undefined) {
        this['image_size'] = imageSize;
    }
    public get imageSize(): number | undefined {
        return this['image_size'];
    }
    public withLatestUpdateTime(latestUpdateTime: number): PrivateImageRepositoryInfo {
        this['latest_update_time'] = latestUpdateTime;
        return this;
    }
    public set latestUpdateTime(latestUpdateTime: number  | undefined) {
        this['latest_update_time'] = latestUpdateTime;
    }
    public get latestUpdateTime(): number | undefined {
        return this['latest_update_time'];
    }
    public withLatestScanTime(latestScanTime: number): PrivateImageRepositoryInfo {
        this['latest_scan_time'] = latestScanTime;
        return this;
    }
    public set latestScanTime(latestScanTime: number  | undefined) {
        this['latest_scan_time'] = latestScanTime;
    }
    public get latestScanTime(): number | undefined {
        return this['latest_scan_time'];
    }
    public withVulNum(vulNum: number): PrivateImageRepositoryInfo {
        this['vul_num'] = vulNum;
        return this;
    }
    public set vulNum(vulNum: number  | undefined) {
        this['vul_num'] = vulNum;
    }
    public get vulNum(): number | undefined {
        return this['vul_num'];
    }
    public withUnsafeSettingNum(unsafeSettingNum: number): PrivateImageRepositoryInfo {
        this['unsafe_setting_num'] = unsafeSettingNum;
        return this;
    }
    public set unsafeSettingNum(unsafeSettingNum: number  | undefined) {
        this['unsafe_setting_num'] = unsafeSettingNum;
    }
    public get unsafeSettingNum(): number | undefined {
        return this['unsafe_setting_num'];
    }
    public withMaliciousFileNum(maliciousFileNum: number): PrivateImageRepositoryInfo {
        this['malicious_file_num'] = maliciousFileNum;
        return this;
    }
    public set maliciousFileNum(maliciousFileNum: number  | undefined) {
        this['malicious_file_num'] = maliciousFileNum;
    }
    public get maliciousFileNum(): number | undefined {
        return this['malicious_file_num'];
    }
    public withDomainName(domainName: string): PrivateImageRepositoryInfo {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withSharedStatus(sharedStatus: string): PrivateImageRepositoryInfo {
        this['shared_status'] = sharedStatus;
        return this;
    }
    public set sharedStatus(sharedStatus: string  | undefined) {
        this['shared_status'] = sharedStatus;
    }
    public get sharedStatus(): string | undefined {
        return this['shared_status'];
    }
    public withScanable(scanable: boolean): PrivateImageRepositoryInfo {
        this['scanable'] = scanable;
        return this;
    }
    public withAssociationImages(associationImages: Array<AssociateImages>): PrivateImageRepositoryInfo {
        this['association_images'] = associationImages;
        return this;
    }
    public set associationImages(associationImages: Array<AssociateImages>  | undefined) {
        this['association_images'] = associationImages;
    }
    public get associationImages(): Array<AssociateImages> | undefined {
        return this['association_images'];
    }
}