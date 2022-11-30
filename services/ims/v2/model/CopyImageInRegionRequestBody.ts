

export class CopyImageInRegionRequestBody {
    private 'cmk_id'?: string | undefined;
    public description?: string;
    private 'enterprise_project_id'?: string | undefined;
    public name: string;
    public constructor(name?: any) { 
        this['name'] = name;
    }
    public withCmkId(cmkId: string): CopyImageInRegionRequestBody {
        this['cmk_id'] = cmkId;
        return this;
    }
    public set cmkId(cmkId: string | undefined) {
        this['cmk_id'] = cmkId;
    }
    public get cmkId() {
        return this['cmk_id'];
    }
    public withDescription(description: string): CopyImageInRegionRequestBody {
        this['description'] = description;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CopyImageInRegionRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withName(name: string): CopyImageInRegionRequestBody {
        this['name'] = name;
        return this;
    }
}