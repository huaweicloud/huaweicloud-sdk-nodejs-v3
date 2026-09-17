

export class DeleteBranchRequest {
    private 'branch_uri'?: string;
    private 'project_uuid'?: string;
    private 'is_async'?: boolean;
    public constructor(branchUri?: string) { 
        this['branch_uri'] = branchUri;
    }
    public withBranchUri(branchUri: string): DeleteBranchRequest {
        this['branch_uri'] = branchUri;
        return this;
    }
    public set branchUri(branchUri: string  | undefined) {
        this['branch_uri'] = branchUri;
    }
    public get branchUri(): string | undefined {
        return this['branch_uri'];
    }
    public withProjectUuid(projectUuid: string): DeleteBranchRequest {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withIsAsync(isAsync: boolean): DeleteBranchRequest {
        this['is_async'] = isAsync;
        return this;
    }
    public set isAsync(isAsync: boolean  | undefined) {
        this['is_async'] = isAsync;
    }
    public get isAsync(): boolean | undefined {
        return this['is_async'];
    }
}