

export class ListCicdImagesRequest {
    private 'enterprise_project_id'?: string;
    public namespace?: string;
    private 'image_name'?: string;
    private 'image_version'?: string;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    public limit?: number;
    public offset?: number;
    private 'image_id'?: string;
    private 'cicd_name'?: string;
    private 'latest_version'?: boolean;
    private 'image_size'?: number;
    private 'scan_status'?: string;
    private 'start_latest_update_time'?: number;
    private 'end_latest_update_time'?: number;
    private 'start_latest_scan_time'?: number;
    private 'end_latest_scan_time'?: number;
    private 'has_malicious_file'?: boolean;
    private 'has_unsafe_setting'?: boolean;
    private 'has_vul'?: boolean;
    private 'severity_level'?: string;
    public risky?: boolean;
    private 'pipeline_type'?: string;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListCicdImagesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withNamespace(namespace: string): ListCicdImagesRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withImageName(imageName: string): ListCicdImagesRequest {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageVersion(imageVersion: string): ListCicdImagesRequest {
        this['image_version'] = imageVersion;
        return this;
    }
    public set imageVersion(imageVersion: string  | undefined) {
        this['image_version'] = imageVersion;
    }
    public get imageVersion(): string | undefined {
        return this['image_version'];
    }
    public withSortKey(sortKey: string): ListCicdImagesRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListCicdImagesRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withLimit(limit: number): ListCicdImagesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListCicdImagesRequest {
        this['offset'] = offset;
        return this;
    }
    public withImageId(imageId: string): ListCicdImagesRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withCicdName(cicdName: string): ListCicdImagesRequest {
        this['cicd_name'] = cicdName;
        return this;
    }
    public set cicdName(cicdName: string  | undefined) {
        this['cicd_name'] = cicdName;
    }
    public get cicdName(): string | undefined {
        return this['cicd_name'];
    }
    public withLatestVersion(latestVersion: boolean): ListCicdImagesRequest {
        this['latest_version'] = latestVersion;
        return this;
    }
    public set latestVersion(latestVersion: boolean  | undefined) {
        this['latest_version'] = latestVersion;
    }
    public get latestVersion(): boolean | undefined {
        return this['latest_version'];
    }
    public withImageSize(imageSize: number): ListCicdImagesRequest {
        this['image_size'] = imageSize;
        return this;
    }
    public set imageSize(imageSize: number  | undefined) {
        this['image_size'] = imageSize;
    }
    public get imageSize(): number | undefined {
        return this['image_size'];
    }
    public withScanStatus(scanStatus: string): ListCicdImagesRequest {
        this['scan_status'] = scanStatus;
        return this;
    }
    public set scanStatus(scanStatus: string  | undefined) {
        this['scan_status'] = scanStatus;
    }
    public get scanStatus(): string | undefined {
        return this['scan_status'];
    }
    public withStartLatestUpdateTime(startLatestUpdateTime: number): ListCicdImagesRequest {
        this['start_latest_update_time'] = startLatestUpdateTime;
        return this;
    }
    public set startLatestUpdateTime(startLatestUpdateTime: number  | undefined) {
        this['start_latest_update_time'] = startLatestUpdateTime;
    }
    public get startLatestUpdateTime(): number | undefined {
        return this['start_latest_update_time'];
    }
    public withEndLatestUpdateTime(endLatestUpdateTime: number): ListCicdImagesRequest {
        this['end_latest_update_time'] = endLatestUpdateTime;
        return this;
    }
    public set endLatestUpdateTime(endLatestUpdateTime: number  | undefined) {
        this['end_latest_update_time'] = endLatestUpdateTime;
    }
    public get endLatestUpdateTime(): number | undefined {
        return this['end_latest_update_time'];
    }
    public withStartLatestScanTime(startLatestScanTime: number): ListCicdImagesRequest {
        this['start_latest_scan_time'] = startLatestScanTime;
        return this;
    }
    public set startLatestScanTime(startLatestScanTime: number  | undefined) {
        this['start_latest_scan_time'] = startLatestScanTime;
    }
    public get startLatestScanTime(): number | undefined {
        return this['start_latest_scan_time'];
    }
    public withEndLatestScanTime(endLatestScanTime: number): ListCicdImagesRequest {
        this['end_latest_scan_time'] = endLatestScanTime;
        return this;
    }
    public set endLatestScanTime(endLatestScanTime: number  | undefined) {
        this['end_latest_scan_time'] = endLatestScanTime;
    }
    public get endLatestScanTime(): number | undefined {
        return this['end_latest_scan_time'];
    }
    public withHasMaliciousFile(hasMaliciousFile: boolean): ListCicdImagesRequest {
        this['has_malicious_file'] = hasMaliciousFile;
        return this;
    }
    public set hasMaliciousFile(hasMaliciousFile: boolean  | undefined) {
        this['has_malicious_file'] = hasMaliciousFile;
    }
    public get hasMaliciousFile(): boolean | undefined {
        return this['has_malicious_file'];
    }
    public withHasUnsafeSetting(hasUnsafeSetting: boolean): ListCicdImagesRequest {
        this['has_unsafe_setting'] = hasUnsafeSetting;
        return this;
    }
    public set hasUnsafeSetting(hasUnsafeSetting: boolean  | undefined) {
        this['has_unsafe_setting'] = hasUnsafeSetting;
    }
    public get hasUnsafeSetting(): boolean | undefined {
        return this['has_unsafe_setting'];
    }
    public withHasVul(hasVul: boolean): ListCicdImagesRequest {
        this['has_vul'] = hasVul;
        return this;
    }
    public set hasVul(hasVul: boolean  | undefined) {
        this['has_vul'] = hasVul;
    }
    public get hasVul(): boolean | undefined {
        return this['has_vul'];
    }
    public withSeverityLevel(severityLevel: string): ListCicdImagesRequest {
        this['severity_level'] = severityLevel;
        return this;
    }
    public set severityLevel(severityLevel: string  | undefined) {
        this['severity_level'] = severityLevel;
    }
    public get severityLevel(): string | undefined {
        return this['severity_level'];
    }
    public withRisky(risky: boolean): ListCicdImagesRequest {
        this['risky'] = risky;
        return this;
    }
    public withPipelineType(pipelineType: string): ListCicdImagesRequest {
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