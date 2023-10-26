

export class ListImageRiskConfigsRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    private 'image_type'?: string;
    public offset?: number;
    public limit?: number;
    public namespace?: string;
    private 'image_name'?: string;
    private 'image_version'?: string;
    private 'check_name'?: string;
    public severity?: string;
    public standard?: string;
    public constructor(region?: string, imageType?: string) { 
        this['region'] = region;
        this['image_type'] = imageType;
    }
    public withRegion(region: string): ListImageRiskConfigsRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListImageRiskConfigsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withImageType(imageType: string): ListImageRiskConfigsRequest {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withOffset(offset: number): ListImageRiskConfigsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListImageRiskConfigsRequest {
        this['limit'] = limit;
        return this;
    }
    public withNamespace(namespace: string): ListImageRiskConfigsRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withImageName(imageName: string): ListImageRiskConfigsRequest {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageVersion(imageVersion: string): ListImageRiskConfigsRequest {
        this['image_version'] = imageVersion;
        return this;
    }
    public set imageVersion(imageVersion: string  | undefined) {
        this['image_version'] = imageVersion;
    }
    public get imageVersion(): string | undefined {
        return this['image_version'];
    }
    public withCheckName(checkName: string): ListImageRiskConfigsRequest {
        this['check_name'] = checkName;
        return this;
    }
    public set checkName(checkName: string  | undefined) {
        this['check_name'] = checkName;
    }
    public get checkName(): string | undefined {
        return this['check_name'];
    }
    public withSeverity(severity: string): ListImageRiskConfigsRequest {
        this['severity'] = severity;
        return this;
    }
    public withStandard(standard: string): ListImageRiskConfigsRequest {
        this['standard'] = standard;
        return this;
    }
}