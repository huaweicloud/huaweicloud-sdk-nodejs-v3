

export class ShowInstancePatchItemsRequest {
    private 'instance_compliant_id'?: string;
    public offset?: number;
    public limit?: number;
    public title?: string;
    private 'sort_dir'?: string;
    private 'sort_key'?: string;
    private 'patch_status'?: string;
    public classification?: string;
    private 'severity_level'?: string;
    private 'compliance_level'?: string;
    public constructor(instanceCompliantId?: string) { 
        this['instance_compliant_id'] = instanceCompliantId;
    }
    public withInstanceCompliantId(instanceCompliantId: string): ShowInstancePatchItemsRequest {
        this['instance_compliant_id'] = instanceCompliantId;
        return this;
    }
    public set instanceCompliantId(instanceCompliantId: string  | undefined) {
        this['instance_compliant_id'] = instanceCompliantId;
    }
    public get instanceCompliantId(): string | undefined {
        return this['instance_compliant_id'];
    }
    public withOffset(offset: number): ShowInstancePatchItemsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowInstancePatchItemsRequest {
        this['limit'] = limit;
        return this;
    }
    public withTitle(title: string): ShowInstancePatchItemsRequest {
        this['title'] = title;
        return this;
    }
    public withSortDir(sortDir: string): ShowInstancePatchItemsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withSortKey(sortKey: string): ShowInstancePatchItemsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withPatchStatus(patchStatus: string): ShowInstancePatchItemsRequest {
        this['patch_status'] = patchStatus;
        return this;
    }
    public set patchStatus(patchStatus: string  | undefined) {
        this['patch_status'] = patchStatus;
    }
    public get patchStatus(): string | undefined {
        return this['patch_status'];
    }
    public withClassification(classification: string): ShowInstancePatchItemsRequest {
        this['classification'] = classification;
        return this;
    }
    public withSeverityLevel(severityLevel: string): ShowInstancePatchItemsRequest {
        this['severity_level'] = severityLevel;
        return this;
    }
    public set severityLevel(severityLevel: string  | undefined) {
        this['severity_level'] = severityLevel;
    }
    public get severityLevel(): string | undefined {
        return this['severity_level'];
    }
    public withComplianceLevel(complianceLevel: string): ShowInstancePatchItemsRequest {
        this['compliance_level'] = complianceLevel;
        return this;
    }
    public set complianceLevel(complianceLevel: string  | undefined) {
        this['compliance_level'] = complianceLevel;
    }
    public get complianceLevel(): string | undefined {
        return this['compliance_level'];
    }
}