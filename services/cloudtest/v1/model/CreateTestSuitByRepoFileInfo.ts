

export class CreateTestSuitByRepoFileInfo {
    private 'testsuite_name'?: string;
    private 'repository_id'?: string;
    private 'repository_branch'?: string;
    private 'file_path'?: string;
    public constructor(testsuiteName?: string, repositoryId?: string, repositoryBranch?: string, filePath?: string) { 
        this['testsuite_name'] = testsuiteName;
        this['repository_id'] = repositoryId;
        this['repository_branch'] = repositoryBranch;
        this['file_path'] = filePath;
    }
    public withTestsuiteName(testsuiteName: string): CreateTestSuitByRepoFileInfo {
        this['testsuite_name'] = testsuiteName;
        return this;
    }
    public set testsuiteName(testsuiteName: string  | undefined) {
        this['testsuite_name'] = testsuiteName;
    }
    public get testsuiteName(): string | undefined {
        return this['testsuite_name'];
    }
    public withRepositoryId(repositoryId: string): CreateTestSuitByRepoFileInfo {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: string  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): string | undefined {
        return this['repository_id'];
    }
    public withRepositoryBranch(repositoryBranch: string): CreateTestSuitByRepoFileInfo {
        this['repository_branch'] = repositoryBranch;
        return this;
    }
    public set repositoryBranch(repositoryBranch: string  | undefined) {
        this['repository_branch'] = repositoryBranch;
    }
    public get repositoryBranch(): string | undefined {
        return this['repository_branch'];
    }
    public withFilePath(filePath: string): CreateTestSuitByRepoFileInfo {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
}