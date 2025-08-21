

export class CommitRevetOrCherryPickDto {
    public branch?: string;
    private 'with_new_merge_request'?: boolean;
    public message?: string;
    public constructor(branch?: string) { 
        this['branch'] = branch;
    }
    public withBranch(branch: string): CommitRevetOrCherryPickDto {
        this['branch'] = branch;
        return this;
    }
    public withWithNewMergeRequest(withNewMergeRequest: boolean): CommitRevetOrCherryPickDto {
        this['with_new_merge_request'] = withNewMergeRequest;
        return this;
    }
    public set withNewMergeRequest(withNewMergeRequest: boolean  | undefined) {
        this['with_new_merge_request'] = withNewMergeRequest;
    }
    public get withNewMergeRequest(): boolean | undefined {
        return this['with_new_merge_request'];
    }
    public withMessage(message: string): CommitRevetOrCherryPickDto {
        this['message'] = message;
        return this;
    }
}