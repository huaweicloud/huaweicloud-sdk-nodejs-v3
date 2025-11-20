

export class CICDImageResponseInfo {
    private 'image_id'?: string;
    private 'cicd_name'?: string;
    public namespace?: string;
    private 'image_name'?: string;
    private 'image_digest'?: string;
    private 'image_version'?: string;
    private 'registry_name'?: string;
    private 'image_type'?: string;
    private 'registry_type'?: string;
    private 'latest_version'?: boolean;
    private 'scan_status'?: string;
    private 'scan_failed_desc'?: string;
    private 'scan_failed_code'?: string;
    private 'image_size'?: number;
    private 'latest_update_time'?: number;
    private 'latest_scan_time'?: number;
    private 'vul_num'?: number;
    private 'unsafe_setting_num'?: number;
    private 'malicious_file_num'?: number;
    private 'severity_level'?: string;
    private 'pipeline_type'?: string;
    public constructor() { 
    }
    public withImageId(imageId: string): CICDImageResponseInfo {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withCicdName(cicdName: string): CICDImageResponseInfo {
        this['cicd_name'] = cicdName;
        return this;
    }
    public set cicdName(cicdName: string  | undefined) {
        this['cicd_name'] = cicdName;
    }
    public get cicdName(): string | undefined {
        return this['cicd_name'];
    }
    public withNamespace(namespace: string): CICDImageResponseInfo {
        this['namespace'] = namespace;
        return this;
    }
    public withImageName(imageName: string): CICDImageResponseInfo {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageDigest(imageDigest: string): CICDImageResponseInfo {
        this['image_digest'] = imageDigest;
        return this;
    }
    public set imageDigest(imageDigest: string  | undefined) {
        this['image_digest'] = imageDigest;
    }
    public get imageDigest(): string | undefined {
        return this['image_digest'];
    }
    public withImageVersion(imageVersion: string): CICDImageResponseInfo {
        this['image_version'] = imageVersion;
        return this;
    }
    public set imageVersion(imageVersion: string  | undefined) {
        this['image_version'] = imageVersion;
    }
    public get imageVersion(): string | undefined {
        return this['image_version'];
    }
    public withRegistryName(registryName: string): CICDImageResponseInfo {
        this['registry_name'] = registryName;
        return this;
    }
    public set registryName(registryName: string  | undefined) {
        this['registry_name'] = registryName;
    }
    public get registryName(): string | undefined {
        return this['registry_name'];
    }
    public withImageType(imageType: string): CICDImageResponseInfo {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withRegistryType(registryType: string): CICDImageResponseInfo {
        this['registry_type'] = registryType;
        return this;
    }
    public set registryType(registryType: string  | undefined) {
        this['registry_type'] = registryType;
    }
    public get registryType(): string | undefined {
        return this['registry_type'];
    }
    public withLatestVersion(latestVersion: boolean): CICDImageResponseInfo {
        this['latest_version'] = latestVersion;
        return this;
    }
    public set latestVersion(latestVersion: boolean  | undefined) {
        this['latest_version'] = latestVersion;
    }
    public get latestVersion(): boolean | undefined {
        return this['latest_version'];
    }
    public withScanStatus(scanStatus: string): CICDImageResponseInfo {
        this['scan_status'] = scanStatus;
        return this;
    }
    public set scanStatus(scanStatus: string  | undefined) {
        this['scan_status'] = scanStatus;
    }
    public get scanStatus(): string | undefined {
        return this['scan_status'];
    }
    public withScanFailedDesc(scanFailedDesc: string): CICDImageResponseInfo {
        this['scan_failed_desc'] = scanFailedDesc;
        return this;
    }
    public set scanFailedDesc(scanFailedDesc: string  | undefined) {
        this['scan_failed_desc'] = scanFailedDesc;
    }
    public get scanFailedDesc(): string | undefined {
        return this['scan_failed_desc'];
    }
    public withScanFailedCode(scanFailedCode: string): CICDImageResponseInfo {
        this['scan_failed_code'] = scanFailedCode;
        return this;
    }
    public set scanFailedCode(scanFailedCode: string  | undefined) {
        this['scan_failed_code'] = scanFailedCode;
    }
    public get scanFailedCode(): string | undefined {
        return this['scan_failed_code'];
    }
    public withImageSize(imageSize: number): CICDImageResponseInfo {
        this['image_size'] = imageSize;
        return this;
    }
    public set imageSize(imageSize: number  | undefined) {
        this['image_size'] = imageSize;
    }
    public get imageSize(): number | undefined {
        return this['image_size'];
    }
    public withLatestUpdateTime(latestUpdateTime: number): CICDImageResponseInfo {
        this['latest_update_time'] = latestUpdateTime;
        return this;
    }
    public set latestUpdateTime(latestUpdateTime: number  | undefined) {
        this['latest_update_time'] = latestUpdateTime;
    }
    public get latestUpdateTime(): number | undefined {
        return this['latest_update_time'];
    }
    public withLatestScanTime(latestScanTime: number): CICDImageResponseInfo {
        this['latest_scan_time'] = latestScanTime;
        return this;
    }
    public set latestScanTime(latestScanTime: number  | undefined) {
        this['latest_scan_time'] = latestScanTime;
    }
    public get latestScanTime(): number | undefined {
        return this['latest_scan_time'];
    }
    public withVulNum(vulNum: number): CICDImageResponseInfo {
        this['vul_num'] = vulNum;
        return this;
    }
    public set vulNum(vulNum: number  | undefined) {
        this['vul_num'] = vulNum;
    }
    public get vulNum(): number | undefined {
        return this['vul_num'];
    }
    public withUnsafeSettingNum(unsafeSettingNum: number): CICDImageResponseInfo {
        this['unsafe_setting_num'] = unsafeSettingNum;
        return this;
    }
    public set unsafeSettingNum(unsafeSettingNum: number  | undefined) {
        this['unsafe_setting_num'] = unsafeSettingNum;
    }
    public get unsafeSettingNum(): number | undefined {
        return this['unsafe_setting_num'];
    }
    public withMaliciousFileNum(maliciousFileNum: number): CICDImageResponseInfo {
        this['malicious_file_num'] = maliciousFileNum;
        return this;
    }
    public set maliciousFileNum(maliciousFileNum: number  | undefined) {
        this['malicious_file_num'] = maliciousFileNum;
    }
    public get maliciousFileNum(): number | undefined {
        return this['malicious_file_num'];
    }
    public withSeverityLevel(severityLevel: string): CICDImageResponseInfo {
        this['severity_level'] = severityLevel;
        return this;
    }
    public set severityLevel(severityLevel: string  | undefined) {
        this['severity_level'] = severityLevel;
    }
    public get severityLevel(): string | undefined {
        return this['severity_level'];
    }
    public withPipelineType(pipelineType: string): CICDImageResponseInfo {
        this['pipeline_type'] = pipelineType;
        return this;
    }
    public set pipelineType(pipelineType: string  | undefined) {
        this['pipeline_type'] = pipelineType;
    }
    public get pipelineType(): string | undefined {
        return this['pipeline_type'];
    }
}