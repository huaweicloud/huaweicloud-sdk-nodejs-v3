

export class ImageLocalInfo {
    private 'image_name'?: string;
    private 'image_id'?: string;
    private 'image_digest'?: string;
    private 'image_version'?: string;
    private 'local_image_type'?: string;
    private 'scan_status'?: string;
    private 'image_size'?: number;
    private 'latest_update_time'?: number;
    private 'latest_scan_time'?: number;
    private 'vul_num'?: number;
    private 'unsafe_setting_num'?: number;
    private 'malicious_file_num'?: number;
    private 'host_num'?: number;
    private 'container_num'?: number;
    private 'component_num'?: number;
    private 'scan_failed_desc'?: string;
    public constructor() { 
    }
    public withImageName(imageName: string): ImageLocalInfo {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageId(imageId: string): ImageLocalInfo {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withImageDigest(imageDigest: string): ImageLocalInfo {
        this['image_digest'] = imageDigest;
        return this;
    }
    public set imageDigest(imageDigest: string  | undefined) {
        this['image_digest'] = imageDigest;
    }
    public get imageDigest(): string | undefined {
        return this['image_digest'];
    }
    public withImageVersion(imageVersion: string): ImageLocalInfo {
        this['image_version'] = imageVersion;
        return this;
    }
    public set imageVersion(imageVersion: string  | undefined) {
        this['image_version'] = imageVersion;
    }
    public get imageVersion(): string | undefined {
        return this['image_version'];
    }
    public withLocalImageType(localImageType: string): ImageLocalInfo {
        this['local_image_type'] = localImageType;
        return this;
    }
    public set localImageType(localImageType: string  | undefined) {
        this['local_image_type'] = localImageType;
    }
    public get localImageType(): string | undefined {
        return this['local_image_type'];
    }
    public withScanStatus(scanStatus: string): ImageLocalInfo {
        this['scan_status'] = scanStatus;
        return this;
    }
    public set scanStatus(scanStatus: string  | undefined) {
        this['scan_status'] = scanStatus;
    }
    public get scanStatus(): string | undefined {
        return this['scan_status'];
    }
    public withImageSize(imageSize: number): ImageLocalInfo {
        this['image_size'] = imageSize;
        return this;
    }
    public set imageSize(imageSize: number  | undefined) {
        this['image_size'] = imageSize;
    }
    public get imageSize(): number | undefined {
        return this['image_size'];
    }
    public withLatestUpdateTime(latestUpdateTime: number): ImageLocalInfo {
        this['latest_update_time'] = latestUpdateTime;
        return this;
    }
    public set latestUpdateTime(latestUpdateTime: number  | undefined) {
        this['latest_update_time'] = latestUpdateTime;
    }
    public get latestUpdateTime(): number | undefined {
        return this['latest_update_time'];
    }
    public withLatestScanTime(latestScanTime: number): ImageLocalInfo {
        this['latest_scan_time'] = latestScanTime;
        return this;
    }
    public set latestScanTime(latestScanTime: number  | undefined) {
        this['latest_scan_time'] = latestScanTime;
    }
    public get latestScanTime(): number | undefined {
        return this['latest_scan_time'];
    }
    public withVulNum(vulNum: number): ImageLocalInfo {
        this['vul_num'] = vulNum;
        return this;
    }
    public set vulNum(vulNum: number  | undefined) {
        this['vul_num'] = vulNum;
    }
    public get vulNum(): number | undefined {
        return this['vul_num'];
    }
    public withUnsafeSettingNum(unsafeSettingNum: number): ImageLocalInfo {
        this['unsafe_setting_num'] = unsafeSettingNum;
        return this;
    }
    public set unsafeSettingNum(unsafeSettingNum: number  | undefined) {
        this['unsafe_setting_num'] = unsafeSettingNum;
    }
    public get unsafeSettingNum(): number | undefined {
        return this['unsafe_setting_num'];
    }
    public withMaliciousFileNum(maliciousFileNum: number): ImageLocalInfo {
        this['malicious_file_num'] = maliciousFileNum;
        return this;
    }
    public set maliciousFileNum(maliciousFileNum: number  | undefined) {
        this['malicious_file_num'] = maliciousFileNum;
    }
    public get maliciousFileNum(): number | undefined {
        return this['malicious_file_num'];
    }
    public withHostNum(hostNum: number): ImageLocalInfo {
        this['host_num'] = hostNum;
        return this;
    }
    public set hostNum(hostNum: number  | undefined) {
        this['host_num'] = hostNum;
    }
    public get hostNum(): number | undefined {
        return this['host_num'];
    }
    public withContainerNum(containerNum: number): ImageLocalInfo {
        this['container_num'] = containerNum;
        return this;
    }
    public set containerNum(containerNum: number  | undefined) {
        this['container_num'] = containerNum;
    }
    public get containerNum(): number | undefined {
        return this['container_num'];
    }
    public withComponentNum(componentNum: number): ImageLocalInfo {
        this['component_num'] = componentNum;
        return this;
    }
    public set componentNum(componentNum: number  | undefined) {
        this['component_num'] = componentNum;
    }
    public get componentNum(): number | undefined {
        return this['component_num'];
    }
    public withScanFailedDesc(scanFailedDesc: string): ImageLocalInfo {
        this['scan_failed_desc'] = scanFailedDesc;
        return this;
    }
    public set scanFailedDesc(scanFailedDesc: string  | undefined) {
        this['scan_failed_desc'] = scanFailedDesc;
    }
    public get scanFailedDesc(): string | undefined {
        return this['scan_failed_desc'];
    }
}