

export class PipelineLatestRunArtifactParams {
    public version?: string;
    private 'branch_filter'?: string;
    private 'package_name'?: string;
    public organization?: string;
    public constructor() { 
    }
    public withVersion(version: string): PipelineLatestRunArtifactParams {
        this['version'] = version;
        return this;
    }
    public withBranchFilter(branchFilter: string): PipelineLatestRunArtifactParams {
        this['branch_filter'] = branchFilter;
        return this;
    }
    public set branchFilter(branchFilter: string  | undefined) {
        this['branch_filter'] = branchFilter;
    }
    public get branchFilter(): string | undefined {
        return this['branch_filter'];
    }
    public withPackageName(packageName: string): PipelineLatestRunArtifactParams {
        this['package_name'] = packageName;
        return this;
    }
    public set packageName(packageName: string  | undefined) {
        this['package_name'] = packageName;
    }
    public get packageName(): string | undefined {
        return this['package_name'];
    }
    public withOrganization(organization: string): PipelineLatestRunArtifactParams {
        this['organization'] = organization;
        return this;
    }
}