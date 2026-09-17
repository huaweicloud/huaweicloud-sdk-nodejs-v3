

export class ShowTestBranchRequest {
    private 'branch_uri'?: string;
    private 'project_uuid'?: string;
    public constructor(branchUri?: string) { 
        this['branch_uri'] = branchUri;
    }
    public withBranchUri(branchUri: string): ShowTestBranchRequest {
        this['branch_uri'] = branchUri;
        return this;
    }
    public set branchUri(branchUri: string  | undefined) {
        this['branch_uri'] = branchUri;
    }
    public get branchUri(): string | undefined {
        return this['branch_uri'];
    }
    public withProjectUuid(projectUuid: string): ShowTestBranchRequest {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
}