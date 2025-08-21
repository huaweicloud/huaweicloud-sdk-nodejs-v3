

export class DeleteFileRequest {
    private 'repository_id'?: number;
    private 'file_path'?: string;
    private 'author_name'?: string;
    public branch?: string;
    private 'commit_message'?: string;
    private 'author_email'?: string;
    public constructor(repositoryId?: number, filePath?: string, branch?: string, commitMessage?: string) { 
        this['repository_id'] = repositoryId;
        this['file_path'] = filePath;
        this['branch'] = branch;
        this['commit_message'] = commitMessage;
    }
    public withRepositoryId(repositoryId: number): DeleteFileRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withFilePath(filePath: string): DeleteFileRequest {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withAuthorName(authorName: string): DeleteFileRequest {
        this['author_name'] = authorName;
        return this;
    }
    public set authorName(authorName: string  | undefined) {
        this['author_name'] = authorName;
    }
    public get authorName(): string | undefined {
        return this['author_name'];
    }
    public withBranch(branch: string): DeleteFileRequest {
        this['branch'] = branch;
        return this;
    }
    public withCommitMessage(commitMessage: string): DeleteFileRequest {
        this['commit_message'] = commitMessage;
        return this;
    }
    public set commitMessage(commitMessage: string  | undefined) {
        this['commit_message'] = commitMessage;
    }
    public get commitMessage(): string | undefined {
        return this['commit_message'];
    }
    public withAuthorEmail(authorEmail: string): DeleteFileRequest {
        this['author_email'] = authorEmail;
        return this;
    }
    public set authorEmail(authorEmail: string  | undefined) {
        this['author_email'] = authorEmail;
    }
    public get authorEmail(): string | undefined {
        return this['author_email'];
    }
}