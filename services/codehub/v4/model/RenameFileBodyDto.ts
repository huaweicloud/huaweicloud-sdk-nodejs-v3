

export class RenameFileBodyDto {
    private 'file_path'?: string;
    private 'branch_name'?: string;
    private 'commit_message'?: string;
    private 'start_branch'?: string;
    private 'author_email'?: string;
    private 'author_name'?: string;
    private 'previous_path'?: string;
    private 'infer_content'?: boolean;
    public content?: string;
    public encoding?: string;
    private 'last_commit_id'?: string;
    public constructor(filePath?: string, branchName?: string, commitMessage?: string, previousPath?: string) { 
        this['file_path'] = filePath;
        this['branch_name'] = branchName;
        this['commit_message'] = commitMessage;
        this['previous_path'] = previousPath;
    }
    public withFilePath(filePath: string): RenameFileBodyDto {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withBranchName(branchName: string): RenameFileBodyDto {
        this['branch_name'] = branchName;
        return this;
    }
    public set branchName(branchName: string  | undefined) {
        this['branch_name'] = branchName;
    }
    public get branchName(): string | undefined {
        return this['branch_name'];
    }
    public withCommitMessage(commitMessage: string): RenameFileBodyDto {
        this['commit_message'] = commitMessage;
        return this;
    }
    public set commitMessage(commitMessage: string  | undefined) {
        this['commit_message'] = commitMessage;
    }
    public get commitMessage(): string | undefined {
        return this['commit_message'];
    }
    public withStartBranch(startBranch: string): RenameFileBodyDto {
        this['start_branch'] = startBranch;
        return this;
    }
    public set startBranch(startBranch: string  | undefined) {
        this['start_branch'] = startBranch;
    }
    public get startBranch(): string | undefined {
        return this['start_branch'];
    }
    public withAuthorEmail(authorEmail: string): RenameFileBodyDto {
        this['author_email'] = authorEmail;
        return this;
    }
    public set authorEmail(authorEmail: string  | undefined) {
        this['author_email'] = authorEmail;
    }
    public get authorEmail(): string | undefined {
        return this['author_email'];
    }
    public withAuthorName(authorName: string): RenameFileBodyDto {
        this['author_name'] = authorName;
        return this;
    }
    public set authorName(authorName: string  | undefined) {
        this['author_name'] = authorName;
    }
    public get authorName(): string | undefined {
        return this['author_name'];
    }
    public withPreviousPath(previousPath: string): RenameFileBodyDto {
        this['previous_path'] = previousPath;
        return this;
    }
    public set previousPath(previousPath: string  | undefined) {
        this['previous_path'] = previousPath;
    }
    public get previousPath(): string | undefined {
        return this['previous_path'];
    }
    public withInferContent(inferContent: boolean): RenameFileBodyDto {
        this['infer_content'] = inferContent;
        return this;
    }
    public set inferContent(inferContent: boolean  | undefined) {
        this['infer_content'] = inferContent;
    }
    public get inferContent(): boolean | undefined {
        return this['infer_content'];
    }
    public withContent(content: string): RenameFileBodyDto {
        this['content'] = content;
        return this;
    }
    public withEncoding(encoding: string): RenameFileBodyDto {
        this['encoding'] = encoding;
        return this;
    }
    public withLastCommitId(lastCommitId: string): RenameFileBodyDto {
        this['last_commit_id'] = lastCommitId;
        return this;
    }
    public set lastCommitId(lastCommitId: string  | undefined) {
        this['last_commit_id'] = lastCommitId;
    }
    public get lastCommitId(): string | undefined {
        return this['last_commit_id'];
    }
}