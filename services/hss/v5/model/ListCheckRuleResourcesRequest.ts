

export class ListCheckRuleResourcesRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    public type?: string;
    private 'image_type'?: string;
    private 'check_rule_id'?: string;
    private 'check_name'?: string;
    public standard?: string;
    private 'scan_result'?: string;
    public constructor(type?: string, imageType?: string, checkRuleId?: string, checkName?: string, standard?: string) { 
        this['type'] = type;
        this['image_type'] = imageType;
        this['check_rule_id'] = checkRuleId;
        this['check_name'] = checkName;
        this['standard'] = standard;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListCheckRuleResourcesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListCheckRuleResourcesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListCheckRuleResourcesRequest {
        this['limit'] = limit;
        return this;
    }
    public withType(type: string): ListCheckRuleResourcesRequest {
        this['type'] = type;
        return this;
    }
    public withImageType(imageType: string): ListCheckRuleResourcesRequest {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withCheckRuleId(checkRuleId: string): ListCheckRuleResourcesRequest {
        this['check_rule_id'] = checkRuleId;
        return this;
    }
    public set checkRuleId(checkRuleId: string  | undefined) {
        this['check_rule_id'] = checkRuleId;
    }
    public get checkRuleId(): string | undefined {
        return this['check_rule_id'];
    }
    public withCheckName(checkName: string): ListCheckRuleResourcesRequest {
        this['check_name'] = checkName;
        return this;
    }
    public set checkName(checkName: string  | undefined) {
        this['check_name'] = checkName;
    }
    public get checkName(): string | undefined {
        return this['check_name'];
    }
    public withStandard(standard: string): ListCheckRuleResourcesRequest {
        this['standard'] = standard;
        return this;
    }
    public withScanResult(scanResult: string): ListCheckRuleResourcesRequest {
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