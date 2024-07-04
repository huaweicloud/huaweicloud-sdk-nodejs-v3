

export class ShowImageCheckRuleDetailRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    private 'image_type'?: string;
    public namespace?: string;
    private 'image_name'?: string;
    private 'image_version'?: string;
    private 'check_name'?: string;
    private 'check_type'?: string;
    private 'check_rule_id'?: string;
    public standard?: string;
    private 'instance_id'?: string;
    public constructor(imageType?: string, checkName?: string, checkType?: string, checkRuleId?: string, standard?: string) { 
        this['image_type'] = imageType;
        this['check_name'] = checkName;
        this['check_type'] = checkType;
        this['check_rule_id'] = checkRuleId;
        this['standard'] = standard;
    }
    public withRegion(region: string): ShowImageCheckRuleDetailRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowImageCheckRuleDetailRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withImageType(imageType: string): ShowImageCheckRuleDetailRequest {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withNamespace(namespace: string): ShowImageCheckRuleDetailRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withImageName(imageName: string): ShowImageCheckRuleDetailRequest {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageVersion(imageVersion: string): ShowImageCheckRuleDetailRequest {
        this['image_version'] = imageVersion;
        return this;
    }
    public set imageVersion(imageVersion: string  | undefined) {
        this['image_version'] = imageVersion;
    }
    public get imageVersion(): string | undefined {
        return this['image_version'];
    }
    public withCheckName(checkName: string): ShowImageCheckRuleDetailRequest {
        this['check_name'] = checkName;
        return this;
    }
    public set checkName(checkName: string  | undefined) {
        this['check_name'] = checkName;
    }
    public get checkName(): string | undefined {
        return this['check_name'];
    }
    public withCheckType(checkType: string): ShowImageCheckRuleDetailRequest {
        this['check_type'] = checkType;
        return this;
    }
    public set checkType(checkType: string  | undefined) {
        this['check_type'] = checkType;
    }
    public get checkType(): string | undefined {
        return this['check_type'];
    }
    public withCheckRuleId(checkRuleId: string): ShowImageCheckRuleDetailRequest {
        this['check_rule_id'] = checkRuleId;
        return this;
    }
    public set checkRuleId(checkRuleId: string  | undefined) {
        this['check_rule_id'] = checkRuleId;
    }
    public get checkRuleId(): string | undefined {
        return this['check_rule_id'];
    }
    public withStandard(standard: string): ShowImageCheckRuleDetailRequest {
        this['standard'] = standard;
        return this;
    }
    public withInstanceId(instanceId: string): ShowImageCheckRuleDetailRequest {
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