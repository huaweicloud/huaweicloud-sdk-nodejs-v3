

export class ListCheckRulesInfoRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    public type?: string;
    private 'image_type'?: string;
    public namespace?: string;
    private 'image_name'?: string;
    private 'image_version'?: string;
    private 'instance_id'?: string;
    private 'image_id'?: string;
    private 'scan_result'?: string;
    public constructor(type?: string, imageType?: string) { 
        this['type'] = type;
        this['image_type'] = imageType;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListCheckRulesInfoRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListCheckRulesInfoRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListCheckRulesInfoRequest {
        this['limit'] = limit;
        return this;
    }
    public withType(type: string): ListCheckRulesInfoRequest {
        this['type'] = type;
        return this;
    }
    public withImageType(imageType: string): ListCheckRulesInfoRequest {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withNamespace(namespace: string): ListCheckRulesInfoRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withImageName(imageName: string): ListCheckRulesInfoRequest {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageVersion(imageVersion: string): ListCheckRulesInfoRequest {
        this['image_version'] = imageVersion;
        return this;
    }
    public set imageVersion(imageVersion: string  | undefined) {
        this['image_version'] = imageVersion;
    }
    public get imageVersion(): string | undefined {
        return this['image_version'];
    }
    public withInstanceId(instanceId: string): ListCheckRulesInfoRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withImageId(imageId: string): ListCheckRulesInfoRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withScanResult(scanResult: string): ListCheckRulesInfoRequest {
        this['scan_result'] = scanResult;
        return this;
    }
    public set scanResult(scanResult: string  | undefined) {
        this['scan_result'] = scanResult;
    }
    public get scanResult(): string | undefined {
        return this['scan_result'];
    }
}