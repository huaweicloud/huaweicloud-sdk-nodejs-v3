

export class RepositoryDirDto {
    private 'file_path'?: string;
    private 'branch_name'?: string;
    private 'commit_message'?: string;
    public constructor(filePath?: string, branchName?: string, commitMessage?: string) { 
        this['file_path'] = filePath;
        this['branch_name'] = branchName;
        this['commit_message'] = commitMessage;
    }
    public withFilePath(filePath: string): RepositoryDirDto {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withBranchName(branchName: string): RepositoryDirDto {
        this['branch_name'] = branchName;
        return this;
    }
    public set branchName(branchName: string  | undefined) {
        this['branch_name'] = branchName;
    }
    public get branchName(): string | undefined {
        return this['branch_name'];
    }
    public withCommitMessage(commitMessage: string): RepositoryDirDto {
        this['commit_message'] = commitMessage;
        return this;
    }
    public set commitMessage(commitMessage: string  | undefined) {
        this['commit_message'] = commitMessage;
    }
    public get commitMessage(): string | undefined {
        return this['commit_message'];
    }
}