

export class ShowDiffLinesRequest {
    private 'repository_id'?: number;
    private 'file_path'?: string;
    private 'commit_id'?: string;
    public start?: number;
    public end?: number;
    public constructor(repositoryId?: number, filePath?: string, commitId?: string, start?: number, end?: number) { 
        this['repository_id'] = repositoryId;
        this['file_path'] = filePath;
        this['commit_id'] = commitId;
        this['start'] = start;
        this['end'] = end;
    }
    public withRepositoryId(repositoryId: number): ShowDiffLinesRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withFilePath(filePath: string): ShowDiffLinesRequest {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withCommitId(commitId: string): ShowDiffLinesRequest {
        this['commit_id'] = commitId;
        return this;
    }
    public set commitId(commitId: string  | undefined) {
        this['commit_id'] = commitId;
    }
    public get commitId(): string | undefined {
        return this['commit_id'];
    }
    public withStart(start: number): ShowDiffLinesRequest {
        this['start'] = start;
        return this;
    }
    public withEnd(end: number): ShowDiffLinesRequest {
        this['end'] = end;
        return this;
    }
}