

export class ShowPlanListRequest {
    private 'project_id'?: string;
    public offset?: number;
    public limit?: number;
    public name?: string;
    private 'current_stage'?: string;
    private 'branch_uri'?: string;
    private 'query_all_version'?: boolean;
    private 'fix_version_ids'?: string;
    public constructor(projectId?: string, offset?: number, limit?: number) { 
        this['project_id'] = projectId;
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withProjectId(projectId: string): ShowPlanListRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withOffset(offset: number): ShowPlanListRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowPlanListRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ShowPlanListRequest {
        this['name'] = name;
        return this;
    }
    public withCurrentStage(currentStage: string): ShowPlanListRequest {
        this['current_stage'] = currentStage;
        return this;
    }
    public set currentStage(currentStage: string  | undefined) {
        this['current_stage'] = currentStage;
    }
    public get currentStage(): string | undefined {
        return this['current_stage'];
    }
    public withBranchUri(branchUri: string): ShowPlanListRequest {
        this['branch_uri'] = branchUri;
        return this;
    }
    public set branchUri(branchUri: string  | undefined) {
        this['branch_uri'] = branchUri;
    }
    public get branchUri(): string | undefined {
        return this['branch_uri'];
    }
    public withQueryAllVersion(queryAllVersion: boolean): ShowPlanListRequest {
        this['query_all_version'] = queryAllVersion;
        return this;
    }
    public set queryAllVersion(queryAllVersion: boolean  | undefined) {
        this['query_all_version'] = queryAllVersion;
    }
    public get queryAllVersion(): boolean | undefined {
        return this['query_all_version'];
    }
    public withFixVersionIds(fixVersionIds: string): ShowPlanListRequest {
        this['fix_version_ids'] = fixVersionIds;
        return this;
    }
    public set fixVersionIds(fixVersionIds: string  | undefined) {
        this['fix_version_ids'] = fixVersionIds;
    }
    public get fixVersionIds(): string | undefined {
        return this['fix_version_ids'];
    }
}