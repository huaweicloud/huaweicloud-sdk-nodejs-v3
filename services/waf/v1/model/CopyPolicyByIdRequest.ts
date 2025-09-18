

export class CopyPolicyByIdRequest {
    private 'Content-Type'?: string;
    private 'enterprise_project_id'?: string;
    private 'src_policy_id'?: string;
    private 'dest_policy_name'?: string;
    public constructor(contentType?: string, srcPolicyId?: string, destPolicyName?: string) { 
        this['Content-Type'] = contentType;
        this['src_policy_id'] = srcPolicyId;
        this['dest_policy_name'] = destPolicyName;
    }
    public withContentType(contentType: string): CopyPolicyByIdRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CopyPolicyByIdRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withSrcPolicyId(srcPolicyId: string): CopyPolicyByIdRequest {
        this['src_policy_id'] = srcPolicyId;
        return this;
    }
    public set srcPolicyId(srcPolicyId: string  | undefined) {
        this['src_policy_id'] = srcPolicyId;
    }
    public get srcPolicyId(): string | undefined {
        return this['src_policy_id'];
    }
    public withDestPolicyName(destPolicyName: string): CopyPolicyByIdRequest {
        this['dest_policy_name'] = destPolicyName;
        return this;
    }
    public set destPolicyName(destPolicyName: string  | undefined) {
        this['dest_policy_name'] = destPolicyName;
    }
    public get destPolicyName(): string | undefined {
        return this['dest_policy_name'];
    }
}