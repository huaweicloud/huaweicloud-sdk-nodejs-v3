

export class ListImageRiskConfigRulesRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    private 'image_type'?: string;
    public offset?: number;
    public limit?: number;
    public namespace?: string;
    private 'image_name'?: string;
    private 'image_version'?: string;
    private 'image_id'?: string;
    private 'check_name'?: string;
    public standard?: string;
    private 'result_type'?: string;
    private 'check_rule_name'?: string;
    public severity?: string;
    private 'instance_id'?: string;
    public constructor(imageType?: string, checkName?: string, standard?: string) { 
        this['image_type'] = imageType;
        this['check_name'] = checkName;
        this['standard'] = standard;
    }
    public withRegion(region: string): ListImageRiskConfigRulesRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListImageRiskConfigRulesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withImageType(imageType: string): ListImageRiskConfigRulesRequest {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withOffset(offset: number): ListImageRiskConfigRulesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListImageRiskConfigRulesRequest {
        this['limit'] = limit;
        return this;
    }
    public withNamespace(namespace: string): ListImageRiskConfigRulesRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withImageName(imageName: string): ListImageRiskConfigRulesRequest {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageVersion(imageVersion: string): ListImageRiskConfigRulesRequest {
        this['image_version'] = imageVersion;
        return this;
    }
    public set imageVersion(imageVersion: string  | undefined) {
        this['image_version'] = imageVersion;
    }
    public get imageVersion(): string | undefined {
        return this['image_version'];
    }
    public withImageId(imageId: string): ListImageRiskConfigRulesRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withCheckName(checkName: string): ListImageRiskConfigRulesRequest {
        this['check_name'] = checkName;
        return this;
    }
    public set checkName(checkName: string  | undefined) {
        this['check_name'] = checkName;
    }
    public get checkName(): string | undefined {
        return this['check_name'];
    }
    public withStandard(standard: string): ListImageRiskConfigRulesRequest {
        this['standard'] = standard;
        return this;
    }
    public withResultType(resultType: string): ListImageRiskConfigRulesRequest {
        this['result_type'] = resultType;
        return this;
    }
    public set resultType(resultType: string  | undefined) {
        this['result_type'] = resultType;
    }
    public get resultType(): string | undefined {
        return this['result_type'];
    }
    public withCheckRuleName(checkRuleName: string): ListImageRiskConfigRulesRequest {
        this['check_rule_name'] = checkRuleName;
        return this;
    }
    public set checkRuleName(checkRuleName: string  | undefined) {
        this['check_rule_name'] = checkRuleName;
    }
    public get checkRuleName(): string | undefined {
        return this['check_rule_name'];
    }
    public withSeverity(severity: string): ListImageRiskConfigRulesRequest {
        this['severity'] = severity;
        return this;
    }
    public withInstanceId(instanceId: string): ListImageRiskConfigRulesRequest {
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