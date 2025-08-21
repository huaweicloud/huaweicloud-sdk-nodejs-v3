

export class FileBodyDto {
    public name?: string;
    private 'file_path'?: string;
    public branch?: string;
    private 'commit_message'?: string;
    private 'author_email'?: string;
    private 'author_name'?: string;
    public content?: string;
    public encoding?: string;
    public constructor(filePath?: string, branch?: string, commitMessage?: string, content?: string) { 
        this['file_path'] = filePath;
        this['branch'] = branch;
        this['commit_message'] = commitMessage;
        this['content'] = content;
    }
    public withName(name: string): FileBodyDto {
        this['name'] = name;
        return this;
    }
    public withFilePath(filePath: string): FileBodyDto {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withBranch(branch: string): FileBodyDto {
        this['branch'] = branch;
        return this;
    }
    public withCommitMessage(commitMessage: string): FileBodyDto {
        this['commit_message'] = commitMessage;
        return this;
    }
    public set commitMessage(commitMessage: string  | undefined) {
        this['commit_message'] = commitMessage;
    }
    public get commitMessage(): string | undefined {
        return this['commit_message'];
    }
    public withAuthorEmail(authorEmail: string): FileBodyDto {
        this['author_email'] = authorEmail;
        return this;
    }
    public set authorEmail(authorEmail: string  | undefined) {
        this['author_email'] = authorEmail;
    }
    public get authorEmail(): string | undefined {
        return this['author_email'];
    }
    public withAuthorName(authorName: string): FileBodyDto {
        this['author_name'] = authorName;
        return this;
    }
    public set authorName(authorName: string  | undefined) {
        this['author_name'] = authorName;
    }
    public get authorName(): string | undefined {
        return this['author_name'];
    }
    public withContent(content: string): FileBodyDto {
        this['content'] = content;
        return this;
    }
    public withEncoding(encoding: string): FileBodyDto {
        this['encoding'] = encoding;
        return this;
    }
}