

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
    public constructor(region?: string, imageType?: string) { 
        this['region'] = region;
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
}