import { PatchDetail } from './PatchDetail';


export class ComplianceItem {
    private 'instance_id'?: string;
    public title?: string;
    public classification?: string;
    private 'severity_level'?: string;
    private 'compliance_level'?: string;
    private 'patch_detail'?: PatchDetail;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): ComplianceItem {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withTitle(title: string): ComplianceItem {
        this['title'] = title;
        return this;
    }
    public withClassification(classification: string): ComplianceItem {
        this['classification'] = classification;
        return this;
    }
    public withSeverityLevel(severityLevel: string): ComplianceItem {
        this['severity_level'] = severityLevel;
        return this;
    }
    public set severityLevel(severityLevel: string  | undefined) {
        this['severity_level'] = severityLevel;
    }
    public get severityLevel(): string | undefined {
        return this['severity_level'];
    }
    public withComplianceLevel(complianceLevel: string): ComplianceItem {
        this['compliance_level'] = complianceLevel;
        return this;
    }
    public set complianceLevel(complianceLevel: string  | undefined) {
        this['compliance_level'] = complianceLevel;
    }
    public get complianceLevel(): string | undefined {
        return this['compliance_level'];
    }
    public withPatchDetail(patchDetail: PatchDetail): ComplianceItem {
        this['patch_detail'] = patchDetail;
        return this;
    }
    public set patchDetail(patchDetail: PatchDetail  | undefined) {
        this['patch_detail'] = patchDetail;
    }
    public get patchDetail(): PatchDetail | undefined {
        return this['patch_detail'];
    }
}