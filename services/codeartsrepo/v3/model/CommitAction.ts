

export class CommitAction {
    public action?: string;
    private 'file_path'?: string;
    private 'previous_path'?: string;
    public content?: string;
    public encoding?: string;
    private 'last_commit_id'?: string;
    private 'execute_filemode'?: boolean;
    public constructor(action?: string, filePath?: string) { 
        this['action'] = action;
        this['file_path'] = filePath;
    }
    public withAction(action: string): CommitAction {
        this['action'] = action;
        return this;
    }
    public withFilePath(filePath: string): CommitAction {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withPreviousPath(previousPath: string): CommitAction {
        this['previous_path'] = previousPath;
        return this;
    }
    public set previousPath(previousPath: string  | undefined) {
        this['previous_path'] = previousPath;
    }
    public get previousPath(): string | undefined {
        return this['previous_path'];
    }
    public withContent(content: string): CommitAction {
        this['content'] = content;
        return this;
    }
    public withEncoding(encoding: string): CommitAction {
        this['encoding'] = encoding;
        return this;
    }
    public withLastCommitId(lastCommitId: string): CommitAction {
        this['last_commit_id'] = lastCommitId;
        return this;
    }
    public set lastCommitId(lastCommitId: string  | undefined) {
        this['last_commit_id'] = lastCommitId;
    }
    public get lastCommitId(): string | undefined {
        return this['last_commit_id'];
    }
    public withExecuteFilemode(executeFilemode: boolean): CommitAction {
        this['execute_filemode'] = executeFilemode;
        return this;
    }
    public set executeFilemode(executeFilemode: boolean  | undefined) {
        this['execute_filemode'] = executeFilemode;
    }
    public get executeFilemode(): boolean | undefined {
        return this['execute_filemode'];
    }
}