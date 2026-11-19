

export class ListRaspPatchesRequest {
    private 'enterprise_project_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'patch_name'?: string;
    private 'chk_feature_id'?: number;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListRaspPatchesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLimit(limit: number): ListRaspPatchesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListRaspPatchesRequest {
        this['offset'] = offset;
        return this;
    }
    public withPatchName(patchName: string): ListRaspPatchesRequest {
        this['patch_name'] = patchName;
        return this;
    }
    public set patchName(patchName: string  | undefined) {
        this['patch_name'] = patchName;
    }
    public get patchName(): string | undefined {
        return this['patch_name'];
    }
    public withChkFeatureId(chkFeatureId: number): ListRaspPatchesRequest {
        this['chk_feature_id'] = chkFeatureId;
        return this;
    }
    public set chkFeatureId(chkFeatureId: number  | undefined) {
        this['chk_feature_id'] = chkFeatureId;
    }
    public get chkFeatureId(): number | undefined {
        return this['chk_feature_id'];
    }
}