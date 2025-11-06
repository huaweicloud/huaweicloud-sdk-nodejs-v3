

export class SubmoduleReqDto {
    private 'branch_name'?: string;
    private 'file_path'?: string;
    private 'subrepo_id'?: string;
    private 'commit_message'?: string;
    private 'subrepo_branch'?: string;
    public constructor(branchName?: string, filePath?: string, subrepoId?: string, commitMessage?: string, subrepoBranch?: string) { 
        this['branch_name'] = branchName;
        this['file_path'] = filePath;
        this['subrepo_id'] = subrepoId;
        this['commit_message'] = commitMessage;
        this['subrepo_branch'] = subrepoBranch;
    }
    public withBranchName(branchName: string): SubmoduleReqDto {
        this['branch_name'] = branchName;
        return this;
    }
    public set branchName(branchName: string  | undefined) {
        this['branch_name'] = branchName;
    }
    public get branchName(): string | undefined {
        return this['branch_name'];
    }
    public withFilePath(filePath: string): SubmoduleReqDto {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withSubrepoId(subrepoId: string): SubmoduleReqDto {
        this['subrepo_id'] = subrepoId;
        return this;
    }
    public set subrepoId(subrepoId: string  | undefined) {
        this['subrepo_id'] = subrepoId;
    }
    public get subrepoId(): string | undefined {
        return this['subrepo_id'];
    }
    public withCommitMessage(commitMessage: string): SubmoduleReqDto {
        this['commit_message'] = commitMessage;
        return this;
    }
    public set commitMessage(commitMessage: string  | undefined) {
        this['commit_message'] = commitMessage;
    }
    public get commitMessage(): string | undefined {
        return this['commit_message'];
    }
    public withSubrepoBranch(subrepoBranch: string): SubmoduleReqDto {
        this['subrepo_branch'] = subrepoBranch;
        return this;
    }
    public set subrepoBranch(subrepoBranch: string  | undefined) {
        this['subrepo_branch'] = subrepoBranch;
    }
    public get subrepoBranch(): string | undefined {
        return this['subrepo_branch'];
    }
}